# Pinewood Redesign — Project Conventions

**Проект:** Редизайн pinewoodhomes.ru  
**Стек:** React + TypeScript + Framer Motion + Tailwind CSS + Vite  
**Деплой:** Vercel (TBD)  

---

## 🤖 Команда дронов

| Роль | Сессия | Ответственность |
|------|--------|-----------------|
| **CEO** | TBD | Стратегия, приоритеты, коммуникация с Антоном |
| **CTO** | TBD | Архитектура, код-ревью, стандарты качества |
| **CMO** | TBD | Позиционирование, тексты, CTA, соц. доказательства |
| **Frontend Lead** | TBD | UI/UX, Framer Motion анимации, вёрстка |
| **Backend** | TBD | API, формы, интеграции, моки данных |
| **QA/Reviewer** | TBD | Тестирование, accessibility, security audit |
| **Shipper** | TBD | Сборка, деплой, CI/CD, мониторинг |
| **Planner (Jo)** | Main | Оркестрация, планирование, распределение задач |

---

## 📐 Стандарты кода

### TypeScript
- Строгая типизация (`strict: true`)
- Никаких `any` без веской причины
- Интерфейсы для всех пропсов компонентов

### React
- Функциональные компоненты с хуками
- TypeScript для всех компонентов
- Framer Motion для всех анимаций

### Стили
- Tailwind CSS утилитарный подход
- Кастомные классы только через `@layer components`
- Mobile-first адаптивность

### Анимации (Framer Motion)
- Референс: [Iron Man demo](https://github.com/devinilabs/iron-man)
- Плавность: 0.3–0.5s duration
- Easing: `easeInOut` для большинства случаев
- Prefers-reduced-motion поддержка обязательна

---

## 🌐 Шрифты (CRITICAL)

**Требование:** Все шрифты должны поддерживать **кириллицу**!

### Рекомендуемые (с Cyrillic support):
- **Заголовки:** 
  - `Montserrat` (Google Fonts) — современный, геометричный
  - `Playfair Display` — элегантный, с засечками
  - `Raleway` — лёгкий, воздушный
  - `Merriweather` — классический, с засечками
- **Тело:**
  - `Inter` (Google Fonts) — нейтральный, читаемый
  - `Roboto` — стандартный, надёжный
  - `Open Sans` — дружелюбный

### Проверка перед использованием:
1. Открыть Google Fonts → фильтр "Cyrillic"
2. Проверить все буквы: абвгдеёжзийклмнопрстуфхцчшщъыьэюя
3. Проверить кернинг на русских словах

---

## 📁 Структура проекта

```
pinewood-redesign/
├── STATUS.md              # Прогресс и затраты (обновляется дронами)
├── PROJECT-AGENTS.md      # Этот файл
├── PLAN.md                # Полный план (ссылка на workspace)
├── src/
│   ├── components/        # Переиспользуемые компоненты
│   │   ├── ui/           # Базовые UI компоненты
│   │   ├── layout/       # Header, Footer, Sections
│   │   └── animations/   # Framer Motion компоненты
│   ├── pages/            # Страницы (Home, Catalog, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Утилиты, конфиги
│   ├── styles/           # Глобальные стили
│   └── main.tsx          # Entry point
├── public/
│   ├── images/           # Оптимизированные изображения
│   ├── videos/           # Hero видео, фоновые
│   └── fonts/            # Локальные шрифты (если нужно)
├── tests/
│   ├── components/       # Component tests
│   ├── e2e/              # E2E тесты
│   └── accessibility/    # WCAG проверки
├── .github/
│   └── workflows/        # CI/CD пайплайны
├── docs/
│   ├── audit.md          # Исходный аудит сайта
│   ├── decisions/        # ADR (Architecture Decision Records)
│   └── reports/          # Отчёты по фазам
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🔄 Workflow

### Коммиты
Формат: `[РОЛЬ] #задача — описание`  
Примеры:
- `[FRONTEND] #hero-animation — добавил fade-in для заголовка`
- `[QA] #a11y — исправил контраст кнопок до WCAG AA`
- `[SHIPPER] #deploy — настроил Vercel preview`

### Pull Requests
- Минимум 1 ревью от CTO или QA
- Checklist: тесты, accessibility, производительность
- Скриншоты для визуальных изменений

### Статус-апдейты
- После каждой завершённой задачи → обновлять STATUS.md
- Формат: `[YYYY-MM-DD HH:mm] [РОЛЬ] — что сделано`

---

## 📊 Трекер затрат

Каждый дрон фиксирует в STATUS.md:
- Количество промтов использовано
- Примерное количество токенов (in/out)
- Время работы

**Формат записи:**
```md
| Дата | Дрон | Задача | Промты | Токены in | Токены out |
|------|------|--------|--------|-----------|------------|
| 2026-04-30 | Jo | Планирование | 1 | 45k | 5k |
```

---

## 🛡️ Security & Quality

- Никаких секретов в коде (использовать env variables)
- Dependency audit перед каждым мерджем
- Lighthouse score > 90 (все категории)
- WCAG 2.1 AA minimum

---

_Создано Jo (Planner) — 2026-04-30_
