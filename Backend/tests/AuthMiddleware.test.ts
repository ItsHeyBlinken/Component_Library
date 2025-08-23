import { AuthMiddleware } from '../src/components/Security/AuthMiddleware';
import { mockRequest, mockResponse, mockNext, mockUser, createMockToken } from './setup';

describe('AuthMiddleware', () => {
  beforeEach(() => {
    // Reset AuthMiddleware configuration before each test
    (AuthMiddleware as any).config = undefined;
  });

  describe('initialize', () => {
    it('should initialize with configuration', () => {
      const config = {
        secret: 'test-secret',
        expiresIn: '1h'
      };

      expect(() => AuthMiddleware.initialize(config)).not.toThrow();
    });
  });

  describe('verifyToken', () => {
    beforeEach(() => {
      AuthMiddleware.initialize({
        secret: 'test-secret',
        expiresIn: '1h'
      });
    });

    it('should return 401 when no authorization header', () => {
      const req = mockRequest();
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.verifyToken(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Access token required',
        message: 'Authorization header missing'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when authorization header is malformed', () => {
      const req = mockRequest({
        headers: { authorization: 'InvalidFormat token123' }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.verifyToken(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid token format',
        message: 'Token must be in format: Bearer <token>'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 401 when token is missing after Bearer', () => {
      const req = mockRequest({
        headers: { authorization: 'Bearer ' }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.verifyToken(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Invalid token format',
        message: 'Token must be in format: Bearer <token>'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should call next() when token is valid', () => {
      const user = mockUser();
      const token = AuthMiddleware.generateToken(user);
      
      const req = mockRequest({
        headers: { authorization: `Bearer ${token}` }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.verifyToken(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeDefined();
      expect(req.user.id).toBe(user.id);
      expect(req.user.email).toBe(user.email);
    });

    it('should accept token without Bearer prefix', () => {
      const user = mockUser();
      const token = AuthMiddleware.generateToken(user);
      
      const req = mockRequest({
        headers: { authorization: token }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.verifyToken(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeDefined();
    });
  });

  describe('requireRole', () => {
    beforeEach(() => {
      AuthMiddleware.initialize({
        secret: 'test-secret',
        expiresIn: '1h'
      });
    });

    it('should return 401 when user is not authenticated', () => {
      const req = mockRequest();
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requireRole('admin');
      middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Authentication required',
        message: 'User must be authenticated'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 403 when user does not have required role', () => {
      const user = mockUser({ role: 'user' });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requireRole('admin');
      middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Insufficient permissions',
        message: 'Role user does not have access to this resource'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should call next() when user has required role', () => {
      const user = mockUser({ role: 'admin' });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requireRole('admin');
      middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should accept array of roles', () => {
      const user = mockUser({ role: 'moderator' });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requireRole(['admin', 'moderator']);
      middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('requirePermission', () => {
    beforeEach(() => {
      AuthMiddleware.initialize({
        secret: 'test-secret',
        expiresIn: '1h'
      });
    });

    it('should return 401 when user is not authenticated', () => {
      const req = mockRequest();
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requirePermission('read');
      middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Authentication required',
        message: 'User must be authenticated'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 403 when user does not have required permission', () => {
      const user = mockUser({ permissions: ['read'] });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requirePermission('write');
      middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        error: 'Insufficient permissions',
        message: 'User does not have required permissions'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should call next() when user has required permission', () => {
      const user = mockUser({ permissions: ['read', 'write'] });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requirePermission('write');
      middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should require all permissions when array is provided', () => {
      const user = mockUser({ permissions: ['read', 'write'] });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requirePermission(['read', 'write']);
      middleware(req, res, next);

      expect(next).toHaveBeenCalled();
    });

    it('should fail when user does not have all required permissions', () => {
      const user = mockUser({ permissions: ['read'] });
      const req = mockRequest({ user });
      const res = mockResponse();
      const next = mockNext();

      const middleware = AuthMiddleware.requirePermission(['read', 'write']);
      middleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('generateToken', () => {
    it('should throw error when not initialized', () => {
      const user = mockUser();

      expect(() => AuthMiddleware.generateToken(user)).toThrow(
        'AuthMiddleware not initialized. Call initialize() first.'
      );
    });

    it('should generate token when initialized', () => {
      AuthMiddleware.initialize({
        secret: 'test-secret',
        expiresIn: '1h'
      });

      const user = mockUser();
      const token = AuthMiddleware.generateToken(user);

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.split('.').length).toBe(3); // JWT has 3 parts
    });
  });

  describe('optionalAuth', () => {
    beforeEach(() => {
      AuthMiddleware.initialize({
        secret: 'test-secret',
        expiresIn: '1h'
      });
    });

    it('should call next() when no authorization header', () => {
      const req = mockRequest();
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.optionalAuth(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeUndefined();
    });

    it('should call next() when authorization header is malformed', () => {
      const req = mockRequest({
        headers: { authorization: 'InvalidFormat token123' }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.optionalAuth(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeUndefined();
    });

    it('should set user when token is valid', () => {
      const user = mockUser();
      const token = AuthMiddleware.generateToken(user);
      
      const req = mockRequest({
        headers: { authorization: `Bearer ${token}` }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.optionalAuth(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeDefined();
      expect(req.user.id).toBe(user.id);
    });

    it('should call next() when token is invalid', () => {
      const req = mockRequest({
        headers: { authorization: 'Bearer invalid-token' }
      });
      const res = mockResponse();
      const next = mockNext();

      AuthMiddleware.optionalAuth(req, res, next);

      expect(next).toHaveBeenCalled();
      expect(req.user).toBeUndefined();
    });
  });
});
