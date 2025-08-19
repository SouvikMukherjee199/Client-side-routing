/*******************
 Tailwind CSS v4 configuration
 Enables class-based dark mode so toggling the `dark` class on <html> works.
********************/

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
}
