const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '576px',
          md: '768px',
          'lg-sm': '992px', // 👈 Custom breakpoint
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },


      },
    },
  },
  plugins: [nextui()],
};
