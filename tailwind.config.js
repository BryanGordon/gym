/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '62px',
        h2: '24px',
        h3: '25px',
        h4: '16px',
        bentoTitle: '22px',
        navText: '19.75px'
      },
      colors: {
        navText: 'black',
        bodyText: 'white',
        bentoText: '#F7F7F7',
        bentoParag: '#e5e7eb'
      }
    }
  },
  plugins: []
}
