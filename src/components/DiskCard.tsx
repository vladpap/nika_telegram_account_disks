import React from "react";
import { useNavigate } from "react-router-dom";
import type { DiskWithRelations } from "../data/db";

interface DiskCardProps {
  disk: DiskWithRelations;
  onClick?: () => void;
}

export const DiskCard: React.FC<DiskCardProps> = ({ disk, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/disk/${disk.id}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="p-3 pr-8 flex items-center gap-3 border-solid rounded-[12px] border border-tg-hint"
    >
      {/* Картинка диска */}
      <img
        src={disk.image}
        alt={disk.diskName}
        className="w-[64px] h-[90px] object-cover rounded-lg shrink-0"
      />

      {/* Данные */}
      <div className="text-right pl-2">
        <div>
          <span className="text-tg-text">Проект:</span>
        </div>
        <div>
          <span className="text-tg-text">Дата приема:</span>
        </div>
        <div>
          <span className="text-tg-text">Принял:</span>
        </div>
        <div>
          <span className="text-tg-text ">Имя диска:</span>
        </div>
      </div>

      {/* Данные */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex gap-1">
          <span className="text-tg-link truncate">{disk.project?.title}</span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link">{disk.date}</span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link truncate">
            {disk.receiver?.name ?? "-"}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="text-tg-link truncate">{disk.diskName}</span>
        </div>
      </div>

      {/* Иконка Eject */}
      {/* <button
        onClick={(e) => {
          e.stopPropagation(); // ← чтобы не открывалась DiskPage
          navigate(`/disk/${id}/eject`);
        }}
        className="shrink-0 text-tg-hint active:opacity-70 transition-opacity p-1"
        aria-label="Извлечь диск"
      >
        <EjectIcon className="w-8 h-8" />
      </button> */}
    </div>
  );
};
