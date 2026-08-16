import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@telegram-apps/telegram-ui';
import { mockDisks } from '../data/mockDisks';

export const ImageViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [bounds, setBounds] = useState({ maxX: 0, maxY: 0 });
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0 });
  const lastTapRef = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const disk = mockDisks.find((d) => d.id === id);
  if (!disk) return null;

  // Пересчёт границ при зуме или ресайзе
  const updateBounds = useCallback(() => {
    if (!imgRef.current || !containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const imgW = imgRef.current.clientWidth * scale;
    const imgH = imgRef.current.clientHeight * scale;

    setBounds({
      maxX: Math.max(0, (imgW - container.width) / 2),
      maxY: Math.max(0, (imgH - container.height) / 2),
    });
  }, [scale]);

  useEffect(() => {
    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [updateBounds]);

  const handleZoom = () => {
    setScale((s) => {
      const next = s === 1 ? 2.5 : 1;
      if (next === 1) setPos({ x: 0, y: 0 });
      return next;
    });
  };

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  // Double tap / drag start
  const handleTouchStart = (e: React.TouchEvent) => {
    const now = Date.now();
    const diff = now - lastTapRef.current;
    lastTapRef.current = now;

    if (diff < 300) {
      handleZoom();
      return;
    }

    dragRef.current.isDragging = true;
    dragRef.current.startX = e.touches[0].clientX - pos.x;
    dragRef.current.startY = e.touches[0].clientY - pos.y;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragRef.current.isDragging || scale === 1) return;
    e.preventDefault();

    const rawX = e.touches[0].clientX - dragRef.current.startX;
    const rawY = e.touches[0].clientY - dragRef.current.startY;

    setPos({
      x: clamp(rawX, -bounds.maxX, bounds.maxX),
      y: clamp(rawY, -bounds.maxY, bounds.maxY),
    });
  };

  const handleTouchEnd = () => {
    dragRef.current.isDragging = false;
  };

  // Mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX - pos.x;
    dragRef.current.startY = e.clientY - pos.y;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.isDragging || scale === 1) return;

    const rawX = e.clientX - dragRef.current.startX;
    const rawY = e.clientY - dragRef.current.startY;

    setPos({
      x: clamp(rawX, -bounds.maxX, bounds.maxX),
      y: clamp(rawY, -bounds.maxY, bounds.maxY),
    });
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
  };

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col">
      <div
        className="absolute left-4 z-10"
        style={{ top: 'calc(16px + env(safe-area-inset-top))' }}
      >
        <Button mode="bezeled" size="s" onClick={() => navigate(-1)}>
          Закрыть
        </Button>
      </div>

      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center overflow-hidden"
        onDoubleClick={handleZoom}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imgRef}
          src={disk.image}
          alt={disk.diskName}
          draggable={false}
          className="transition-transform duration-200 ease-out select-none"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            maxHeight: '100%',
            maxWidth: '100%',
            touchAction: 'none',
          }}
        />
      </div>
    </div>
  );
};