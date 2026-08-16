import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button, Input } from '@telegram-apps/telegram-ui';
import { mockDisks } from '../data/mockDisks';
import { EjectIcon } from '../components/icons/EjectIcon';
import { AdaptiveImage } from '../components/AdaptiveImage';

export const DiskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const disk = mockDisks.find((d) => d.id === id);

  if (!disk) {
    return (
      <div className="px-5 pt-4 pb-[120px]">
        <div className="py-8 text-center text-tg-hint">Диск не найден</div>
        <Button mode="filled" size="l" stretched onClick={() => navigate('/')}>
          Назад
        </Button>
      </div>
    );
  }

  return (
    <div className="px-5 pt-4 pb-[120px]">
      <div>
        <Header label1="Дисков" value1={43} label2="Дисков в работе" value2={2} />
      </div>

      {/* Картинка */}
      <div className="mt-4 py-4 flex-row justify-center border-solid rounded-[12px] border border-tg-hint">
        <div onClick={() => navigate(`/disk/${disk.id}/image`)} className="cursor-pointermt-4 flex justify-center">
          <AdaptiveImage
            src={disk.image}
            alt={disk.diskName}
            maxSize={200}
            className="shrink-0"
          />
        </div>
  
        {/* Детали */}
        <div className="mt-4 px-4 flex">

          <div className="text-right text-base">
            <div><span className="text-tg-text">Проект :</span></div>
            <div><span className="text-tg-text">Дата приёма :</span></div>
            <div><span className="text-tg-text">Принял :</span></div>
            <div><span className="text-tg-text">Имя диска :</span></div>
            {disk.noteIn && disk.noteIn.trim() !== "" && (
              <div><span className="text-tg-text">Примечание :</span></div>
            )}
          </div>

          <div className="flex-1 pl-2 font-medium">
            <div><span className="text-tg-link">{disk.projectName}</span></div>
            <div><span className="text-tg-link">{disk.date}</span></div>
            <div><span className="text-tg-link">{disk.receiver}</span></div>
            <div><span className="text-tg-link">{disk.diskName}</span></div>
            <div><span className="text-tg-link">{disk.noteIn}</span></div>
          </div>
        </div>
        </div>

      <div className="mt-1 -mx-6">
        <Input
          header="Примечания"
          placeholder="Введите примечания при необходимости..."
          status="focused"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      {/* Кнопки */}
      <div className="mt-6 flex flex-col gap-3">
        <Button
          mode="filled"
          size="l"
          stretched
          onClick={() => navigate(`/disk/${disk.id}/eject`)}
        >
          <div className="flex items-center justify-center gap-2">
            <EjectIcon className="w-5 h-5" />
            Отдать диск
          </div>
        </Button>

        <Button mode="bezeled" size="l" stretched onClick={() => navigate(-1)}>
          Отмена
        </Button>
      </div>
    </div>
  );
};