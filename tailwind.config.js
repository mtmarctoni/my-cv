/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryLight: 'var(--color-primary-light)',
        primaryDark: 'var(--color-primary-dark)',
        primaryHover: 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        secondaryLight: 'var(--color-secondary-light)',
        secondaryDark: 'var(--color-secondary-dark)',
        secondaryHover: 'var(--color-secondary-hover)',
        background: 'var(--color-background)',
        backgroundAlt: 'var(--color-background-alt)',
        backgroundAltHover: 'var(--color-background-alt-hover)',
        backgroundAlt2: 'var(--color-background-alt-2)',
        text: 'var(--color-text)',
        textLight: 'var(--color-text-light)',
        accent1: 'var(--color-accent-1)',
        accent2: 'var(--color-accent-2)',
        accent3: 'var(--color-accent-3)',
      },
    },
  },
  plugins: [

  ],
}

