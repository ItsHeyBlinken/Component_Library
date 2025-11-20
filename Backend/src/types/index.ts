// Common types used across all backend components

export interface BaseResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
  path: string;
}

export interface PaginatedResponse<T> extends BaseResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ValidationError {
  field: string;
  message: string;
  value?: any;
  rule?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  sanitizedData?: any;
}

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  permissions: string[];
  iat?: number;
  exp?: number;
}

export interface JWTConfig {
  secret: string;
  expiresIn: string;
  issuer?: string;
  audience?: string;
}

export interface RateLimitConfig {
  windowMs: number;
  max: number;
  message?: string;
  statusCode?: number;
  headers?: boolean;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export interface LogConfig {
  level: 'error' | 'warn' | 'info' | 'debug';
  format: 'json' | 'simple' | 'colorize';
  transports: string[];
  filename?: string;
  maxSize?: string;
  maxFiles?: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb';
  pool?: {
    max: number;
    min: number;
    acquire: number;
    idle: number;
  };
}

export interface FileUploadConfig {
  destination: string;
  filename?: (req: any, file: any, cb: any) => void;
  limits?: {
    fileSize: number;
    files: number;
  };
  fileFilter?: (req: any, file: any, cb: any) => void;
}

export interface ErrorConfig {
  includeStack: boolean;
  logErrors: boolean;
  formatErrors: boolean;
}

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface RouteConfig {
  method: HTTPMethod;
  path: string;
  middleware?: any[];
  handler: any;
  validation?: any;
  auth?: boolean;
  rateLimit?: RateLimitConfig;
}

export interface ServiceConfig {
  name: string;
  version: string;
  environment: 'development' | 'staging' | 'production';
  port: number;
  host: string;
  cors?: {
    origin: string | string[];
    credentials: boolean;
  };
  security?: {
    helmet: boolean;
    rateLimit: boolean;
    cors: boolean;
  };
}

export interface OAuth2ProviderConfig {
  clientId: string;
  clientSecret: string;
  authorizationURL: string;
  tokenURL: string;
  userInfoURL?: string;
  redirectURI: string;
  scope?: string[];
  state?: string;
  pkce?: boolean;
}

export interface OAuth2TokenResponse {
  access_token: string;
  token_type: string;
  expires_in?: number;
  refresh_token?: string;
  scope?: string;
  id_token?: string;
}

export interface OAuth2UserInfo {
  id: string;
  email: string;
  name?: string;
  picture?: string;
  [key: string]: any;
}

export interface RBACRole {
  name: string;
  permissions: string[];
  parent?: string; // Parent role for inheritance
}

export interface RBACConfig {
  roles: RBACRole[];
  defaultRole?: string;
  enableInheritance?: boolean;
}