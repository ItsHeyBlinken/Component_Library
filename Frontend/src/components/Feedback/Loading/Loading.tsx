import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BaseComponentProps, ComponentVariant, ComponentSize } from '../../../types';

export interface LoadingProps extends BaseComponentProps {
  /** The size of the loading spinner */
  size?: ComponentSize;
  /** The variant/type of loading animation */
  variant?: 'spinner' | 'dots' | 'bars' | 'pulse' | 'ripple' | 'ring';
  /** The color variant of the loading component */
  color?: ComponentVariant;
  /** Custom color for the loading component */
  customColor?: string;
  /** Whether to show loading text */
  showText?: boolean;
  /** Custom loading text */
  text?: string;
  /** Whether the loading component is full screen */
  fullScreen?: boolean;
  /** Whether the loading component is inline */
  inline?: boolean;
  /** Whether the loading component has a backdrop */
  backdrop?: boolean;
  /** Custom backdrop color */
  backdropColor?: string;
  /** Whether the loading component is visible */
  visible?: boolean;
  /** Animation speed in milliseconds */
  speed?: number;
  /** Whether to show a progress indicator */
  showProgress?: boolean;
  /** Progress value (0-100) */
  progress?: number;
  /** Whether the loading is indeterminate */
  indeterminate?: boolean;
  /** Custom spinner thickness */
  thickness?: number;
  /** Whether to show a label */
  showLabel?: boolean;
  /** Custom label text */
  label?: string;
  /** Whether the loading component is centered */
  centered?: boolean;
  /** Whether to show a border around the loading component */
  bordered?: boolean;
  /** Whether the loading component has a shadow */
  shadowed?: boolean;
  /** Whether the loading component is rounded */
  rounded?: boolean;
  /** Custom background color */
  backgroundColor?: string;
  /** Custom border color */
  borderColor?: string;
  /** Whether the loading component is transparent */
  transparent?: boolean;
  /** Whether to show a cancel button */
  showCancel?: boolean;
  /** Cancel button text */
  cancelText?: string;
  /** Callback when cancel button is clicked */
  onCancel?: () => void;
}

// Keyframe animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const dots = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const bars = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
`;

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div<LoadingProps & { $fullScreen: boolean; $centered: boolean; $inline: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $centered }) => $centered ? 'center' : 'flex-start'};
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* Size-based dimensions */
  width: ${({ $inline, $fullScreen, size }) => {
    if ($fullScreen) return '100vw';
    if ($inline) {
      switch (size) {
        case 'xs': return '16px';
        case 'sm': return '24px';
        case 'lg': return '48px';
        case 'xl': return '64px';
        default: return '32px';
      }
    }
    return 'auto';
  }};
  
  height: ${({ $inline, $fullScreen, size }) => {
    if ($fullScreen) return '100vh';
    if ($inline) {
      switch (size) {
        case 'xs': return '16px';
        case 'sm': return '24px';
        case 'lg': return '48px';
        case 'xl': return '64px';
        default: return '32px';
      }
    }
    return 'auto';
  }};
  
  /* Full screen positioning */
  ${({ $fullScreen }) => $fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.9);
  `}
  
  /* Inline positioning */
  ${({ $inline }) => $inline && `
    display: inline-flex;
  `}
  
  /* Backdrop styles */
  ${({ backdrop, backdropColor }) => backdrop && `
    background-color: ${backdropColor || 'rgba(0, 0, 0, 0.5)'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
  `}
  
  /* Visibility */
  opacity: ${({ visible }) => visible !== false ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  
  /* Responsive design */
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const Spinner = styled.div<{ $size: string; $color: string; $speed: number; $thickness: number }>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  border: ${({ $thickness }) => $thickness}px solid transparent;
  border-top: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${spin} ${({ $speed }) => $speed}ms linear infinite;
`;

const Dots = styled.div<{ $size: string; $color: string; $speed: number }>`
  display: flex;
  gap: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '2px';
      case 'sm': return '3px';
      case 'lg': return '6px';
      case 'xl': return '8px';
      default: return '4px';
    }
  }};
  
  div {
    width: ${({ $size }) => {
      switch ($size) {
        case 'xs': return '4px';
        case 'sm': return '6px';
        case 'lg': return '12px';
        case 'xl': return '16px';
        default: return '8px';
      }
    }};
    height: ${({ $size }) => {
      switch ($size) {
        case 'xs': return '4px';
        case 'sm': return '6px';
        case 'lg': return '12px';
        case 'xl': return '16px';
        default: return '8px';
      }
    }};
    background-color: ${({ $color }) => $color};
    border-radius: 50%;
    animation: ${dots} ${({ $speed }) => $speed}ms ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: ${({ $speed }) => $speed * 0.2}ms; }
    &:nth-child(3) { animation-delay: ${({ $speed }) => $speed * 0.4}ms; }
  }
