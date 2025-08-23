import { Request, Response, NextFunction } from 'express';
import { ValidationResult, ValidationError } from '../../types';

export class RequestValidator {
  /**
   * Validation rules mapping
   */
  private static rules: { [key: string]: (value: any, ruleValue?: any) => boolean } = {
    required: (value: any) => value !== undefined && value !== null && value !== '',
    string: (value: any) => typeof value === 'string',
    number: (value: any) => typeof value === 'number' && !isNaN(value),
    boolean: (value: any) => typeof value === 'boolean',
    email: (value: any) => {
      if (typeof value !== 'string') return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    url: (value: any) => {
      if (typeof value !== 'string') return false;
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }
    },
    min: (value: any, minValue: number) => {
      if (typeof value === 'string') return value.length >= minValue;
      if (typeof value === 'number') return value >= minValue;
      if (Array.isArray(value)) return value.length >= minValue;
      return false;
    },
    max: (value: any, maxValue: number) => {
      if (typeof value === 'string') return value.length <= maxValue;
      if (typeof value === 'number') return value <= maxValue;
      if (Array.isArray(value)) return value.length <= maxValue;
      return false;
    },
    length: (value: any, lengthValue: number) => {
      if (typeof value === 'string') return value.length === lengthValue;
      if (Array.isArray(value)) return value.length === lengthValue;
      return false;
    },
    pattern: (value: any, pattern: string) => {
      if (typeof value !== 'string') return false;
      try {
        const regex = new RegExp(pattern);
        return regex.test(value);
      } catch {
        return false;
      }
    },
    in: (value: any, allowedValues: any[]) => {
      return allowedValues.includes(value);
    },
    notIn: (value: any, disallowedValues: any[]) => {
      return !disallowedValues.includes(value);
    },
    alpha: (value: any) => {
      if (typeof value !== 'string') return false;
      return /^[a-zA-Z]+$/.test(value);
    },
    alphanumeric: (value: any) => {
      if (typeof value !== 'string') return false;
      return /^[a-zA-Z0-9]+$/.test(value);
    },
    numeric: (value: any) => {
      if (typeof value !== 'string') return false;
      return /^\d+$/.test(value);
    },
    integer: (value: any) => {
      if (typeof value !== 'number') return false;
      return Number.isInteger(value);
    },
    positive: (value: any) => {
      if (typeof value !== 'number') return false;
      return value > 0;
    },
    negative: (value: any) => {
      if (typeof value !== 'number') return false;
      return value < 0;
    },
    date: (value: any) => {
      if (typeof value !== 'string') return false;
      const date = new Date(value);
      return !isNaN(date.getTime());
    },
    future: (value: any) => {
      if (typeof value !== 'string') return false;
      const date = new Date(value);
      return date > new Date();
    },
    past: (value: any) => {
      if (typeof value !== 'string') return false;
      const date = new Date(value);
      return date < new Date();
    },
    uuid: (value: any) => {
      if (typeof value !== 'string') return false;
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return uuidRegex.test(value);
    },
    json: (value: any) => {
      if (typeof value !== 'string') return false;
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    }
  };

