import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      style={{
        background: '#f7f9fa',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* ── Halo azul — canto superior direito, muito sutil ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-160px',
          right: '-120px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(133,155,164,0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Halo rose/areia — canto inferior esquerdo, muito sutil ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-140px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(219,194,180,0.22) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Linha inferior ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{ background: 'rgb(var(--vtr-linha))' }}
      />

      {/* ── Container ── */}
      <div
        className="relative mx-auto w-full max-w-conteudo px-5 sm:px-8"
        style={{
          paddingTop: '7rem',
          paddingBottom: '5rem',
        }}
      >
        {/* Eyebrow com logo */}
        <div
          className="animate-surgir"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <img
            src="/logo-virtruvia.png"
            alt="VirtruvIA"
            style={{
              height: '22px',
              width: 'auto',
              opacity: 0.45,
              filter: 'saturate(0)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '1px',
              height: '18px',
              background: 'rgb(var(--vtr-linha))',
            }}
          />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgb(var(--vtr-pedra))',
            }}
          >
            Consultoria Estratégica
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display animate-surgir"
          style={{
            animationDelay: '80ms',
            fontSize: 'clamp(2rem, 4vw, 3.75rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'rgb(var(--vtr-tinta))',
            maxWidth: '22ch',
            marginBottom: '1.5rem',
          }}
        >
          {hero.titulo}
        </h1>

        {/* Linha decorativa */}
        <span
          aria-hidden="true"
          className="animate-surgir"
          style={{
            animationDelay: '120ms',
            display: 'block',
            width: '40px',
            height: '1px',
            background: 'rgb(var(--vtr-areia))',
            marginBottom: '1.5rem',
          }}
        />

        {/* Subtítulo */}
        <p
          className="animate-surgir"
          style={{
            animationDelay: '160ms',
            fontSize: 'clamp(0.9375rem, 1.3vw, 1.0625rem)',
            lineHeight: 1.8,
            color: 'rgb(var(--vtr-grafite))',
            maxWidth: '56ch',
            marginBottom: '3rem',
          }}
        >
          {hero.subtitulo}
        </p>

        {/* CTA + instituições */}
        <div
          className="animate-surgir"
          style={{
            animationDelay: '220ms',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <a href="#areas" className="botao-principal">
            Conhecer as áreas
            <ArrowDown aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <p
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgb(var(--vtr-pedra))',
            }}
          >
            Ineprotec
            <span aria-hidden="true" style={{ margin: '0 0.5rem', opacity: 0.5 }}>·</span>
            Matrícula EAD
          </p>
        </div>
      </div>
    </section>
  )
}
