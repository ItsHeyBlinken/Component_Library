/**
 * DOM Utilities
 * 
 * Purpose: Common DOM manipulation and utility functions
 * 
 * Use Cases:
 * - DOM element selection
 * - Event handling utilities
 * - Element positioning
 * - Viewport calculations
 * - DOM traversal helpers
 */

/**
 * Get element by selector with type safety
 */
export const getElement = <T extends HTMLElement>(selector: string): T | null => {
  return document.querySelector(selector) as T | null;
};

/**
 * Get all elements by selector
 */
export const getElements = <T extends HTMLElement>(selector: string): T[] => {
  return Array.from(document.querySelectorAll(selector)) as T[];
};

/**
 * Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get element position relative to viewport
 */
export const getElementPosition = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    width: rect.width,
    height: rect.height,
  };
};

/**
 * Scroll element into view with options
 */
export const scrollIntoView = (
  element: HTMLElement,
  options: ScrollIntoViewOptions = {}
): void => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'nearest',
    ...options,
  });
};

/**
 * Add event listener with automatic cleanup
 */
export const addEventListenerWithCleanup = (
  element: HTMLElement | Window | Document,
  event: string,
  handler: EventListener,
  options?: AddEventListenerOptions
): (() => void) => {
  element.addEventListener(event, handler, options);
  
  // Return cleanup function
  return () => {
    element.removeEventListener(event, handler, options);
  };
};

/**
 * Debounce function execution
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function execution
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
