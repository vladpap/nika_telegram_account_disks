//import { useTelegram } from '../hooks/useTelegram';
import { Header } from "../components/Header";
import { DiskCard } from "../components/DiskCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@telegram-apps/telegram-ui";
import { mockDisks } from "../data/mockDisks";
import { getAllDisksWithRelations } from "../data/db";

export const HomePage = () => {
  //const { user } = useTelegram();
  const navigate = useNavigate();

  const disk = getAllDisksWithRelations();

  return (
    <div className="px-5 pt-4 pb-[120px]">
      <div>
        <Header
          label1="Дисков в работе"
          value1={mockDisks.length}
          label2="Количество проектов"
          value2={5}
        />
      </div>

      {/* Кнопка */}
      <div className="mt-4">
        <Button
          mode="filled"
          size="l"
          stretched
          onClick={() => navigate("/add-disk")}
        >
          Добавить диск
        </Button>
      </div>

      {/* Список карточек */}
      <div className="mt-4 flex flex-col gap-3">
        {disk.map((disk) => (
          <DiskCard key={disk.id} disk={disk} />
        ))}
      </div>
    </div>
  );
};
