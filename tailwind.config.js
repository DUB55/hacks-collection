<<<<<<< HEAD
=======
import typography from '@tailwindcss/typography';

>>>>>>> d9fd8e99d8a3428ab72b64e0c614d30f19722394
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
<<<<<<< HEAD
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            code: {
              color: '#fff',
            },
            blockquote: {
              color: '#fff',
            },
=======
            h1: { color: '#fff' },
            h2: { color: '#fff' },
            h3: { color: '#fff' },
            h4: { color: '#fff' },
            strong: { color: '#fff' },
            code: { color: '#fff' },
            blockquote: { color: '#fff' },
>>>>>>> d9fd8e99d8a3428ab72b64e0c614d30f19722394
          },
        },
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require('@tailwindcss/typography'),
  ],
=======
  plugins: [typography],
>>>>>>> d9fd8e99d8a3428ab72b64e0c614d30f19722394
};