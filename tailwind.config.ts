import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#991A1A',
        'primary-dark': '#660000',
        'primary-light': '#B33333',
      },
    },
  },
  plugins: [],
}

export default config
