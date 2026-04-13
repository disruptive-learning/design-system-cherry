import React from 'react';
import './Icon.css';

export type IconName =
  | 'document'
  | 'globe'
  | 'lightning'
  | 'clock'
  | 'card'
  | 'moon'
  | 'check'
  | 'arrow-right'
  | 'chevron-right';

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Icon size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Icon color */
  color?: 'default' | 'muted' | 'subtle';
  /** Stroke width */
  strokeWidth?: number;
  /** Additional class names */
  className?: string;
}

const icons: Record<IconName, React.ReactNode> = {
  document: (
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  lightning: (
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  card: (
    <>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </>
  ),
  moon: (
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  ),
  check: (
    <polyline points="20 6 9 17 4 12" />
  ),
  'arrow-right': (
    <>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </>
  ),
  'chevron-right': (
    <polyline points="9 18 15 12 9 6" />
  ),
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color = 'default',
  strokeWidth = 2,
  className = '',
}) => {
  return (
    <svg
      className={`cherry-icon cherry-icon--${size} cherry-icon--${color} ${className}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
};

export default Icon;
