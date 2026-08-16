import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const TgSectionTitle: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="text-sm font-medium text-tg-hint uppercase tracking-wide mb-2">
      {children}
    </h2>
  );
};