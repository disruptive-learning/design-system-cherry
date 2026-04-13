import React from 'react';
import './Input.css';

export interface InputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Label */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  errorMessage?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Additional class names */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  size = 'md',
  placeholder,
  value,
  defaultValue,
  disabled = false,
  error = false,
  fullWidth = false,
  label,
  helperText,
  errorMessage,
  name,
  id,
  onChange,
  onFocus,
  onBlur,
  className = '',
}) => {
  const inputId = id || name;

  return (
    <div className={`cherry-input-wrapper ${fullWidth ? 'cherry-input-wrapper--full' : ''} ${className}`.trim()}>
      {label && (
        <label htmlFor={inputId} className="cherry-input__label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={name}
        className={`cherry-input cherry-input--${size} ${error ? 'cherry-input--error' : ''}`.trim()}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {(helperText || errorMessage) && (
        <span className={`cherry-input__helper ${error ? 'cherry-input__helper--error' : ''}`}>
          {error ? errorMessage : helperText}
        </span>
      )}
    </div>
  );
};

/* Textarea */
export interface TextareaProps {
  /** Placeholder text */
  placeholder?: string;
  /** Textarea value */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Number of rows */
  rows?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Label */
  label?: string;
  /** Helper text */
  helperText?: string;
  /** Error message */
  errorMessage?: string;
  /** Textarea name */
  name?: string;
  /** Textarea id */
  id?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Additional class names */
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  defaultValue,
  rows = 4,
  disabled = false,
  error = false,
  fullWidth = false,
  label,
  helperText,
  errorMessage,
  name,
  id,
  onChange,
  className = '',
}) => {
  const textareaId = id || name;

  return (
    <div className={`cherry-input-wrapper ${fullWidth ? 'cherry-input-wrapper--full' : ''} ${className}`.trim()}>
      {label && (
        <label htmlFor={textareaId} className="cherry-input__label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        name={name}
        className={`cherry-textarea ${error ? 'cherry-textarea--error' : ''}`.trim()}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        disabled={disabled}
        onChange={onChange}
      />
      {(helperText || errorMessage) && (
        <span className={`cherry-input__helper ${error ? 'cherry-input__helper--error' : ''}`}>
          {error ? errorMessage : helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
