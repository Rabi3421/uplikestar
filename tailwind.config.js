/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) * 0.5)',
        lg: 'calc(var(--radius) * 1.5)',
        xl: 'calc(var(--radius) * 2)',
        '2xl': 'calc(var(--radius) * 3)',
        '3xl': 'calc(var(--radius) * 4)',
        '4xl': '60px',
        '5xl': '80px',
        '6xl': '100px',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        display: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0A0A2E 0%, #1B1464 35%, #2D1B69 65%, #0D0D1A 100%)',
        'gradient-primary': 'linear-gradient(135deg, #1B1464 0%, #6B21A8 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00D4FF 0%, #8B5CF6 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(27,20,100,0.08) 0%, rgba(107,33,168,0.05) 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 212, 255, 0.4)',
        'glow-primary': '0 0 30px rgba(27, 20, 100, 0.3)',
        'card-hover': '0 20px 60px rgba(27, 20, 100, 0.15)',
        'premium': '0 32px 80px rgba(27, 20, 100, 0.2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};