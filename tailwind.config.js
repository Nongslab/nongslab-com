/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#F08733',
                'primary-light': '#FFB366',
                'primary-dark': '#D4651A',
                ink: '#1A1A1A',
                body: '#4A4A4A',
                muted: '#8C8C8C',
                surface: '#FAFAF8',
                'surface-warm': '#FFF8F3',
                border: '#F0EBE6',
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
            },
            fontSize: {
                'h1': ['52px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'h2': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
                'h3': ['32px', { lineHeight: '1.2' }],
                'h4': ['24px', { lineHeight: '1.3' }],
                'h5': ['20px', { lineHeight: '1.4' }],
                'light': '18px',
                'body': '16px',
                'caption': '14px',
                'small': '12px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 7s ease-in-out 1s infinite',
                'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'gradient-shift': 'gradientShift 8s ease-in-out infinite',
                'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '33%': { transform: 'translateY(-16px) rotate(2deg)' },
                    '66%': { transform: 'translateY(8px) rotate(-1deg)' },
                },
                pulseSoft: {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '0.8' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
            },
        },
    },
    plugins: [],
}
