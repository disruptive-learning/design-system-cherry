import React from 'react';
import './Badge.css';

export interface BadgeProps {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'outline';
  /** Badge size */
  size?: 'sm' | 'md' | 'lg';
  /** Pill shape (fully rounded) */
  pill?: boolean;
  /** Content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  pill = false,
  children,
  className = '',
}) => {
  return (
    <span
      className={`cherry-badge cherry-badge--${variant} cherry-badge--${size} ${pill ? 'cherry-badge--pill' : ''} ${className}`.trim()}
    >
      {children}
    </span>
  );
};

export default Badge;
