import { Header } from '../components/Header';

export const ArchivePage = () => {
  return (
    <div className="px-5 pt-4 pb-24">
      <div>
        <Header label1="Архив"/>
      </div>
      <div className="py-8 text-center text-tg-hint">Архив пуст</div>
    </div>
  );
};