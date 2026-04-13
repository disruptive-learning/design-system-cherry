import React from 'react';
import './Typography.css';

/* Heading Component - Geist Mono by default */
export interface HeadingProps {
  /** Heading level */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Visual size (independent of semantic level) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Text weight (no bold) */
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Use sans-serif font instead of mono */
  sans?: boolean;
  /** Content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Tag = 'h2',
  size = 'lg',
  weight = 'medium',
  align = 'left',
  sans = false,
  children,
  className = '',
  style,
}) => {
  return (
    <Tag
      className={`cherry-heading cherry-heading--${size} cherry-heading--${weight} cherry-heading--${align} ${sans ? 'cherry-heading--sans' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
};

/* Label Component - Para "Step 01" style */
export interface LabelProps {
  /** Content */
  children: React.ReactNode;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Additional class names */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  size = 'md',
  className = '',
}) => {
  return (
    <span className={`cherry-label cherry-label--${size} ${className}`.trim()}>
      {children}
    </span>
  );
};

/* Subtitle Component - Geist Mono, lighter weight */
export interface SubtitleProps {
  /** Content */
  children: React.ReactNode;
  /** Size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Additional class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Subtitle: React.FC<SubtitleProps> = ({
  children,
  size = 'lg',
  className = '',
  style,
}) => {
  return (
    <p className={`cherry-subtitle cherry-subtitle--${size} ${className}`.trim()} style={style}>
      {children}
    </p>
  );
};

/* Text Component - Geist Sans for body/paragraphs */
export interface TextProps {
  /** Text element */
  as?: 'p' | 'span' | 'div' | 'label';
  /** Text size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Text weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold';
  /** Text color variant */
  variant?: 'default' | 'muted' | 'subtle';
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Use monospace font for emphasis/technical text */
  mono?: boolean;
  /** Content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({
  as: Tag = 'p',
  size = 'md',
  weight = 'normal',
  variant = 'default',
  align = 'left',
  mono = false,
  children,
  className = '',
  style,
}) => {
  return (
    <Tag
      className={`cherry-text cherry-text--${size} cherry-text--${weight} cherry-text--${variant} cherry-text--${align} ${mono ? 'cherry-text--mono' : 'cherry-text--sans'} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
};

/* Code Component */
export interface CodeProps {
  /** Inline or block code */
  block?: boolean;
  /** Content */
  children: React.ReactNode;
  /** Additional class names */
  className?: string;
}

export const Code: React.FC<CodeProps> = ({
  block = false,
  children,
  className = '',
}) => {
  if (block) {
    return (
      <pre className={`cherry-code cherry-code--block ${className}`.trim()}>
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code className={`cherry-code cherry-code--inline ${className}`.trim()}>
      {children}
    </code>
  );
};

export default { Heading, Text, Code };
