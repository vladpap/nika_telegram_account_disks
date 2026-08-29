import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Button, Textarea } from "@telegram-apps/telegram-ui";
import { getDiskWithRelations } from "../data/db";
import { EjectIcon } from "../components/icons/EjectIcon";

export const DiskEject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");

  const disk = getDiskWithRelations(Number(id));

  if (!disk) {
    return (
      <div className="px-5 pb-[120px]">
        <div className="py-8 text-center text-tg-hint">Диск не найден</div>
        <Button mode="filled" size="l" stretched onClick={() => navigate("/")}>
          Назад
        </Button>
      </div>
    );
  }

  const handleEject = () => {
    // Здесь будет API-запрос на извлечение
    console.log(`Диск ${disk.diskName} извлечён`);
    navigate("/");
  };

  return (
    <div className="px-5 pt-4 pb-[120px]">
      <div>
        <Header label1="Отдача диска" />
      </div>

      {/* Предупреждение */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-medium text-tg-text text-center">
          Отдаем диск: <span className="text-tg-link">{disk.diskName}</span>
        </h2>
      </div>
      <div className="mt-3 p-3 pr-8 border-solid rounded-[12px] border border-tg-hint">
        <div className="flex items-center gap-3">
          <img
            src={disk.image}
            alt={disk.diskName}
            className="w-[64px] h-[90px] object-cover rounded-lg shrink-0"
          />

          {/* Данные */}
          <div className="text-right pl-2 text-tg-text">
            <div>
              <span>Проект:</span>
            </div>
            <div>
              <span>Дата приема:</span>
            </div>
            <div>
              <span>Принял:</span>
            </div>
            <div>
              <span>Имя диска:</span>
            </div>
          </div>

          {/* Данные */}
          <div className="text-tg-link flex-1 flex flex-col min-w-0 font-medium">
            <div className="flex gap-1">
              <span className="truncate">{disk.project?.title ?? "-"}</span>
            </div>
            <div className="flex gap-1">
              <span>{disk.date}</span>
            </div>
            <div className="flex gap-1">
              <span className="truncate">{disk.receiver?.name ?? "-"}</span>
            </div>
            <div className="flex gap-1">
              <span className="truncate">{disk.diskName}</span>
            </div>
          </div>
        </div>
        {disk.noteIn && (
          <div className="flex mt-4 text-tg-text">
            <div>Примечание:</div>
            <div className="pl-1 text-tg-link font-medium">
              <span>{disk.noteIn}</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 -mx-6">
        <Textarea
          status="focused"
          header="Примечания"
          placeholder="Введите примечания при необходимости..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      {/* Кнопки */}
      <div className="mt-8 flex flex-col gap-3">
        <Button mode="filled" size="l" stretched onClick={handleEject}>
          <div className="flex items-center justify-center gap-2">
            <EjectIcon className="w-5 h-5" />
            Подтвердить
          </div>
        </Button>

        <Button mode="bezeled" size="l" stretched onClick={() => navigate(-1)}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
