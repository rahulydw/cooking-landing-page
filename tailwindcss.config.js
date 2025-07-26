// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        playfair: ['Playfair', 'serif'],
        tinos: ['Tinos', 'serif'],
      },
    },
  },
  plugins: [],
}
