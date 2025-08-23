import express from 'express';
import { 
  AuthMiddleware, 
  SecurityMiddleware, 
  RequestValidator, 
  ErrorHandler, 
  ResponseFormatter, 
  RateLimitMiddleware,
  Logger 
} from '../src';

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize components
const logger = new Logger('BasicServer');

// Initialize authentication middleware
AuthMiddleware.initialize({
  secret: process.env.JWT_SECRET || 'your-secret-key',
  expiresIn: '24h'
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Security middleware
app.use(SecurityMiddleware.helmet());
app.use(SecurityMiddleware.cors());
app.use(SecurityMiddleware.compression());
app.use(SecurityMiddleware.logging());
app.use(SecurityMiddleware.securityHeaders);
app.use(SecurityMiddleware.requestSizeLimit('10mb'));

// Rate limiting
app.use(RateLimitMiddleware.create({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));

// Health check
app.get('/health', SecurityMiddleware.healthCheck);

// Public routes
app.post('/auth/login', 
  RequestValidator.validateBody({
    'email|required|email': 'Email is required and must be valid',
    'password|required|min:6': 'Password is required and must be at least 6 characters'
  }),
  async (req, res) => {
    try {
      const { email, password } = (req as any).sanitizedBody;
      
      // Mock authentication logic
      if (email === 'admin@example.com' && password === 'password123') {
        const token = AuthMiddleware.generateToken({
          id: '1',
          email: 'admin@example.com',
          role: 'admin',
          permissions: ['read', 'write', 'delete']
        });
        
        ResponseFormatter.success(res, { token }, 'Login successful');
      } else {
        ResponseFormatter.unauthorized(res, 'INVALID_CREDENTIALS', 'Invalid email or password');
      }
    } catch (error) {
      logger.error('Login error', { error: error.message, email: req.body.email });
      ResponseFormatter.internalError(res);
    }
  }
);

// Protected routes
app.get('/protected', 
  AuthMiddleware.verifyToken,
  (req, res) => {
    const user = (req as any).user;
    ResponseFormatter.success(res, { 
      message: 'This is a protected route',
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  }
);

app.get('/admin', 
  AuthMiddleware.verifyToken,
  AuthMiddleware.requireRole('admin'),
  (req, res) => {
    ResponseFormatter.success(res, { 
      message: 'This is an admin-only route',
      user: (req as any).user
    });
  }
);

// User management routes
app.post('/users',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission('write'),
  RequestValidator.validateBody({
    'name|required|min:2': 'Name is required and must be at least 2 characters',
    'email|required|email': 'Email is required and must be valid',
    'role|required|in:user,admin,moderator': 'Role must be user, admin, or moderator'
  }),
  async (req, res) => {
    try {
      const userData = (req as any).sanitizedBody;
      
      // Mock user creation
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString()
      };
      
      logger.info('User created', { userId: newUser.id, email: newUser.email });
      ResponseFormatter.created(res, newUser);
    } catch (error) {
      logger.error('User creation error', { error: error.message });
      ResponseFormatter.internalError(res);
    }
  }
);

app.get('/users',
  AuthMiddleware.verifyToken,
  AuthMiddleware.requirePermission('read'),
  RequestValidator.validateQuery({
    'page|toNumber|min:1': 'Page must be a positive number',
    'limit|toNumber|min:1|max:100': 'Limit must be between 1 and 100'
  }),
  async (req, res) => {
    try {
      const { page = 1, limit = 10 } = (req as any).sanitizedQuery;
      
      // Mock user data
      const mockUsers = Array.from({ length: 50 }, (_, i) => ({
        id: (i + 1).toString(),
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: i === 0 ? 'admin' : 'user'
      }));
      
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = mockUsers.slice(startIndex, endIndex);
      
      ResponseFormatter.paginated(res, paginatedUsers, page, limit, mockUsers.length);
    } catch (error) {
      logger.error('User list error', { error: error.message });
      ResponseFormatter.internalError(res);
    }
  }
);

// File upload route with rate limiting
app.post('/upload',
  AuthMiddleware.verifyToken,
  RateLimitMiddleware.createUploadLimiter({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5 // 5 uploads per hour
  }),
  (req, res) => {
    ResponseFormatter.success(res, { message: 'Upload endpoint ready' });
  }
);

// 404 handler
app.use(SecurityMiddleware.notFound);

// Global error handler
app.use(ErrorHandler.global());

// Start server
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`, { 
    port: PORT, 
    environment: process.env.NODE_ENV || 'development' 
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  logger.info('SIGINT received, shutting down gracefully');
  process.exit(0);
});

export default app;
