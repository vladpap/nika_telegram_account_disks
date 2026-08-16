import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Button } from '@telegram-apps/telegram-ui';
import { mockDisks } from '../data/mockDisks';
import { EjectIcon } from '../components/icons/EjectIcon';

export const DiskEject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const disk = mockDisks.find((d) => d.id === id);

  if (!disk) {
    return (
      <div className="px-5 pb-[120px]">
        <div className="py-8 text-center text-tg-hint">Диск не найден</div>
        <Button mode="filled" size="l" stretched onClick={() => navigate('/')}>
          Назад
        </Button>
      </div>
    );
  }

  const handleEject = () => {
    // Здесь будет API-запрос на извлечение
    console.log(`Диск ${disk.diskName} извлечён`);
    navigate('/');
  };

  return (
    <div className="px-5 pt-4 pb-[120px]">
      <div>
        <Header label1="Извлечь" value1={disk.diskName} />
      </div>

      {/* Предупреждение */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-[#FF383C]/10 flex items-center justify-center">
          <EjectIcon className="w-10 h-10 text-[#FF383C]" />
        </div>

        <h2 className="text-xl font-bold text-tg-text text-center">
          Подтвердите извлечение
        </h2>
        <p className="text-tg-hint text-center text-base">
          Диск <span className="text-tg-text font-medium">{disk.diskName}</span> из проекта{' '}
          <span className="text-tg-text font-medium">{disk.projectName}</span> будет извлечён
          и перемещён в архив.
        </p>
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