

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      screens: {
        ssm: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
      },
    },
  },
  plugins: [],
};
