// Test setup file for Jest

// Mock environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret-key';

// Global test timeout
jest.setTimeout(10000);

// Mock console methods in tests to reduce noise
global.console = {
  ...console,
  // Uncomment to suppress console.log in tests
  // log: jest.fn(),
  // debug: jest.fn(),
  // info: jest.fn(),
  // warn: jest.fn(),
  // error: jest.fn(),
};

// Mock Express request and response objects
export const mockRequest = (overrides = {}) => {
  const req = {
    body: {},
    query: {},
    params: {},
    headers: {},
    method: 'GET',
    url: '/test',
    originalUrl: '/test',
    ip: '127.0.0.1',
    connection: { remoteAddress: '127.0.0.1' },
    get: jest.fn(),
    ...overrides
  };
  return req as any;
};

export const mockResponse = (overrides = {}) => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
    setHeader: jest.fn(),
    removeHeader: jest.fn(),
    redirect: jest.fn(),
    download: jest.fn(),
    pipe: jest.fn(),
    ...overrides
  };
  return res as any;
};

export const mockNext = jest.fn();

// Helper function to create mock user
export const mockUser = (overrides = {}) => ({
  id: '1',
  email: 'test@example.com',
  role: 'user',
  permissions: ['read'],
  ...overrides
});

// Helper function to create mock JWT token
export const createMockToken = (user = mockUser()) => {
  // Simple mock token - in real tests you might want to use a proper JWT library
  return `mock.jwt.token.${user.id}`;
};

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});

// Global test utilities
global.mockRequest = mockRequest;
global.mockResponse = mockResponse;
global.mockNext = mockNext;
global.mockUser = mockUser;
global.createMockToken = createMockToken;
