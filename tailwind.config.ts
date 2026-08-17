import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF6B00",
          orangeDark: "#E05E00",
          orangeLight: "#FFF0E6",
          orangeGlow: "rgba(255, 107, 0, 0.15)",
        },
        slate: {
          950: "#0B0F17",
        }
      },
      borderRadius: {
        '24': '24px',
        '30': '30px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 40px 0 rgba(255, 107, 0, 0.12)',
        'orange-glow': '0 0 50px rgba(255, 107, 0, 0.35)',
        'soft-ambient': '0 20px 50px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'spin-reverse-slow': 'spin-reverse 35s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
