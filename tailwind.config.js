/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#D4AF37',
        accent: '#FF6B35',
        background: '#0f0f0f',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)',
          },
        },
        'gradient': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}
