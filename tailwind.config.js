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
        bgDark: '#0a0a0a',    // Alias of background, used by section/hero fades
        surface: '#121a19',
        primary: '#30bda5',   // Medium Aquamarine — design doc
        accent: '#1684b1',    // Liberty Blue — design doc
        highlight: '#86c440', // Lime green — the logo's "PC" lettering
        spark: '#F2A93B',     // Warm amber — sparing contrast accent, not from logo
        textMain: '#f3f4f6',
        textMuted: '#94a3a1',
      },
      fontFamily: {
        // Design doc: Sora display · DM Sans body · IBM Plex Mono labels · Fira Code code
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        code: ['"Fira Code"', '"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        sora: ['Sora', '"DM Sans"', 'ui-sans-serif', 'sans-serif'],
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