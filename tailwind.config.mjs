/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/img/**/*.{js,ts,jsx,tsx,mdx}", // Nueva ruta agregada
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-bg': "url('/img/Dunas.jpg')", 
        'bgTestImage': "url('https://cleanedbucketdev.s3.us-east-2.amazonaws.com/Tours+imagenes/avistamiento+ballenas/whales1.jpg')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'blueSunrise': '#C8D9E6',
        'blueText':'#143D6C',
        'blueSubtitles':'#2F4156',
        'blueDrop':"#2F4156",
        'blueHover':'#1601F8',
        'sectionBG': "#F5EFEB",
        

            background: 
            "var(--background)",

            
            
      },
    },
  },
  plugins: [],
};