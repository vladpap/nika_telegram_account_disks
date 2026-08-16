import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EjectIcon } from './icons/EjectIcon';

interface DiskCardProps {
  id: string;
  image: string;
  projectName: string;
  date: string;
  receiver: string;
  diskName: string;
}

export const DiskCard: React.FC<DiskCardProps> = ({
  id,
  image,
  projectName,
  date,
  receiver,
  diskName,
}) => {
  const navigate = useNavigate();
  return (
    <div 
      onClick={() => navigate(`/disk/${id}`)}
      className="p-3 pr-8 flex items-center gap-3 border-solid rounded-[12px] border border-tg-hint"
    >
      {/* Картинка диска */}
      <img
        src={image}
        alt={diskName}
        className="w-[64px] h-[90px] object-cover rounded-lg shrink-0"
      />

      {/* Данные */}
      <div className="text-right pl-2">
        <div><span className="text-tg-text">Проект:</span></div>
        <div><span className="text-tg-text">Дата приема:</span></div>
        <div><span className="text-tg-text">Принял:</span></div>
        <div><span className="text-tg-text ">Имя диска:</span></div>
      </div>


      {/* Данные */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex gap-1">
          <span className="text-tg-link truncate">{projectName}</span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link">{date}</span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link truncate">{receiver}</span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link truncate">{diskName}</span>
        </div>
      </div>

      {/* Иконка Eject */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ← чтобы не открывалась DiskPage
          navigate(`/disk/${id}/eject`);
        }}
        className="shrink-0 text-tg-hint active:opacity-70 transition-opacity p-1"
        aria-label="Извлечь диск"
      >
        <EjectIcon className="w-8 h-8" />
      </button>
    </div>
  );
};