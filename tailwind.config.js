/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero.png')",
        'guides': "url('/assets/guides.png')"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      }
    }
  },
  plugins: [],
}

