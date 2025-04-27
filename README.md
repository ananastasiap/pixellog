# PIXELLOG 🎮

[![React](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/redux--toolkit-1.9.5-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-3.3.2-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/vite-4.3.9-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/eslint-8.56.0-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/prettier-3.2.5-F7B93E?logo=prettier&logoColor=white)](https://prettier.io/)
[![Husky](https://img.shields.io/badge/husky-9.0.11-1D3442?logo=github&logoColor=white)](https://typicode.github.io/husky)

---

## Описание

**PIXELLOG** — это простой проект-трекер для игр.

Функционал:

- Искать игры через RAWG API;
- Добавлять их в список с выбранным статусом (прохожу / хочу пройти / пройдено)
- Удалять игры из списка
- Сохранять список игр в `localStorage` между сессиями с помощью `redux-persist`

---

## Скрипты

| Скрипт            | Описание                                |
| ----------------- | --------------------------------------- |
| `npm install`     | Установить зависимости проекта          |
| `npm run dev`     | Запустить проект в режиме разработки    |
| `npm run build`   | Собрать проект для продакшена           |
| `npm run preview` | Локальный предпросмотр продакшен-сборки |

---

## Технологии

- **React 18** — библиотека для построения интерфейсов
- **Redux Toolkit** — удобная работа с состоянием
- **Redux Persist** — сохранение состояния между сессиями
- **Tailwind CSS** — утилитарные стили
- **shadcn/ui** — готовые UI-компоненты на Tailwind
- **Vite** — сборщик для быстрого старта
- **ESLint** — автоматическая проверка кода
- **Prettier** — автоформатирование кода
- **Husky** — настройка гит-хуков для проверки кода перед коммитами

---

## API

**RAWG Video Games Database API**

- Документация: [https://rawg.io/apidocs](https://rawg.io/apidocs)
- Используется для поиска игр по названию через открытый API.
- Для работы нужен API-ключ:
  добавить `.env` файл в корень проекта:

```env
VITE_RAWG_API_KEY=your_api_key_here
```
