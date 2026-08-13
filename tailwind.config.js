/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#121a19',
        primary: '#2FBDA5',   // Teal — sampled from the logo ribbon
        accent: '#1B8FB0',    // Deep cyan-blue — sampled from the logo ribbon's shadow tone
        highlight: '#86C440', // Lime green — sampled from the logo's "PC" lettering
        spark: '#F2A93B',     // Warm amber — sparing contrast accent, not from logo
        textMain: '#f3f4f6',
        textMuted: '#94a3a1',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        sora: ['Sora', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'blink': 'blink 1s step-end infinite',
        'drift-a': 'driftA 22s ease-in-out infinite',
        'drift-b': 'driftB 26s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        driftA: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, 6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 3%) scale(0.96)' },
        },
        driftB: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '40%': { transform: 'translate(-5%, -4%) scale(1.05)' },
          '75%': { transform: 'translate(3%, -5%) scale(0.94)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}