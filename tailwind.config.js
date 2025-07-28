/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#2E1B1B',
        red: '#F53D37',
        yellow: '#FED03B',
        brown: {
          DEFAULT: '#2E1B1B',
          light: '#2e1b1b7e',
          border: '#2e1b1b2a',
        },
        overlay: '#22181862',
        grayBorder: '#d9d9d9',
        inputLabel: '#818181',
      },
      rotate: {
        '30': '30deg',
        '-20': '-20deg',
        '-30': '-30deg',
      },
      boxShadow: {
        'header-img': '0px 1px 8px #000000c0',
      },
      borderRadius: {
        headerBg: '130px',
        underline: '4px',
        btn: '30px',
      },
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right, #F53D37, #f53d37c9, #f53d37f1)',
      },
    },
  },
  plugins: [],
};