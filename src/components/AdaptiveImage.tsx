import React from 'react';
import { useImageAspect } from '../hooks/useImageAspect';

interface AdaptiveImageProps {
  src: string;
  alt?: string;
  maxSize?: number; // 120 по умолчанию
  className?: string;
}

export const AdaptiveImage: React.FC<AdaptiveImageProps> = ({
  src,
  alt = '',
  maxSize = 120,
  className = '',
}) => {
  const dims = useImageAspect(src);

  // Пока грузится — плейсхолдер
  if (!dims) {
    return (
      <div
        className={`bg-tg-secondary-bg animate-pulse rounded-lg ${className}`}
        style={{ width: maxSize, height: maxSize }}
      />
    );
  }

  // Портрет (высокая) → ограничиваем высоту 120px, ширина auto
  // Ландшафт (широкая) → ограничиваем ширину 120px, высота auto
  const style = dims.isPortrait
    ? { height: maxSize, width: 'auto' }
    : { width: maxSize, height: 'auto' };

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover rounded-lg ${className}`}
      style={style}
    />
  );
};