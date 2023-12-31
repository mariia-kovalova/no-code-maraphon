const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ['./src/**/*.{html,njk,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      // xxl: '1600px', // (goiteens)
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // BASE FONT
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'], // class="font-montserrat"
      lato: ['Lato', 'sans-serif'],
      // gotham: ['Gotham', 'sans-serif'], // class="font-gotham" (goiteens)
      // exo: ['"Exo 2"', 'sans-serif'],
    },
    // SHADOW
    boxShadow: {
      orange: '2px 8px 29px rgba(240, 127, 46, 0.2)', // class="shadow-orange"
      turquoise: '0px 2px 14px 0px rgba(50, 190, 203, 0.30)',
    },
    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/components/agree-checkbox.svg')",
      },
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101', // class="bg-black-dark text-black-dark border-black-dark"
        },
        white: {
          DEFAULT: '#ffffff', // class="bg-white text-white border-white"
          dark: '#fafafa', // class="bg-white-dark text-white-dark border-white-dark"
        },
        green: {
          DEFAULT: '#12a682',
          100: '#edfcfc',
          200: '#d8f4f0',
          300: '#89d3c1',
          400: '#1da551',
          500: '#aee7d9',
        },
        blue: {
          DEFAULT: '#151e34',
          100: '#b2b9cb',
          200: '#afb2b2',
          300: '#5b86a1',
          400: '#4b5eb8',
        },
        purple: '#9c6fe2',
        accent: '#FF6C00', // class="bg-accent text-accent border-accent"
        primary: '#f1f1f1',
        second: '#f2f2f2',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem', // 1.25rem (goiteens)
          sm: '1.25rem', // 1.25rem (goiteens)
          md: '2rem', // 2rem (goiteens)
          xl: '2rem', // 2.5rem (goiteens)
          // xxl: '3.5rem', // (goiteens)
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
