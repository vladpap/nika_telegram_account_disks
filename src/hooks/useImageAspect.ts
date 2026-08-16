import { useState, useEffect } from 'react';

interface ImageDimensions {
  width: number;
  height: number;
  aspect: number; // width / height
  isPortrait: boolean; // true если высота > ширины
}

export const useImageAspect = (src: string) => {
  const [dims, setDims] = useState<ImageDimensions | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      setDims({
        width: w,
        height: h,
        aspect: w / h,
        isPortrait: h > w,
      });
    };
    img.src = src;
  }, [src]);

  return dims;
};