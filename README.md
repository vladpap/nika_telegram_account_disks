# Nika Digital — Telegram Mini App

Приложение для учёта жёстких дисков в работе. Разработано как Telegram Mini App с использованием React, TypeScript, Vite и Tailwind CSS.

## 🚀 Технологии

- **React 18** + **TypeScript**
- **Vite** — сборка и dev-сервер
- **Tailwind CSS** — стилизация
- **@telegram-apps/telegram-ui** — нативные компоненты Telegram
- **React Router** — навигация
- **@fontsource/roboto-condensed** — шрифт

## 📦 Установка

```bash
# Клонирование репозитория
git clone https://github.com/USERNAME/nika-digital-tg.git
cd nika-digital-tg

# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Приложение откроется по адресу `http://localhost:5173`.

## 🏗 Сборка

```bash
npm run build
```

Статические файлы появятся в папке `dist/`.

## 🤖 Подключение к Telegram

1. Найди [@BotFather](https://t.me/BotFather) в Telegram
2. Создай бота: `/newbot`
3. Настрой Web App: `/mybots` → *Bot Settings* → *Menu Button* → *Configure Web App*
4. Укажи URL задеплоенного приложения (например, `https://nika-digital.vercel.app`)

## 📁 Структура проекта

```
├── public/
│   ├── logos/              # Логотипы (светлая/тёмная тема)
│   └── images/disks/       # Фото дисков
├── src/
│   ├── components/         # Переиспользуемые компоненты
│   │   ├── Header.tsx
│   │   ├── DiskCard.tsx
│   │   ├── TabBar.tsx
│   │   ├── AdaptiveImage.tsx
│   │   └── icons/          # SVG-иконки как React-компоненты
│   ├── pages/              # Страницы приложения
│   │   ├── HomePage.tsx
│   │   ├── DiskPage.tsx
│   │   ├── DiskEject.tsx
│   │   ├── ImageViewer.tsx
│   │   ├── AddDisk.tsx
│   │   ├── ArchivePage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── HelpPage.tsx
│   ├── hooks/
│   │   └── useTelegram.ts  # Работа с Telegram WebApp API
│   ├── data/
│   │   └── mockDisks.ts    # Тестовые данные
│   ├── telegram.d.ts       # TypeScript-типы для Telegram API
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── package.json
```

## 🎨 Цветовая схема

Приложение автоматически подхватывает тему Telegram (светлая/тёмная) через CSS-переменные `var(--tg-theme-*)`.

## 📄 Лицензия

MIT
