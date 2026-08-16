//import { useTelegram } from '../hooks/useTelegram';
import { Header } from '../components/Header';
import { DiskCard } from '../components/DiskCard';
import { useNavigate } from 'react-router-dom';
import { Button } from '@telegram-apps/telegram-ui';
import { mockDisks } from '../data/mockDisks';

export const HomePage = () => {
  //const { user } = useTelegram();
  const navigate = useNavigate();

  const handleEject = (diskName: string) => {
    console.log(`Извлечь диск ${diskName}`);
    // Здесь будет логика извлечения
  };

  return (
    <div className="px-5 pt-4 pb-[120px]">
      <div>
        <Header
          label1="Дисков в работе :"
          value1={mockDisks.length}
          label2="Количество проектов :"
          value2={12}
        />
      </div>

      {/* Кнопка */}
      <div className="mt-4">
        <Button
          mode="filled"
          size="l"
          stretched
          onClick={() => navigate('/add-disk')}
        >
          Добавить диск
        </Button>
      </div>

      {/* Список карточек */}
      <div className="mt-4 flex flex-col gap-3">
        {mockDisks.map((disk) => (
          <DiskCard
            key={disk.id}
            id={disk.id}
            image={disk.image}
            projectName={disk.projectName}
            date={disk.date}
            receiver={disk.receiver}
            diskName={disk.diskName}
          />
        ))}
      </div>
    </div>
  );
};