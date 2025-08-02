/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',        // App router files
    './components/**/*.{js,ts,jsx,tsx}', // Including menu/Header.jsx
  ],
  theme: {
    extend: {
      fontFamily: {
        groningen: ['Groningen', 'sans-serif'],
        flecto: ['Flecto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
