import React from 'react';
import './Button.css';

export interface ButtonProps {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Button content */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`
        cherry-button
        cherry-button--${variant}
        cherry-button--${size}
        ${fullWidth ? 'cherry-button--full' : ''}
        ${loading ? 'cherry-button--loading' : ''}
      `.trim().replace(/\s+/g, ' ')}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <span className="cherry-button__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="31.416" strokeDashoffset="10" />
          </svg>
        </span>
      )}
      <span className={loading ? 'cherry-button__content--hidden' : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button;