`;

const Bars = styled.div<{ $size: string; $color: string; $speed: number }>`
  display: flex;
  gap: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '1px';
      case 'sm': return '2px';
      case 'lg': return '4px';
      case 'xl': return '6px';
      default: return '3px';
    }
  }};
  
  div {
    width: ${({ $size }) => {
      switch ($size) {
        case 'xs': return '2px';
        case 'sm': return '3px';
        case 'lg': return '6px';
        case 'xl': return '8px';
        default: return '4px';
      }
    }};
    height: ${({ $size }) => {
      switch ($size) {
        case 'xs': return '8px';
        case 'sm': return '12px';
        case 'lg': return '24px';
        case 'xl': return '32px';
        default: return '16px';
      }
    }};
    background-color: ${({ $color }) => $color};
    border-radius: 2px;
    animation: ${bars} ${({ $speed }) => $speed}ms ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: ${({ $speed }) => $speed * 0.1}ms; }
    &:nth-child(3) { animation-delay: ${({ $speed }) => $speed * 0.2}ms; }
    &:nth-child(4) { animation-delay: ${({ $speed }) => $speed * 0.3}ms; }
  }
`;

const Pulse = styled.div<{ $size: string; $color: string; $speed: number }>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${pulse} ${({ $speed }) => $speed}ms ease-in-out infinite;
`;

const Ripple = styled.div<{ $size: string; $color: string; $speed: number }>`
  position: relative;
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  
  div {
    position: absolute;
    border: 2px solid ${({ $color }) => $color};
    border-radius: 50%;
    animation: ${ripple} ${({ $speed }) => $speed}ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
    
    &:nth-child(2) {
      animation-delay: ${({ $speed }) => $speed * 0.5}ms;
    }
  }
`;

const Ring = styled.div<{ $size: string; $color: string; $speed: number; $thickness: number }>`
  position: relative;
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '16px';
      case 'sm': return '24px';
      case 'lg': return '48px';
      case 'xl': return '64px';
      default: return '32px';
    }
  }};
  
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${({ $thickness }) => $thickness}px solid transparent;
    border-top: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
    border-radius: 50%;
    animation: ${ring} ${({ $speed }) => $speed}ms linear infinite;
    
    &:nth-child(2) {
      border-top-color: transparent;
      border-right: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
      animation-delay: ${({ $speed }) => $speed * 0.25}ms;
    }
    
    &:nth-child(3) {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
      animation-delay: ${({ $speed }) => $speed * 0.5}ms;
    }
    
    &:nth-child(4) {
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-left: ${({ $thickness }) => $thickness}px solid ${({ $color }) => $color};
      animation-delay: ${({ $speed }) => $speed * 0.75}ms;
    }
  }
`;

const LoadingText = styled.div<{ $size: string; $color: string }>`
  color: ${({ $color }) => $color};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '10px';
      case 'sm': return '12px';
      case 'lg': return '16px';
      case 'xl': return '20px';
      default: return '14px';
    }
  }};
  font-weight: 500;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ProgressContainer = styled.div<{ $size: string }>`
  width: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '60px';
      case 'sm': return '80px';
      case 'lg': return '120px';
      case 'xl': return '160px';
      default: return '100px';
    }
  }};
  height: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '4px';
      case 'sm': return '6px';
      case 'lg': return '8px';
      case 'xl': return '12px';
      default: return '6px';
    }
  }};
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${({ $size }) => $size === 'xs' ? '2px' : '3px'};
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ProgressBar = styled.div<{ $progress: number; $color: string }>`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ $color }) => $color};
  transition: width 0.3s ease-in-out;
`;

