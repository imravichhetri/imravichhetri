// module.exports = {
//   important: true,
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   purge: process.env.NODE_ENV === 'production' ? ['./src/**/*.{js,jsx,ts,tsx}'] : [],
//   // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       maxWidth: {
//         '4': '4px',
//         '10':'10px',
//         '160':'160px'
//        }
//     },
//     colors: {
//       'secondary-yellow': 'rgb(252, 201, 93)'
//     },
//     screens: {
//       '2xl': { max: '1536px' },
//       // => @media (max-width: 1535px) { ... }

//       xl: { max: '1280px' },
//       // => @media (max-width: 1279px) { ... }

//       lg: { max: '1024px' },
//       // => @media (max-width: 1023px) { ... }

//       md: { max: '768px' },
//       // => @media (max-width: 767px) { ... }

//       sm: { max: '640px' },
//       // => @media (max-width: 639px) { ... }
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      helvetica: [ 'Helvetica', 'Arial']
    },
    extend: {
      maxWidth: {
        '4': '4px',
        '10':'10px',
        '160':'160px'
        }
    },
    colors: {
      'primary-white': 'rgba(255,255,255,1)',
      'secondary-yellow': 'rgb(252, 201, 93)'
    },
    screens: {
      '2xl': { max: '1536px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1280px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1024px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '640px' },
      // => @media (max-width: 639px) { ... }
    },
  },
}