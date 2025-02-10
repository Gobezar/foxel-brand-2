
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#000',
        foreground: '#D4D4D8',
        focus: '#006FEE',
        default: {
          50: '#18181b',
          100: '#27272a',
          200: '#3f3f46',
          300: '#52525b',
          400: '#71717a',
          500: '#a1a1aa',
          600: '#d4d4d8',
          700: '#e4e4e7',
          800: '#f4f4f5',
          900: '#fafafa',
          DEFAULT: '#a1a1aa',
          foreground: '#ECEDEE',
        },
        primary: {
          50: '#001731',
          100: '#002e62',
          200: '#004493',
          300: '#005bc4',
          400: '#006FEE',
          500: '#338ef7',
          600: '#66aaf9',
          700: '#99c7fb',
          800: '#cce3fd',
          900: '#e6f1fe',
          DEFAULT: '#338ef7',
          foreground: '#ECEDEE',
          primaryFlat: '#006FEE33',
        },
        secondary: {
          50: '#180828',
          100: '#301050',
          200: '#481878',
          300: '#6020a0',
          400: '#7828c8',
          500: '#9353d3',
          600: '#ae7ede',
          700: '#c9a9e9',
          800: '#e4d4f4',
          900: '#f2eafa',
          DEFAULT: '#9353d3',
          foreground: '#ECEDEE',
        },
        success: {
          50: '#052814',
          100: '#095028',
          200: '#0e793c',
          300: '#12a150',
          400: '#17c964',
          500: '#45d483',
          600: '#74dfa2',
          700: '#a2e9c1',
          800: '#d1f4e0',
          900: '#e8faf0',
          DEFAULT: '#45d483',
          foreground: '#ECEDEE',
          successFlat: '#17C96433',
        },
        warning: {
          50: '#312107',
          100: '#62420e',
          200: '#936316',
          300: '#c4841d',
          400: '#f5a524',
          500: '#f7b750',
          600: '#f9c97c',
          700: '#fbdba7',
          800: '#fdedd3',
          900: '#fefce8',
          DEFAULT: '#f7b750',
          foreground: '#ECEDEE',
        },
        danger: {
          50: '#310413',
          100: '#610726',
          200: '#920b3a',
          300: '#c20e4d',
          400: '#f31260',
          500: '#f54180',
          600: '#f871a0',
          700: '#faa0bf',
          800: '#fdd0df',
          900: '#fee7ef',
          DEFAULT: '#f54180',
          foreground: '#ECEDEE',
          dangerFlat: '#F3126033',
        },
        red: '#BF252B'
      },
      // пример использования как trilwind КЛАСС: text-xs или text-base
      fontSize: {
        xs: ['12px', { lineHeight: '18px', letterSpacing: '-0.02em' }], // Более плотный текст, улучшает читаемость на мелких размерах
        sm: ['14px', { lineHeight: '20px', letterSpacing: '-0.01em' }], // Лёгкая коррекция, чтобы текст не выглядел сжатым
        base: ['16px', { lineHeight: '24px', letterSpacing: '0em' }], // Универсальная настройка, оставляем без изменений
        lg: ['20px', { lineHeight: '24px', letterSpacing: '0em' }], // Небольшая коррекция для комфортного восприятия
        xl: ['24px', { lineHeight: '32px', letterSpacing: '0.01em' }], // Оптимальное соотношение для крупных размеров
        '2xl': ['26px', { lineHeight: '38px', letterSpacing: '0.01em' }], // Увеличение высоты строки для большей лёгкости
        '3xl': ['30px', { lineHeight: '36px', letterSpacing: '0.015em' }], // Ещё больше пространства между строками для крупного текста
        '4xl': ['32px', { lineHeight: '38px', letterSpacing: '0em' }], // Ещё больше пространства между строками для крупного текста
        '5xl': ['36px', { lineHeight: '48px', letterSpacing: '0.02em' }], // Просторное оформление для заголовков
        '6xl': ['64px', { lineHeight: '75px', letterSpacing: '0em' }], // Просторное оформление для заголовков

      },

      // пример использования как trilwind КЛАСС: font-thin или font-black
      fontWeight: {
        thin: '100', 
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      spacing: {
        0: '0px', // Отсутствие отступов или полей: p-0, m-0
        1: '4px', // Минимальные отступы или поля: p-1, m-1
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '36px',
        9: '38px',
        10: '40px',
      },
    },
  },
};
