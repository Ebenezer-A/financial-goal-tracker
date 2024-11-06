/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			text: '#040316',
  			background: '#fbfbfe',
  			primary: '#2f27ce',
  			secondary: '#dddbff',
  			accent: '#443dff'
  		},
  		fontFamily: {
  			DMSerif: ["DM Serif Display", "serif"],
  			DMSans: ["DM Sans", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

