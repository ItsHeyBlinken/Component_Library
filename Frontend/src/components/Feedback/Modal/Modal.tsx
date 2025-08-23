/**
 * Modal Component
 * 
 * Purpose: Overlay dialogs for user interaction and content display
 * 
 * Use Cases:
 * - Confirmation dialogs
 * - Form inputs and data entry
 * - Content previews and details
 * - User notifications and alerts
 * - Settings and configuration panels
 * 
 * Accessibility:
 * - Focus management and trap
 * - ARIA labels and descriptions
 * - Keyboard navigation (Escape to close)
 * - Screen reader announcements
 * - High contrast support
 */

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BaseComponentProps } from '../../../types';

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  size?: ModalSize;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  preventScroll?: boolean;
  overlayColor?: string;
  overlayOpacity?: number;
  zIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const getModalSize = (size: ModalSize) => {
  switch (size) {
    case 'xs':
      return '320px';
    case 'sm':
      return '480px';
    case 'md':
      return '640px';
    case 'lg':
      return '800px';
    case 'xl':
      return '1024px';
    case 'full':
      return '95vw';
    default:
      return '640px'; // md default
  }
};

const ModalOverlay = styled.div<{ 
  isOpen: boolean; 
  overlayColor?: string; 
  overlayOpacity?: number;
  zIndex?: number;
  preventScroll?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ overlayColor }) => overlayColor || 'rgba(0, 0, 0, 0.5)'};
  opacity: ${({ overlayOpacity }) => overlayOpacity !== undefined ? overlayOpacity : 1};
  z-index: ${({ zIndex }) => zIndex || 1000};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
  
  /* Prevent scroll on body when modal is open */
  ${({ isOpen, preventScroll }) => isOpen && preventScroll && `
    overflow: hidden;
  `}
`;

const ModalContainer = styled.div<{ 
  isOpen: boolean; 
  size: ModalSize;
  zIndex?: number;
}>`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: ${({ size }) => getModalSize(size)};
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0.95)'};
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  transition: all 0.3s ease-in-out;
  z-index: ${({ zIndex }) => (zIndex || 1000) + 1};
  
  /* Responsive behavior */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 8px;
    max-width: calc(100vw - 16px);
    max-height: calc(100vh - 16px);
  }
`;

const ModalHeader = styled.div`
  padding: 24px 24px 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.3;
  }
  
  p {
    margin: 8px 0 0 0;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.4;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
  max-height: calc(90vh - 120px); // Account for header and padding
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.background.tertiary};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  preventScroll = true,
  overlayColor,
  overlayOpacity,
  zIndex,
  children,
  className,
  style,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore focus when modal closes
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen && preventScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preventScroll]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay
      isOpen={isOpen}
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      zIndex={zIndex}
      preventScroll={preventScroll}
      onClick={handleOverlayClick}
    >
      <ModalContainer
        ref={modalRef}
        isOpen={isOpen}
        size={size}
        zIndex={zIndex}
        className={className}
        style={style}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={subtitle ? 'modal-subtitle' : undefined}
        {...props}
      >
        {(title || subtitle || showCloseButton) && (
          <ModalHeader>
            <div>
              {title && (
                <h2 id="modal-title">{title}</h2>
              )}
              {subtitle && (
                <p id="modal-subtitle">{subtitle}</p>
              )}
            </div>
            {showCloseButton && (
              <CloseButton
                onClick={onClose}
                aria-label="Close modal"
                type="button"
              >
                ×
              </CloseButton>
            )}
          </ModalHeader>
        )}
        
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};
