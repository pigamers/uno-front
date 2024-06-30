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
        'guides': "url('/assets/guides.png')",
        'footpat': "url('/assets/footpat.png')",
        'custom-gradient': 'linear-gradient(269.9deg, rgba(0, 0, 0, 0) 0.95%, rgba(0, 0, 0, 0.96) 101.07%)',
        'pink-gradient':'linear-gradient(90.45deg, rgba(194, 39, 142, 0.51) 0.36%, rgba(15, 15, 15, 0) 99.59%)'

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plusjakarta: ["Plus Jakarta Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        archivo: ["Archivo", "sans-serif"],
        montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      
    }
  },
  plugins: [],
}

