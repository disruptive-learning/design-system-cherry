import React from 'react';
import './List.css';

/* CheckList Component - Lista con checkmarks verdes */
export interface CheckListProps {
  /** List items */
  items: string[];
  /** Icon color */
  iconColor?: 'green' | 'gray' | 'black';
  /** Text size */
  size?: 'sm' | 'md' | 'lg';
  /** Space between items */
  spacing?: 'tight' | 'normal' | 'loose';
  /** Additional class names */
  className?: string;
}

export const CheckList: React.FC<CheckListProps> = ({
  items,
  iconColor = 'green',
  size = 'md',
  spacing = 'normal',
  className = '',
}) => {
  return (
    <ul className={`cherry-checklist cherry-checklist--${size} cherry-checklist--spacing-${spacing} ${className}`.trim()}>
      {items.map((item, index) => (
        <li key={index} className="cherry-checklist__item">
          <span className={`cherry-checklist__icon cherry-checklist__icon--${iconColor}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="cherry-checklist__text">{item}</span>
        </li>
      ))}
    </ul>
  );
};

/* List Component - Lista simple */
export interface ListProps {
  /** List style */
  variant?: 'bullet' | 'number' | 'none';
  /** List items */
  children: React.ReactNode;
  /** Text size */
  size?: 'sm' | 'md' | 'lg';
  /** Space between items */
  spacing?: 'tight' | 'normal' | 'loose';
  /** Additional class names */
  className?: string;
}

export const List: React.FC<ListProps> = ({
  variant = 'bullet',
  children,
  size = 'md',
  spacing = 'normal',
  className = '',
}) => {
  const Tag = variant === 'number' ? 'ol' : 'ul';

  return (
    <Tag className={`cherry-list cherry-list--${variant} cherry-list--${size} cherry-list--spacing-${spacing} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

/* ListItem Component */
export interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className = '' }) => (
  <li className={`cherry-list__item ${className}`.trim()}>{children}</li>
);

export default { CheckList, List, ListItem };
