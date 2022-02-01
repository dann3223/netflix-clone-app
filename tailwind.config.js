module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'red': '#E50914',
      'white': '#FFF',
      'black': '#000',
      'gray': '#222222',
      'discgray': '#303030',
      'footer': '#757575',
    },
    screens: {
      'littlesm': '550px',
      'md': '758px',
      'littlelg': '950px',
      'littlexl': '1200px',
    },
  },
  plugins: [],
}
