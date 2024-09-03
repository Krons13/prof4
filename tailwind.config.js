/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-650': '#35A2E5',
        'blue-750': '#0000DE',
        'blue-850': '#355DFB',
        'gray-850': '#EDF2FF',
        'gray-750': '#9AB5C6',
        'gray-650': '#F0F4F8',
        'gray-550': '#79A6C3',
        'white-550': '#E7EEFF',
        'white-650': '#eaeaea',
        'purple-550': '#7B7CF6',

      },
      borderRadius: {
        'cm': '28px 0px'
      },
      gridTemplateColumns: {
        '20': 'repeat(2, 20rem)',
        'auto': 'repeat(2, auto)'
      },
      gridTemplateRows: {
        '3-auto': 'repeat(3, auto)'
      },
      fontFamily: {
        'inter': 'Inter',
        'helvetica': 'Helvetica', 
      },
      maxWidth: {
        'xs': '304px',
        'md': '412px',
        '2xl': '628px'
      },
      width: {
        '22' : '5.5rem'
      },
      height: {
        '474': '474px',
      },
    },
  },
  plugins: [],
}