import React from 'react';

interface TgCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TgCard: React.FC<TgCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-tg-secondary-bg rounded-xl p-4 ${className}`}>
      {children}
    </div>
  );
};