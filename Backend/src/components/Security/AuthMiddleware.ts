import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthUser, JWTConfig } from '../../types';

export class AuthMiddleware {
  private static config: JWTConfig;

  /**
   * Initialize the authentication middleware with configuration
   */
  static initialize(config: JWTConfig): void {
    this.config = config;
  }

  /**
   * Verify JWT token from Authorization header
   */
  static verifyToken(req: Request, res: Response, next: NextFunction): void {
    try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader) {
        res.status(401).json({
          success: false,
          error: 'Access token required',
          message: 'Authorization header missing'
        });
        return;
      }

      const token = authHeader.startsWith('Bearer ') 
        ? authHeader.substring(7) 
        : authHeader;

      if (!token) {
        res.status(401).json({
          success: false,
          error: 'Invalid token format',
          message: 'Token must be in format: Bearer <token>'
        });
        return;
      }

      const decoded = jwt.verify(token, this.config.secret) as AuthUser;
      
      // Add user to request object
      (req as any).user = decoded;
      
      next();
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        res.status(401).json({
          success: false,
          error: 'Invalid token',
          message: 'Token is invalid or expired'
        });
      } else if (error instanceof jwt.TokenExpiredError) {
        res.status(401).json({
          success: false,
          error: 'Token expired',
          message: 'Access token has expired'
        });
      } else {
        res.status(500).json({
          success: false,
          error: 'Authentication error',
          message: 'Failed to verify token'
        });
      }
    }
  }

  /**
   * Check if user has required role
   */
  static requireRole(roles: string | string[]): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user as AuthUser;
      
      if (!user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required',
          message: 'User must be authenticated'
        });
        return;
      }

      const requiredRoles = Array.isArray(roles) ? roles : [roles];
      
      if (!requiredRoles.includes(user.role)) {
        res.status(403).json({
          success: false,
          error: 'Insufficient permissions',
          message: `Role ${user.role} does not have access to this resource`
        });
        return;
      }

      next();
    };
  }

  /**
   * Check if user has required permission
   */
  static requirePermission(permissions: string | string[]): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user as AuthUser;
      
      if (!user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required',
          message: 'User must be authenticated'
        });
        return;
      }

      const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions];
      
      const hasPermission = requiredPermissions.every(permission => 
        user.permissions.includes(permission)
      );

      if (!hasPermission) {
        res.status(403).json({
          success: false,
          error: 'Insufficient permissions',
          message: 'User does not have required permissions'
        });
        return;
      }

      next();
    };
  }

  /**
   * Optional authentication - adds user if token is valid, but doesn't require it
   */
  static optionalAuth(req: Request, res: Response, next: NextFunction): void {
    try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        next();
        return;
      }

      const token = authHeader.substring(7);
      const decoded = jwt.verify(token, this.config.secret) as AuthUser;
      
      (req as any).user = decoded;
      next();
    } catch (error) {
      // Continue without authentication if token is invalid
      next();
    }
  }

  /**
   * Generate JWT token for user
   */
  static generateToken(user: Omit<AuthUser, 'iat' | 'exp'>): string {
    if (!this.config) {
      throw new Error('AuthMiddleware not initialized. Call initialize() first.');
    }

    return jwt.sign(user, this.config.secret, {
      expiresIn: this.config.expiresIn,
      issuer: this.config.issuer,
      audience: this.config.audience
    });
  }

  /**
   * Refresh token if it's about to expire
   */
  static refreshTokenIfNeeded(req: Request, res: Response, next: NextFunction): void {
    const user = (req as any).user as AuthUser;
    
    if (!user || !user.exp) {
      next();
      return;
    }

    const now = Math.floor(Date.now() / 1000);
    const timeUntilExpiry = user.exp - now;
    
    // Refresh if token expires in less than 5 minutes
    if (timeUntilExpiry < 300) {
      const newToken = this.generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
        permissions: user.permissions
      });

      res.setHeader('X-New-Token', newToken);
    }

    next();
  }
}
