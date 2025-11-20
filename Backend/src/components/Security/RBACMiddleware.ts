/**
 * RBACMiddleware
 * 
 * Purpose: Role-based access control middleware
 * 
 * Features:
 * - Hierarchical roles
 * - Permission inheritance
 * - Dynamic permission checking
 * - Role assignment
 * - Audit logging
 * 
 * Use Cases:
 * - User authorization
 * - Permission-based access control
 * - Multi-tenant applications
 * - Admin panel access control
 */

import { Request, Response, NextFunction } from 'express';
import { RBACRole, RBACConfig, AuthUser } from '../../types';

export class RBACMiddleware {
  private static config: RBACConfig | null = null;
  private static roleMap: Map<string, RBACRole> = new Map();
  private static permissionCache: Map<string, Set<string>> = new Map();

  /**
   * Initialize RBAC with configuration
   */
  static initialize(config: RBACConfig): void {
    this.config = config;
    this.roleMap.clear();
    this.permissionCache.clear();

    // Build role map
    config.roles.forEach(role => {
      this.roleMap.set(role.name, role);
    });

    // Build permission cache with inheritance
    if (config.enableInheritance) {
      this.roleMap.forEach((role, roleName) => {
        this.buildPermissionCache(roleName);
      });
    } else {
      this.roleMap.forEach((role, roleName) => {
        this.permissionCache.set(roleName, new Set(role.permissions));
      });
    }
  }

  /**
   * Build permission cache with role inheritance
   */
  private static buildPermissionCache(roleName: string, visited: Set<string> = new Set()): Set<string> {
    // Check cache first
    if (this.permissionCache.has(roleName)) {
      return this.permissionCache.get(roleName)!;
    }

    // Prevent circular dependencies
    if (visited.has(roleName)) {
      return new Set();
    }

    visited.add(roleName);
    const role = this.roleMap.get(roleName);
    
    if (!role) {
      return new Set();
    }

    const permissions = new Set<string>(role.permissions);

    // Add permissions from parent role
    if (role.parent) {
      const parentPermissions = this.buildPermissionCache(role.parent, visited);
      parentPermissions.forEach(perm => permissions.add(perm));
    }

    this.permissionCache.set(roleName, permissions);
    return permissions;
  }

  /**
   * Get all permissions for a role
   */
  static getRolePermissions(roleName: string): string[] {
    if (this.permissionCache.has(roleName)) {
      return Array.from(this.permissionCache.get(roleName)!);
    }

    const role = this.roleMap.get(roleName);
    if (!role) {
      return [];
    }

    if (this.config?.enableInheritance && role.parent) {
      return Array.from(this.buildPermissionCache(roleName));
    }

    return role.permissions;
  }

  /**
   * Check if a role has a specific permission
   */
  static hasPermission(roleName: string, permission: string): boolean {
    const permissions = this.getRolePermissions(roleName);
    return permissions.includes(permission);
  }

  /**
   * Check if a role has any of the specified permissions
   */
  static hasAnyPermission(roleName: string, permissions: string[]): boolean {
    const rolePermissions = this.getRolePermissions(roleName);
    return permissions.some(perm => rolePermissions.includes(perm));
  }

  /**
   * Check if a role has all of the specified permissions
   */
  static hasAllPermissions(roleName: string, permissions: string[]): boolean {
    const rolePermissions = this.getRolePermissions(roleName);
    return permissions.every(perm => rolePermissions.includes(perm));
  }

