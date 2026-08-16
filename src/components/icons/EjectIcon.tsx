import React from 'react';

interface IconProps {
  className?: string;
}

export const EjectIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M0 24V20.5714H24V24H0ZM0.6 17.1429L12 0L23.4 17.1429H0.6Z"
        fill="currentColor"
      />
    </svg>
  );
};