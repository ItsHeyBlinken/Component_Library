/**
 * OAuth2Middleware
 * 
 * Purpose: OAuth 2.0 authentication flow middleware
 * 
 * Features:
 * - Multiple OAuth providers (Google, GitHub, etc.)
 * - Token refresh handling
 * - Scope validation
 * - State parameter verification
 * - PKCE support
 * 
 * Use Cases:
 * - Social login integration
 * - Third-party authentication
 * - OAuth 2.0 authorization flows
 * - Token management
 */

import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import { OAuth2ProviderConfig, OAuth2TokenResponse, OAuth2UserInfo } from '../../types';

export class OAuth2Middleware {
  private static providers: Map<string, OAuth2ProviderConfig> = new Map();
  private static stateStore: Map<string, { state: string; codeVerifier?: string; timestamp: number }> = new Map();

  /**
   * Register an OAuth2 provider
   */
  static registerProvider(name: string, config: OAuth2ProviderConfig): void {
    this.providers.set(name, config);
  }

  /**
   * Generate authorization URL for OAuth2 flow
   */
  static getAuthorizationURL(providerName: string, req: Request, res: Response): void {
    const provider = this.providers.get(providerName);
    
    if (!provider) {
      res.status(400).json({
        success: false,
        error: 'INVALID_PROVIDER',
        message: `OAuth2 provider '${providerName}' is not registered`
      });
      return;
    }

    // Generate state parameter
    const state = crypto.randomBytes(32).toString('hex');
    const stateKey = `${providerName}:${state}`;
    
    let codeVerifier: string | undefined;
    let codeChallenge: string | undefined;

    // Generate PKCE parameters if enabled
    if (provider.pkce) {
      codeVerifier = crypto.randomBytes(32).toString('base64url');
      codeChallenge = crypto
        .createHash('sha256')
        .update(codeVerifier)
        .digest('base64url');
    }

    // Store state with expiration (10 minutes)
    this.stateStore.set(stateKey, {
      state,
      codeVerifier,
      timestamp: Date.now()
    });

    // Clean up expired states
    this.cleanupExpiredStates();

    // Build authorization URL
    const params = new URLSearchParams({
      client_id: provider.clientId,
      redirect_uri: provider.redirectURI,
      response_type: 'code',
      state: state,
      ...(provider.scope && { scope: provider.scope.join(' ') }),
      ...(codeChallenge && { code_challenge: codeChallenge, code_challenge_method: 'S256' })
    });

    const authURL = `${provider.authorizationURL}?${params.toString()}`;

    res.json({
      success: true,
      data: {
        authorizationURL: authURL,
        state: state
      }
    });
  }

  /**
   * Handle OAuth2 callback and exchange code for token
   */
  static handleCallback(providerName: string) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const provider = this.providers.get(providerName);
        
        if (!provider) {
          res.status(400).json({
            success: false,
            error: 'INVALID_PROVIDER',
            message: `OAuth2 provider '${providerName}' is not registered`
          });
          return;
        }

        const { code, state, error } = req.query;

        if (error) {
          res.status(400).json({
            success: false,
            error: 'OAUTH_ERROR',
            message: `OAuth2 error: ${error}`
          });
          return;
        }

        if (!code || !state) {
          res.status(400).json({
            success: false,
            error: 'MISSING_PARAMETERS',
            message: 'Authorization code and state are required'
          });
          return;
        }

        // Verify state parameter
        const stateKey = `${providerName}:${state}`;
        const storedState = this.stateStore.get(stateKey);

        if (!storedState) {
          res.status(400).json({
            success: false,
            error: 'INVALID_STATE',
            message: 'Invalid or expired state parameter'
          });
          return;
        }

        // Check state expiration (10 minutes)
        if (Date.now() - storedState.timestamp > 10 * 60 * 1000) {
          this.stateStore.delete(stateKey);
          res.status(400).json({
            success: false,
            error: 'EXPIRED_STATE',
            message: 'State parameter has expired'
          });
          return;
        }

        // Remove used state
        this.stateStore.delete(stateKey);

        // Exchange authorization code for access token
        const tokenParams = new URLSearchParams({
          client_id: provider.clientId,
          client_secret: provider.clientSecret,
          code: code as string,
          redirect_uri: provider.redirectURI,
          grant_type: 'authorization_code',
          ...(storedState.codeVerifier && { code_verifier: storedState.codeVerifier })
        });

