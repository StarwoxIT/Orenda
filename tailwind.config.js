/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
  theme: {
    screens,
   
    extend: {
      backgroundImage: {
        'm-footer':
          "url('./src/assets/footer_bg_tl.png'),url('./src/assets/footer_bg_br.png'),url('./src/assets/footer_bg_r.png')",
        'md-footer':
          "url('./src/assets/md_footer_bg_bl.png'),url('./src/assets/md_footer_bg_tr.png'),url('./src/assets/md_footer_bg_r.png')"
      },
      backgroundPosition: {
        'footer-positions': 'top left, bottom right, bottom right',
        'md-footer-positions': 'bottom left, top right, bottom right'
      },
      backgroundSize: {
        'footer-size': 'auto, auto, 50% 100%'
      },
      fontFamily: {
        footer: ['"Open Sans"', 'sans-serif'],
        heading: ["'Ogg Text TRIAL'", 'serif'],
        body: ['"DM Sans"', 'sans-serif']
      },
      screens: {
        xs: '20rem'
      },
      colors: {
        'orenda-purple': '#2E0086',
        'orenda-green': '#127801'
      }
    },
    container: {
      center: false,
      padding: false,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      },
    },
  },
  plugins: [fluid]
};