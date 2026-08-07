// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'selector', // or 'media' or 'class'
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
