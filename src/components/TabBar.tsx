import { useNavigate, useLocation } from 'react-router-dom';
import { ActionIcon } from './icons/ActionIcon';
import { ArchiveIcon } from './icons/ArchiveIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { HelpIcon } from './icons/HelpIcon';

interface TabItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const tabs: TabItem[] = [
  {
    label: 'В работе',
    path: '/',
    icon: <ActionIcon className="w-6 h-6" />,
  },
  {
    label: 'Архив',
    path: '/archive',
    icon: <ArchiveIcon className="w-6 h-6" />,
  },
  {
    label: 'Настройки',
    path: '/settings',
    icon: <SettingsIcon className="w-6 h-6" />,
  },
  {
    label: 'Помощь',
    path: '/help',
    icon: <HelpIcon className="w-6 h-6" />,
  },
];

export const TabBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-tg-secondary-bg border-t border-tg-hint/20 z-50">
      <div
        className="flex items-center justify-around py-[14px]"
        style={{ paddingBottom: 'calc(14px + env(safe-area-inset-bottom))' }}
      >
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center justify-center gap-1 flex-1"
            >
              <div className={`mb-2 ${
                    isActive ? 'text-tg-link' : 'text-tg-hint'
                }`}
                    >
                {tab.icon}
              </div>

              <span
                className={`text-[14px] leading-none ${
                  isActive ? 'text-tg-link font-medium' : 'text-tg-hint'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};