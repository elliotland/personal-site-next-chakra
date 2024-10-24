/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'inherit',
            '--tw-prose-headings': 'inherit',
            '--tw-prose-links': 'inherit',
            color: 'inherit',
            '*': {
              color: 'inherit',
              borderColor: 'inherit'
            }
          }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};