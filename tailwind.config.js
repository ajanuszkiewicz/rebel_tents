module.exports = {
  purge: [],
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
