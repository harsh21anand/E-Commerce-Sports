const colors = require('tailwindcss/colors');

module.exports = {

  content: [
    './src/**/*.{js,jsx,ts,tsx}', // <-- adjust path if needed
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        sky: colors.sky,
        slate: colors.slate,
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      
    },
  },
  plugins: [],
};