const CancelButton = styled.button<{ $size: string; $color: string }>`
  background: none;
  border: 1px solid ${({ $color }) => $color};
  color: ${({ $color }) => $color};
  cursor: pointer;
  padding: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '4px 8px';
      case 'sm': return '6px 12px';
      case 'lg': return '8px 16px';
      case 'xl': return '10px 20px';
      default: return '6px 12px';
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'xs': return '10px';
      case 'sm': return '11px';
      case 'lg': return '13px';
      case 'xl': return '16px';
      default: return '12px';
    }
  }};
  font-weight: 500;
  transition: all 0.2s ease;
  margin-top: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    background-color: ${({ $color }) => $color};
    color: white;
  }
  
  &:focus {
    outline: 2px solid ${({ $color }) => $color};
    outline-offset: 2px;
  }
`;

export const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'primary',
  customColor,
  showText = false,
  text = 'Loading...',
  fullScreen = false,
  inline = false,
  backdrop = false,
  backdropColor,
  visible = true,
  speed = 1000,
  showProgress = false,
  progress = 0,
  indeterminate = false,
  thickness = 3,
  showLabel = false,
  label,
  centered = true,
  bordered = false,
  shadowed = false,
  rounded = false,
  backgroundColor,
  borderColor,
  transparent = false,
  showCancel = false,
  cancelText = 'Cancel',
  onCancel,
  ...props
}) => {
  // Get color value
  const getColor = () => {
    if (customColor) return customColor;
    
    // This would typically come from theme, but for now using fallback colors
    switch (color) {
      case 'success':
        return '#4caf50';
      case 'error':
        return '#f44336';
      case 'warning':
        return '#ff9800';
      case 'info':
        return '#2196f3';
      case 'secondary':
        return '#9e9e9e';
      default:
        return '#1976d2';
    }
  };

  const colorValue = getColor();

  // Render loading animation based on variant
  const renderLoadingAnimation = () => {
    switch (variant) {
      case 'dots':
        return (
          <Dots $size={size} $color={colorValue} $speed={speed}>
            <div></div>
            <div></div>
            <div></div>
          </Dots>
        );
      case 'bars':
        return (
          <Bars $size={size} $color={colorValue} $speed={speed}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Bars>
        );
      case 'pulse':
        return <Pulse $size={size} $color={colorValue} $speed={speed} />;
      case 'ripple':
        return (
          <Ripple $size={size} $color={colorValue} $speed={speed}>
            <div></div>
            <div></div>
          </Ripple>
        );
      case 'ring':
        return (
          <Ring $size={size} $color={colorValue} $speed={speed} $thickness={thickness}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </Ring>
        );
      default:
        return <Spinner $size={size} $color={colorValue} $speed={speed} $thickness={thickness} />;
    }
  };

  if (!visible) return null;

  return (
    <LoadingContainer
      $fullScreen={fullScreen}
      $centered={centered}
      $inline={inline}
      backdrop={backdrop}
      backdropColor={backdropColor}
      visible={visible}
      {...props}
    >
      {renderLoadingAnimation()}
      
      {showText && (
        <LoadingText $size={size} $color={colorValue}>
          {text}
        </LoadingText>
      )}
      
      {showLabel && label && (
        <LoadingText $size={size} $color={colorValue}>
          {label}
        </LoadingText>
      )}
      
      {showProgress && (
        <ProgressContainer $size={size}>
          <ProgressBar 
            $progress={indeterminate ? 100 : progress} 
            $color={colorValue}
          />
        </ProgressContainer>
      )}
      
      {showCancel && onCancel && (
        <CancelButton
          $size={size}
          $color={colorValue}
          onClick={onCancel}
        >
          {cancelText}
        </CancelButton>
      )}
    </LoadingContainer>
  );
};
