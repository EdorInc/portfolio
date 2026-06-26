/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — Paleta Oliva-Ámbar / Parchment
        primary: {
          DEFAULT: '#ff8300', // naranja — CTAs, highlights principales
          dark:    '#d96800', // naranja oscuro — hover
        },
        accent: {
          yellow:  '#ffce35', // amarillo dorado — acento secundario, sección titles
          pale:    '#ffff90', // amarillo pálido — fondos de tags suaves
          green:   '#4c6032', // verde oliva — texto secundario / muted
          dark:    '#322c18', // oliva oscuro — texto principal / headings
        },
        surface: {
          DEFAULT:  '#fdf8ed', // pergamino — fondo base
          elevated: '#fff8e0', // crema amarilla — tarjetas y secciones elevadas
          border:   '#e0c860', // dorado suave — bordes
          dark:     '#322c18', // oliva oscuro — elementos invertidos (nav pill, etc.)
        },
        text: {
          DEFAULT: '#322c18', // oliva oscuro — texto principal
          muted:   '#7a6a40', // marrón medio — texto secundario
        },
      },
      fontFamily: {
        sans:     ['Syne', 'system-ui', 'sans-serif'],     // subtítulos y UI
        body:     ['Inter', 'system-ui', 'sans-serif'],    // cuerpo de texto
        mono:     ['IBM Plex Mono', 'monospace'],          // títulos y labels técnicos
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
