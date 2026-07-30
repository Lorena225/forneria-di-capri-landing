/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        papel: 'var(--vtr-papel)',
        superficie: 'var(--vtr-superficie)',
        tinta: 'var(--vtr-tinta)',
        grafite: 'var(--vtr-grafite)',
        neutro: 'var(--vtr-neutro)',
        linha: 'var(--vtr-linha)',
        destaque: 'var(--vtr-destaque)',
        'destaque-forte': 'var(--vtr-destaque-forte)',
        'destaque-suave': 'var(--vtr-destaque-suave)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        conteudo: '76rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20, 19, 15, 0.03), 0 8px 24px -16px rgba(20, 19, 15, 0.18)',
        modal: '0 24px 80px -24px rgba(20, 19, 15, 0.35)',
      },
      keyframes: {
        surgir: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        aparecer: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        modalEntrada: {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.985)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        surgir: 'surgir 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        aparecer: 'aparecer 0.3s ease-out both',
        'modal-entrada': 'modalEntrada 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
