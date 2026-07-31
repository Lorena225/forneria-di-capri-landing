/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* paleta oficial VirtruvIA */
        profundo: 'rgb(var(--vtr-profundo) / <alpha-value>)',
        'profundo-claro': 'rgb(var(--vtr-profundo-claro) / <alpha-value>)',
        argila: 'rgb(var(--vtr-argila) / <alpha-value>)',
        'argila-forte': 'rgb(var(--vtr-argila-forte) / <alpha-value>)',
        areia: 'rgb(var(--vtr-areia) / <alpha-value>)',
        pedra: 'rgb(var(--vtr-pedra) / <alpha-value>)',
        'pedra-escura': 'rgb(var(--vtr-pedra-escura) / <alpha-value>)',
        sereno: 'rgb(var(--vtr-sereno) / <alpha-value>)',
        'sereno-forte': 'rgb(var(--vtr-sereno-forte) / <alpha-value>)',
        'sereno-claro': 'rgb(var(--vtr-sereno-claro) / <alpha-value>)',
        /* neutros de apoio */
        papel: 'rgb(var(--vtr-papel) / <alpha-value>)',
        superficie: 'rgb(var(--vtr-superficie) / <alpha-value>)',
        tinta: 'rgb(var(--vtr-tinta) / <alpha-value>)',
        grafite: 'rgb(var(--vtr-grafite) / <alpha-value>)',
        linha: 'rgb(var(--vtr-linha) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: { conteudo: '78rem' },
      boxShadow: {
        card: '0 1px 2px rgba(43, 38, 34, 0.04), 0 12px 32px -20px rgba(43, 38, 34, 0.28)',
        alto: '0 2px 4px rgba(43, 38, 34, 0.05), 0 24px 48px -28px rgba(43, 38, 34, 0.35)',
        modal: '0 24px 80px -24px rgba(43, 38, 34, 0.45)',
      },
      keyframes: {
        surgir: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        aparecer: { from: { opacity: '0' }, to: { opacity: '1' } },
        modalEntrada: {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.985)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        surgir: 'surgir 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        aparecer: 'aparecer 0.3s ease-out both',
        'modal-entrada': 'modalEntrada 0.35s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
