/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '32px',
        h2: '24px',
        h3: '18.72px',
        h4: '16px',
        bentoTitle: '18px'
      },
      colors: {
        navText: 'black',
        bodyText: 'white'
      }
    }
  },
  plugins: []
}
