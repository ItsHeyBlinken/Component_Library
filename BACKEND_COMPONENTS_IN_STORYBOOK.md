# Backend Components in Storybook

## Overview

Backend components are now available in Storybook alongside frontend components! You can view, copy, and use backend component code directly from Storybook.

## How to Access

1. **Start Storybook:**
   ```bash
   cd Frontend
   npm run storybook
   ```

2. **Navigate to Backend Components:**
   - Open `http://localhost:6006`
   - Look for **"Backend Components"** in the sidebar
   - Expand to see all available backend components

## Available Backend Components

### Security Components

#### AuthMiddleware
- **Location:** `Backend Components/Security/AuthMiddleware`
- **Features:**
  - JWT token generation and verification
  - Role-based access control
  - Permission-based authorization
  - Complete examples with copy/paste

#### OAuth2Middleware
- **Location:** `Backend Components/Security/OAuth2Middleware`
- **Features:**
  - Multiple OAuth providers (Google, GitHub, etc.)
  - PKCE support
  - Token refresh handling
  - Complete authorization flow examples

#### RBACMiddleware
- **Location:** `Backend Components/Security/RBACMiddleware`
- **Features:**
  - Hierarchical role system
  - Permission inheritance
  - Dynamic permission checking
  - Role management examples

#### SecurityMiddleware
- **Location:** `Backend Components/Security/SecurityMiddleware`
- **Features:**
  - Helmet security headers
  - CORS configuration
  - Response compression
  - Request size limiting

### Validation Components

#### RequestValidator
- **Location:** `Backend Components/Validation/RequestValidator`
- **Features:**
  - Request body validation
  - Query parameter validation
  - URL parameter validation
  - Complete validation rules reference

### Error Handling Components

#### ErrorHandler
- **Location:** `Backend Components/ErrorHandling/ErrorHandler`
- **Features:**
  - Custom error classes
  - Global error handler
  - All error types reference
  - Complete examples

## How to Use

### Step 1: View Component
1. Open Storybook
2. Navigate to the backend component you need
3. Browse through the examples

### Step 2: Copy Code
1. Find the code example you want
2. Click the **"Copy Code"** button
3. Code is copied to your clipboard

### Step 3: Paste in Your Project
1. Open your backend project
2. Paste the code where needed
3. Install dependencies if required:
   ```bash
   npm install express
   npm install jsonwebtoken
   npm install helmet cors compression
   ```

## Example Workflow

### Using AuthMiddleware

1. **Open Storybook** → `Backend Components/Security/AuthMiddleware`
2. **Copy "Basic Setup"** example
3. **Paste in your `server.ts`** file
4. **Copy "Generate Token"** example
5. **Paste in your login route**
6. **Copy "Protect Route"** example
7. **Paste in your protected routes**

### Using RequestValidator

1. **Open Storybook** → `Backend Components/Validation/RequestValidator`
2. **Copy "Validate Request Body"** example
3. **Paste in your POST route**
4. **Copy "Validation Rules"** reference
5. **Use rules in your validation schemas**

## Benefits

✅ **Visual Code Examples** - See code in a clean, readable format  
✅ **Copy/Paste Ready** - One-click copy to clipboard  
✅ **Complete Examples** - Full working code, not snippets  
✅ **Best Practices** - Examples follow best practices  
✅ **All in One Place** - Frontend and backend components together  

## File Structure

Backend component stories are located in:
```
Frontend/src/components/BackendComponents/
├── AuthMiddleware.stories.tsx
├── OAuth2Middleware.stories.tsx
├── RBACMiddleware.stories.tsx
├── SecurityMiddleware.stories.tsx
├── RequestValidator.stories.tsx
├── ErrorHandler.stories.tsx
└── index.ts
```

## Adding More Backend Components

To add more backend components to Storybook:

1. Create a new story file: `Frontend/src/components/BackendComponents/ComponentName.stories.tsx`
2. Follow the pattern from existing stories
3. Use the `CodeExample` component for code blocks
4. Add to `index.ts` if needed
5. Storybook will automatically pick it up

## Tips

- **Use Complete Examples** - The "Complete Example" stories show full working code
- **Check Multiple Stories** - Each component has multiple examples for different use cases
- **Copy Configuration** - Configuration examples are ready to use
- **Reference Rules** - Validation rules and error types are documented

## Next Steps

1. Start Storybook: `cd Frontend && npm run storybook`
2. Explore backend components in the sidebar
3. Copy code examples you need
4. Integrate into your projects!

---

**Note:** Backend components are code-based (not visual like frontend components), so Storybook shows code examples instead of interactive UI. This makes it easy to copy/paste code into your backend projects!

