/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-background-color': 'var(--primary-background-color)',
        'custom-black': 'var(--custom-black)',
        'text-color': 'var(--text-color)',
        'custom-yellow': 'var(--custom-yellow)',
        'custom-green': 'var(--custom-green)',
        'custom-peach': 'var(--custom-peach)',
        'custom-blue': 'var(--custom-blue)',
        'custom-purple': 'var(--custom-purple)',
        'custom-dark-secondary': 'var(--custom-dark-secondary)',
        'custom-dark-primary': 'var(--custom-dark-primary)',
        'custom-gray': 'var(--custom-gray)',
      },
    },
  },
  plugins: [],
}
