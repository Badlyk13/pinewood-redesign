# Image Alt Attribute Reference

Based on audit from docs/audit.md - 14 images were missing alt attributes.

## Required Images with Alt Text

### Hero Section
1. **hero-forest-house.jpg** - "Каркасный дом Pinewood Homes в лесу с панорамным остеклением"

### Services Section (6 images)
2. **service-foundation.jpg** - "Строительство фундамента для каркасного дома - бетонные работы"
3. **service-frames.jpg** - "Монтаж деревянного каркаса дома - несущие конструкции"
4. **service-insulation.jpg** - "Утепление стен каркасного дома - базальтовая вата"
5. **service-exterior.jpg** - "Отделка фасада - имитация бруса и декоративные элементы"
6. **service-interior.jpg** - "Внутренняя отделка дома - гипсокартон и покраска"
7. **service-utilities.jpg** - "Инженерные коммуникации - электрика и сантехника"
8. **service-landscaping.jpg** - "Благоустройство участка - ландшафтный дизайн"

### Portfolio Section (6 images)
9. **project-alexandrovo.jpg** - "Проект дома в Александрово - 150 м², сдан в 2024"
10. **project-vladimir.jpg** - "Проект дома во Владимирской области - 220 м², сдан в 2023"
11. **project-moscow.jpg** - "Проект дома в Московской области - 180 м², сдан в 2025"
12. **project-tver.jpg** - "Проект дома в Тверской области - 200 м², сдан в 2024"
13. **project-yaroslavl.jpg** - "Проект дома в Ярославской области - 165 м², сдан в 2023"
14. **project-kaluga.jpg** - "Проект дома в Калужской области - 240 м², сдан в 2025"

### Trust Indicators
15. **team-photo.jpg** - "Команда Pinewood Homes на производстве - 14 лет опыта"
16. **factory.jpg** - "Заводское производство Pinewood Homes - цех сборки"

## Implementation Notes

All images must:
- Have descriptive alt text in Russian
- Include key details (location, size, year for projects)
- Mention Pinewood Homes brand where appropriate
- Be meaningful for screen readers
- Include relevant keywords for SEO

## File Locations

- Source images: `/public/images/`
- Component: `/src/components/ui/Image.tsx` (enforces alt attribute)
- Usage: Always use the Image component or ensure alt attribute is present