  /**
   * Require specific role(s)
   */
  static requireRole(roles: string | string[]) {
    const requiredRoles = Array.isArray(roles) ? roles : [roles];

    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user as AuthUser | undefined;

      if (!user) {
        res.status(401).json({
          success: false,
          error: 'UNAUTHORIZED',
          message: 'Authentication required'
        });
        return;
      }

      if (!requiredRoles.includes(user.role)) {
        res.status(403).json({
          success: false,
          error: 'FORBIDDEN',
          message: `Access denied. Required role: ${requiredRoles.join(' or ')}`,
          userRole: user.role
        });
        return;
      }

      next();
    };
  }

  /**
   * Require specific permission(s)
   */
  static requirePermission(permissions: string | string[]) {
    const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions];

    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user as AuthUser | undefined;

      if (!user) {
        res.status(401).json({
          success: false,
          error: 'UNAUTHORIZED',
          message: 'Authentication required'
        });
        return;
      }

      // Check user permissions first (from JWT)
      const userHasPermission = requiredPermissions.some(perm => 
        user.permissions?.includes(perm)
      );

      if (userHasPermission) {
        next();
        return;
      }

      // Check role permissions
      const roleHasPermission = this.hasAnyPermission(user.role, requiredPermissions);

      if (!roleHasPermission) {
        res.status(403).json({
          success: false,
          error: 'FORBIDDEN',
          message: `Access denied. Required permission: ${requiredPermissions.join(' or ')}`,
          userRole: user.role,
          userPermissions: user.permissions || []
        });
        return;
      }

      next();
    };
  }

  /**
   * Require all specified permissions
   */
  static requireAllPermissions(permissions: string | string[]) {
    const requiredPermissions = Array.isArray(permissions) ? permissions : [permissions];

    return (req: Request, res: Response, next: NextFunction): void => {
      const user = (req as any).user as AuthUser | undefined;

      if (!user) {
        res.status(401).json({
          success: false,
          error: 'UNAUTHORIZED',
          message: 'Authentication required'
        });
        return;
      }

      // Check user permissions first (from JWT)
      const userHasAllPermissions = requiredPermissions.every(perm => 
        user.permissions?.includes(perm)
      );

      if (userHasAllPermissions) {
        next();
        return;
      }

      // Check role permissions
      const roleHasAllPermissions = this.hasAllPermissions(user.role, requiredPermissions);

      if (!roleHasAllPermissions) {
        res.status(403).json({
          success: false,
          error: 'FORBIDDEN',
          message: `Access denied. Required all permissions: ${requiredPermissions.join(', ')}`,
          userRole: user.role,
          userPermissions: user.permissions || []
        });
        return;
      }

      next();
    };
  }

  /**
   * Check permission dynamically (for use in route handlers)
   */
  static checkPermission(user: AuthUser, permission: string): boolean {
    // Check user permissions first
    if (user.permissions?.includes(permission)) {
      return true;
    }

    // Check role permissions
    return this.hasPermission(user.role, permission);
  }

  /**
   * Get user's effective permissions (role + user permissions)
   */
  static getUserPermissions(user: AuthUser): string[] {
    const rolePermissions = this.getRolePermissions(user.role);
    const userPermissions = user.permissions || [];
    
    // Combine and deduplicate
    return Array.from(new Set([...rolePermissions, ...userPermissions]));
  }

  /**
   * Assign role to user (for admin operations)
   */
  static assignRole(userId: string, roleName: string): boolean {
    if (!this.roleMap.has(roleName)) {
      return false;
    }

    // In a real implementation, you would update the user's role in the database
    // This is a placeholder for the concept
    return true;
  }

  /**
   * Add permission to role
   */
  static addPermissionToRole(roleName: string, permission: string): boolean {
    const role = this.roleMap.get(roleName);
    
    if (!role) {
      return false;
    }

    if (!role.permissions.includes(permission)) {
      role.permissions.push(permission);
      this.permissionCache.delete(roleName);
      
      // Rebuild cache if inheritance is enabled
      if (this.config?.enableInheritance) {
        this.buildPermissionCache(roleName);
      } else {
        this.permissionCache.set(roleName, new Set(role.permissions));
      }
    }

    return true;
  }

  /**
   * Remove permission from role
   */
  static removePermissionFromRole(roleName: string, permission: string): boolean {
    const role = this.roleMap.get(roleName);
    
    if (!role) {
      return false;
    }

    const index = role.permissions.indexOf(permission);
    if (index > -1) {
      role.permissions.splice(index, 1);
      this.permissionCache.delete(roleName);
      
      // Rebuild cache if inheritance is enabled
      if (this.config?.enableInheritance) {
        this.buildPermissionCache(roleName);
      } else {
        this.permissionCache.set(roleName, new Set(role.permissions));
      }
    }

    return true;
  }

  /**
   * Get all roles
   */
  static getRoles(): RBACRole[] {
    return Array.from(this.roleMap.values());
  }

  /**
   * Get role by name
   */
  static getRole(roleName: string): RBACRole | undefined {
    return this.roleMap.get(roleName);
  }

  /**
   * Create a new role
   */
  static createRole(role: RBACRole): boolean {
    if (this.roleMap.has(role.name)) {
      return false; // Role already exists
    }

    this.roleMap.set(role.name, role);
    
    if (this.config?.enableInheritance) {
      this.buildPermissionCache(role.name);
    } else {
      this.permissionCache.set(role.name, new Set(role.permissions));
    }

    return true;
  }

  /**
   * Delete a role
   */
  static deleteRole(roleName: string): boolean {
    if (!this.roleMap.has(roleName)) {
      return false;
    }

    this.roleMap.delete(roleName);
    this.permissionCache.delete(roleName);

    return true;
  }
}

