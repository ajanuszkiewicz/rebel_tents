module.exports = {
  purge: {
    enable: true,
    content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    options: {
      safelist: ['fa-ul', 'fa-li'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
    },
    extend:{
      colors:{
        gray:{
          lighter: '#eceeeb',
          DEFAULT: '#343434',
          darker: '#1B1B1B',
        },
        green:{
          lighter: '#e1f2e3',
          DEFAULT: '#4F9A1B',
        },
      },
    },
  },
  variants: {
    display: ["group-hover"],
    extend: {},
  },
  plugins: [],
}
