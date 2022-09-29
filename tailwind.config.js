/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1be51b",
        
"secondary": "#dd3999",
        
"accent": "#dbc9ff",
        
"neutral": "#241B2D",
        
"base-100": "#FFFFFF",
        
"info": "#71D4EF",
        
"success": "#4AE3B2",
        
"warning": "#D27A0F",
        
"error": "#DF4730",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