        const tokenResponse = await fetch(provider.tokenURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: tokenParams.toString()
        });

        if (!tokenResponse.ok) {
          const errorData = await tokenResponse.json().catch(() => ({}));
          res.status(400).json({
            success: false,
            error: 'TOKEN_EXCHANGE_FAILED',
            message: 'Failed to exchange authorization code for token',
            details: errorData
          });
          return;
        }

        const tokenData: OAuth2TokenResponse = await tokenResponse.json();

        // Fetch user info if userInfoURL is provided
        let userInfo: OAuth2UserInfo | null = null;
        if (provider.userInfoURL) {
          const userInfoResponse = await fetch(provider.userInfoURL, {
            headers: {
              'Authorization': `Bearer ${tokenData.access_token}`,
              'Accept': 'application/json'
            }
          });

          if (userInfoResponse.ok) {
            userInfo = await userInfoResponse.json();
          }
        }

        // Add token and user info to request
        (req as any).oauth2 = {
          provider: providerName,
          token: tokenData,
          userInfo: userInfo
        };

        next();
      } catch (error: any) {
        res.status(500).json({
          success: false,
          error: 'OAUTH_CALLBACK_ERROR',
          message: error.message || 'An error occurred during OAuth2 callback'
        });
      }
    };
  }

  /**
   * Refresh OAuth2 access token
   */
  static refreshToken(providerName: string) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const provider = this.providers.get(providerName);
        
        if (!provider) {
          res.status(400).json({
            success: false,
            error: 'INVALID_PROVIDER',
            message: `OAuth2 provider '${providerName}' is not registered`
          });
          return;
        }

        const refreshToken = req.body.refresh_token || (req as any).oauth2?.token?.refresh_token;

        if (!refreshToken) {
          res.status(400).json({
            success: false,
            error: 'MISSING_REFRESH_TOKEN',
            message: 'Refresh token is required'
          });
          return;
        }

        const tokenParams = new URLSearchParams({
          client_id: provider.clientId,
          client_secret: provider.clientSecret,
          refresh_token: refreshToken,
          grant_type: 'refresh_token'
        });

        const tokenResponse = await fetch(provider.tokenURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: tokenParams.toString()
        });

        if (!tokenResponse.ok) {
          const errorData = await tokenResponse.json().catch(() => ({}));
          res.status(400).json({
            success: false,
            error: 'TOKEN_REFRESH_FAILED',
            message: 'Failed to refresh access token',
            details: errorData
          });
          return;
        }

        const tokenData: OAuth2TokenResponse = await tokenResponse.json();

        // Update token in request
        if ((req as any).oauth2) {
          (req as any).oauth2.token = tokenData;
        } else {
          (req as any).oauth2 = {
            provider: providerName,
            token: tokenData
          };
        }

        next();
      } catch (error: any) {
        res.status(500).json({
          success: false,
          error: 'TOKEN_REFRESH_ERROR',
          message: error.message || 'An error occurred during token refresh'
        });
      }
    };
  }

  /**
   * Verify OAuth2 access token
   */
  static verifyToken(providerName: string) {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader) {
          res.status(401).json({
            success: false,
            error: 'MISSING_TOKEN',
            message: 'Authorization header with Bearer token is required'
          });
          return;
        }

        const token = authHeader.startsWith('Bearer ') 
          ? authHeader.substring(7) 
          : authHeader;

        const provider = this.providers.get(providerName);
        
        if (!provider) {
          res.status(400).json({
            success: false,
            error: 'INVALID_PROVIDER',
            message: `OAuth2 provider '${providerName}' is not registered`
          });
          return;
        }

        // Verify token with provider (if userInfoURL is available, use it to verify)
        if (provider.userInfoURL) {
          const userInfoResponse = await fetch(provider.userInfoURL, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
            }
          });

          if (!userInfoResponse.ok) {
            res.status(401).json({
              success: false,
              error: 'INVALID_TOKEN',
              message: 'OAuth2 token is invalid or expired'
            });
            return;
          }

          const userInfo: OAuth2UserInfo = await userInfoResponse.json();
          
          // Add user info to request
          (req as any).oauth2 = {
            provider: providerName,
            token: { access_token: token },
            userInfo: userInfo
          };
        } else {
          // If no userInfoURL, just store the token
          (req as any).oauth2 = {
            provider: providerName,
            token: { access_token: token }
          };
        }

        next();
      } catch (error: any) {
        res.status(500).json({
          success: false,
          error: 'TOKEN_VERIFICATION_ERROR',
          message: error.message || 'An error occurred during token verification'
        });
      }
    };
  }

  /**
   * Validate OAuth2 scopes
   */
  static requireScopes(requiredScopes: string[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
      const oauth2 = (req as any).oauth2;
      
      if (!oauth2 || !oauth2.token) {
        res.status(401).json({
          success: false,
          error: 'MISSING_OAUTH2_TOKEN',
          message: 'OAuth2 token is required'
        });
        return;
      }

      const tokenScopes = oauth2.token.scope?.split(' ') || [];
      const hasAllScopes = requiredScopes.every(scope => tokenScopes.includes(scope));

      if (!hasAllScopes) {
        res.status(403).json({
          success: false,
          error: 'INSUFFICIENT_SCOPES',
          message: `Required scopes: ${requiredScopes.join(', ')}`,
          grantedScopes: tokenScopes
        });
        return;
      }

      next();
    };
  }

  /**
   * Clean up expired state entries
   */
  private static cleanupExpiredStates(): void {
    const now = Date.now();
    const expirationTime = 10 * 60 * 1000; // 10 minutes

    for (const [key, value] of this.stateStore.entries()) {
      if (now - value.timestamp > expirationTime) {
        this.stateStore.delete(key);
      }
    }
  }

  /**
   * Get registered providers
   */
  static getProviders(): string[] {
    return Array.from(this.providers.keys());
  }
}

