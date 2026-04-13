import React from 'react';
import './Card.css';

export interface CardProps {
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Padding size */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Make card interactive (hover effects) */
  interactive?: boolean;
  /** Content */
  children: React.ReactNode;
  /** Click handler (for interactive cards) */
  onClick?: () => void;
  /** Additional class names */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  interactive = false,
  children,
  onClick,
  className = '',
}) => {
  const Component = interactive ? 'button' : 'div';

  return (
    <Component
      className={`cherry-card cherry-card--${variant} cherry-card--padding-${padding} ${interactive ? 'cherry-card--interactive' : ''} ${className}`.trim()}
      onClick={onClick}
      type={interactive ? 'button' : undefined}
    >
      {children}
    </Component>
  );
};

/* Card Header */
export interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={`cherry-card__header ${className}`.trim()}>{children}</div>
);

/* Card Content */
export interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`cherry-card__content ${className}`.trim()}>{children}</div>
);

/* Card Footer */
export interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={`cherry-card__footer ${className}`.trim()}>{children}</div>
);

export default Card;
