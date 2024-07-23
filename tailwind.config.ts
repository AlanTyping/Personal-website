import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      slideInFromLeft: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideInFromRight: {
        '0%': { transform: 'translate(100%, 100%)' },
        '100%': { transform: 'translate(0, 0)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },
    },
    animation: {
      left: 'slideInFromLeft 200ms ease-out',
      right: 'slideInFromRight 400ms ease-out',
      fadeIn: 'fadeIn 1s ease-in-out',
      bounce: 'bounce 1s infinite',
      spin: 'spin 0.9s linear infinite',
      pulse: 'pulse 2s ease-in-out infinite',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
