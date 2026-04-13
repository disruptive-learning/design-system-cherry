import React from 'react';
import { Icon, IconName } from '../Icon';
import './FeatureCard.css';

export interface FeatureCardProps {
  /** Icon name */
  icon: IconName;
  /** Card title - Geist Mono */
  title: string;
  /** Card description - Geist Sans */
  description: string;
  /** Additional class names */
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`cherry-feature-card ${className}`.trim()}>
      <div className="cherry-feature-card__icon">
        <Icon name={icon} size="lg" />
      </div>
      <h3 className="cherry-feature-card__title">{title}</h3>
      <p className="cherry-feature-card__description">{description}</p>
    </div>
  );
};

/* Feature Grid */
export interface FeatureGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  children,
  columns = 3,
  className = '',
}) => {
  return (
    <div className={`cherry-feature-grid cherry-feature-grid--${columns}col ${className}`.trim()}>
      {children}
    </div>
  );
};

export default FeatureCard;
