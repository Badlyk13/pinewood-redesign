# QA Checklist — Фаза 1 (Quick Wins)

## ✅ Завершённые задачи

### 1. Hero-блок
- [x] Затемнение hero-фото слева градиентом 35–45%
  - Реализовано: `bg-gradient-to-r from-pinewood-graphite/70 via-pinewood-graphite/30 to-transparent`
- [x] Увеличение заголовка до 96px+
  - Реализовано: `text-8xl lg:text-9xl` (96-128px)
- [x] Добавлена строка доверия под заголовком
  - Текст: «🌲 14 лет · 🏠 300+ домов · 🛡️ гарантия 5 лет · 🏦 ипотека от 6 банков»
- [x] Изменён CTA с «Выбрать проект» на «Рассчитать стоимость моего дома → за 2 минуты»

### 2. Viewport
- [x] Убран `user-scalable=no, maximum-scale=1.0` из viewport
  - Проверено в `index.html`: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

### 3. Изображения (14 шт.)
- [x] Создан компонент `Image.tsx` с обязательным alt атрибутом (TypeScript enforcement)
- [x] Создан файл `docs/IMAGE-ALT-REFERENCE.md` с полным списком alt-текстов
- [x] Созданы placeholder-изображения для всех 14 изображений:
  1. hero-forest-house.svg — "Каркасный дом Pinewood Homes в лесу с панорамным остеклением"
  2. service-foundation.svg — "Строительство фундамента для каркасного дома - бетонные работы"
  3. service-frames.svg — "Монтаж деревянного каркаса дома - несущие конструкции"
  4. service-insulation.svg — "Утепление стен каркасного дома - базальтовая вата"
  5. service-exterior.svg — "Отделка фасада - имитация бруса и декоративные элементы"
  6. service-interior.svg — "Внутренняя отделка дома - гипсокартон и покраска"
  7. service-utilities.svg — "Инженерные коммуникации - электрика и сантехника"
  8. service-landscaping.svg — "Благоустройство участка - ландшафтный дизайн"
  9. project-alexandrovo.svg — "Проект дома в Александрово - 150 м², сдан в 2024"
  10. project-vladimir.svg — "Проект дома во Владимирской области - 220 м², сдан в 2023"
  11. project-moscow.svg — "Проект дома в Московской области - 180 м², сдан в 2025"
  12. project-tver.svg — "Проект дома в Тверской области - 200 м², сдан в 2024"
  13. project-yaroslavl.svg — "Проект дома в Ярославской области - 165 м², сдан в 2023"
  14. project-kaluga.svg — "Проект дома в Калужской области - 240 м², сдан в 2025"
  15. team-photo.svg — "Команда Pinewood Homes на производстве - 14 лет опыта"
  16. factory.svg — "Заводское производство Pinewood Homes - цех сборки"

### 4. Калькулятор
- [x] Переписан первый вопрос с «Укажите площадь дома» на «Постоянное проживание или сезонное?»
- [x] Реализован полный 4-шаговый калькулятор:
  1. Постоянное проживание или сезонное?
  2. Сколько спален нужно?
  3. Желаемая площадь дома
  4. Куда отправить расчёт?

## 🎨 Дополнительные улучшения

### Стек технологий
- [x] Vite + React + TypeScript настроены
- [x] Tailwind CSS с палитрой Pinewood (forest, moss, pine, beige, sand, graphite)
- [x] Framer Motion для анимаций
- [x] Шрифты с поддержкой кириллицы: Montserrat, Playfair Display, Inter

### Анимации (Framer Motion)
- [x] Hero заголовок: fade-in + slide-up (0.8s)
- [x] Подзаголовок: fade-in + slide-up с задержкой 0.2s
- [x] Строка доверия: fade-in + slide-up с задержкой 0.3s
- [x] CTA кнопки: fade-in + slide-up с задержкой 0.4s
- [x] Scroll indicator: bounce animation (infinity)

### Премиум стиль
- [x] Цветовая палитра: убран ядовитый зелёный, введена «лесная» палитра
- [x] Типографика: Montserrat/Playfair для заголовков, Inter для текста
- [x] Анимации: сдержанные, премиум (easeOut, не переборщено)

## 📋 Тестирование

### Локальное тестирование
- [x] Dev сервер запущен: http://localhost:5173/
- [x] Vite собран без ошибок
- [x] TypeScript компилируется без ошибок

### Проверка шрифтов (Cyrillic support)
- [x] Montserrat: `&family=Montserrat:wght@400;500;600;700;800`
- [x] Playfair Display: `&family=Playfair+Display:wght@400;500;600;700`
- [x] Inter: `&family=Inter:wght@300;400;500;600`

## 🚀 Готово к мержу

**Статус:** ✅ ГОТОВО К QA  
**QA требуется перед мержем:** ДА (согласно конвенциям)  
**Следующий шаг:** Ревью Антона / Jo (Planner)

---

_Проверено: Frontend Lead дрон — 2026-04-30_