  /**
   * Sanitization functions
   */
  private static sanitizers: { [key: string]: (value: any) => any } = {
    trim: (value: any) => typeof value === 'string' ? value.trim() : value,
    toLowerCase: (value: any) => typeof value === 'string' ? value.toLowerCase() : value,
    toUpperCase: (value: any) => typeof value === 'string' ? value.toUpperCase() : value,
    toNumber: (value: any) => {
      if (typeof value === 'string') {
        const num = parseFloat(value);
        return isNaN(num) ? value : num;
      }
      return value;
    },
    toBoolean: (value: any) => {
      if (typeof value === 'string') {
        return ['true', '1', 'yes', 'on'].includes(value.toLowerCase());
      }
      return Boolean(value);
    },
    escape: (value: any) => {
      if (typeof value !== 'string') return value;
      return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    },
    unescape: (value: any) => {
      if (typeof value !== 'string') return value;
      return value
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x2F;/g, '/');
    }
  };

  /**
   * Parse validation schema
   */
  private static parseSchema(schema: string): { field: string; rules: string[] } {
    const [field, ...rules] = schema.split('|');
    return { field: field.trim(), rules: rules.map(r => r.trim()) };
  }

  /**
   * Validate a single field against rules
   */
  private static validateField(value: any, rules: string[]): ValidationError[] {
    const errors: ValidationError[] = [];

    for (const rule of rules) {
      const [ruleName, ruleValue] = rule.split(':');
      const ruleFunction = this.rules[ruleName];

      if (!ruleFunction) {
        errors.push({
          field: 'unknown',
          message: `Unknown validation rule: ${ruleName}`,
          rule: ruleName
        });
        continue;
      }

      if (!ruleFunction(value, ruleValue)) {
        errors.push({
          field: 'unknown',
          message: `Validation failed for rule: ${rule}`,
          value,
          rule: rule
        });
      }
    }

    return errors;
  }

  /**
   * Sanitize data based on sanitization rules
   */
  private static sanitizeData(data: any, sanitizationRules: { [key: string]: string[] }): any {
    const sanitized = { ...data };

    for (const [field, rules] of Object.entries(sanitizationRules)) {
      if (sanitized[field] !== undefined) {
        for (const rule of rules) {
          const sanitizer = this.sanitizers[rule];
          if (sanitizer) {
            sanitized[field] = sanitizer(sanitized[field]);
          }
        }
      }
    }

    return sanitized;
  }

  /**
   * Validate request body
   */
  static validateBody(schema: { [key: string]: string }): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
      const validation = this.validate(req.body, schema);
      
      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          error: 'Validation failed',
          message: 'Request body validation failed',
          validationErrors: validation.errors
        });
        return;
      }

      // Add sanitized data to request
      (req as any).sanitizedBody = validation.sanitizedData;
      next();
    };
  }

  /**
   * Validate request query parameters
   */
  static validateQuery(schema: { [key: string]: string }): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
      const validation = this.validate(req.query, schema);
      
      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          error: 'Validation failed',
          message: 'Query parameters validation failed',
          validationErrors: validation.errors
        });
        return;
      }

      // Add sanitized data to request
      (req as any).sanitizedQuery = validation.sanitizedData;
      next();
    };
  }

  /**
   * Validate request parameters
   */
  static validateParams(schema: { [key: string]: string }): (req: Request, res: Response, next: NextFunction) => void {
    return (req: Request, res: Response, next: NextFunction): void => {
      const validation = this.validate(req.params, schema);
      
      if (!validation.isValid) {
        res.status(400).json({
          success: false,
          error: 'Validation failed',
          message: 'Route parameters validation failed',
          validationErrors: validation.errors
        });
        return;
      }

      // Add sanitized data to request
      (req as any).sanitizedParams = validation.sanitizedData;
      next();
    };
  }

  /**
   * Validate data against schema
   */
  static validate(data: any, schema: { [key: string]: string }): ValidationResult {
    const errors: ValidationError[] = [];
    const sanitizationRules: { [key: string]: string[] } = {};

    for (const [field, rules] of Object.entries(schema)) {
      const { field: fieldName, rules: fieldRules } = this.parseSchema(rules);
      const value = data[fieldName];

      // Separate validation and sanitization rules
      const validationRules: string[] = [];
      const sanitizationRulesForField: string[] = [];

      for (const rule of fieldRules) {
        if (this.sanitizers[rule]) {
          sanitizationRulesForField.push(rule);
        } else {
          validationRules.push(rule);
        }
      }

      // Store sanitization rules
      if (sanitizationRulesForField.length > 0) {
        sanitizationRules[fieldName] = sanitizationRulesForField;
      }

      // Validate field
      const fieldErrors = this.validateField(value, validationRules);
      fieldErrors.forEach(error => {
        error.field = fieldName;
      });
      errors.push(...fieldErrors);
    }

    const sanitizedData = this.sanitizeData(data, sanitizationRules);

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData
    };
  }

  /**
   * Add custom validation rule
   */
  static addRule(name: string, validator: (value: any, ruleValue?: any) => boolean): void {
    this.rules[name] = validator;
  }

  /**
   * Add custom sanitizer
   */
  static addSanitizer(name: string, sanitizer: (value: any) => any): void {
    this.sanitizers[name] = sanitizer;
  }
}
