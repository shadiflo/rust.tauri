/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'white': '#EBEFF3',
        'orange': '#FF7D00',
        'orange-secondary': '#FF5500',
        'yellow': '#ffc82c',
        'gray-dark': '#0A0C0C',
        'gray': '#141616',
        'gray-light': '#232828',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Oswald, ui-serif'], // Adds a new `font-display` class      
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  },
  plugins:[],
}