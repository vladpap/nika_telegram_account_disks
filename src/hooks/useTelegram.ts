import { useEffect, useState } from 'react';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

export const useTelegram = () => {
  const [tg, setTg] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;
    
    if (webApp) {
      webApp.ready();
      webApp.expand();
      webApp.HapticFeedback?.impactOccurred('light');
      setTg(webApp);
      setUser(webApp.initDataUnsafe?.user || null);
    }
  }, []);

  return {
    tg,
    user,
    isDark: tg?.colorScheme === 'dark',
  };
};