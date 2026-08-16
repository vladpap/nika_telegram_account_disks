import React from 'react';

interface TgButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const TgButton: React.FC<TgButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  const baseClasses = 'w-full rounded-lg px-5 py-3 text-base font-medium transition-opacity active:opacity-80 cursor-pointer';
  
  const variantClasses = variant === 'primary' 
    ? 'bg-tg-button text-tg-button-text' 
    : 'bg-tg-secondary-bg text-tg-text';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};