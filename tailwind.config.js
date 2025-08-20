/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        foreground: '#f0f0f5',
        primary: '#3b82f6',
        'primary-foreground': '#ffffff',
        accent: '#60a5fa',
        card: '#1a1a2e',
        'card-foreground': '#f0f0f5',
      },
    },
  },
  plugins: [],
}