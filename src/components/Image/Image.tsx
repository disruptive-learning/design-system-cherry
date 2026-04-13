import React from 'react';
import './Image.css';

export interface ImageProps {
  /** Image source URL */
  src: string;
  /** Alt text */
  alt: string;
  /** Image width */
  width?: number | string;
  /** Image height */
  height?: number | string;
  /** Border radius */
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Aspect ratio */
  aspectRatio?: '1/1' | '4/3' | '16/9' | '3/2' | 'auto';
  /** Object fit */
  fit?: 'cover' | 'contain' | 'fill' | 'none';
  /** Cherry accent glow effect */
  cherryGlow?: boolean;
  /** Grayscale filter (default: false - images keep color) */
  grayscale?: boolean;
  /** Additional class names */
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  radius = 'md',
  aspectRatio = 'auto',
  fit = 'cover',
  cherryGlow = false,
  grayscale = false,
  className = '',
}) => {
  return (
    <div
      className={`cherry-image-wrapper cherry-image--radius-${radius} cherry-image--ratio-${aspectRatio.replace('/', '-')} ${cherryGlow ? 'cherry-image--glow' : ''} ${className}`.trim()}
      style={{ width, height }}
    >
      <img
        src={src}
        alt={alt}
        className={`cherry-image cherry-image--fit-${fit} ${grayscale ? 'cherry-image--grayscale' : ''}`}
        loading="lazy"
      />
    </div>
  );
};

/* Avatar - Special image variant */
export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alt text / name */
  name: string;
  /** Avatar size */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Additional class names */
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  name,
  size = 'md',
  className = '',
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className={`cherry-avatar cherry-avatar--${size} ${className}`.trim()}>
      {src ? (
        <img src={src} alt={name} className="cherry-avatar__image" />
      ) : (
        <span className="cherry-avatar__initials">{initials}</span>
      )}
    </div>
  );
};

export default Image;
