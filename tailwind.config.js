/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        "xs2": '500px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        cristalux: '#fcf38b',
        cristaluxBrown: "#3D321C"
      },
    },
  },
  plugins: [

  ],
}

