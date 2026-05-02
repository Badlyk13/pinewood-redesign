/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pinewood: {
          forest: '#2E4A2A',      // Мхово-зелёный (основной)
          moss: '#3D5A3A',        // Светлее для ховеров
          pine: '#1A2F1A',        // Тёмный для текста
          beige: '#E8DCC4',       // Тёплый бежевый (акценты)
          sand: '#F5F0E6',        // Светлый фон
          graphite: '#1A1F1A',    // Графит (тёмный текст)
          gold: '#D4A574',        // Тёплое золото (премиум акценты)
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
