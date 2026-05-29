/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#fefcf5',
        'dark-brown': '#3d2c0a',
        'warm-gray': '#6b5a3e',
        'warm-gold': '#c9a96e',
        'light-tan': '#e8e0d0',
      },
      fontFamily: {
        serif: ['Georgia', 'Noto Serif SC', 'Source Serif 4', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
