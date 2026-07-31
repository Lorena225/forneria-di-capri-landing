import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(145deg, #2c393f 0%, #3a4b52 40%, #455f6b 65%, #2e4450 85%, #2c393f 100%)',
        minHeight: '100vh',
      }}
    >
      {/* ── Halo azul-rosado superior direito ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(133,155,164,0.42) 0%, rgba(176,115,69,0.15) 45%, transparent 68%)',
          filter: 'blur(56px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Halo quente inferior esquerdo ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-100px',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(219,194,180,0.2) 0%, rgba(176,115,69,0.1) 50%, transparent 70%)',
          filter: 'blur(64px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Textura geométrica sutil ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.022'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
        }}
      />

      {/* ── Linha inferior discreta ── */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
      />

      {/* ── Container principal ── */}
      <div
        className="relative mx-auto max-w-conteudo px-5 sm:px-8 hero-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          alignItems: 'center',
          minHeight: '100vh',
          paddingTop: '5rem',
          paddingBottom: '4rem',
          gap: '3rem',
        }}
      >
        {/* ── Coluna de texto ── */}
        <div className="hero-text-col" style={{ zIndex: 2 }}>
          {/* Linha decorativa */}
          <span
            aria-hidden="true"
            className="block h-px w-12 bg-areia animate-surgir"
            style={{ marginBottom: '2rem' }}
          />

          {/* Eyebrow */}
          <p
            className="animate-surgir"
            style={{
              animationDelay: '50ms',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(219,194,180,0.8)',
              marginBottom: '1.25rem',
            }}
          >
            VirtruvIA — Consultoria Estratégica
          </p>

          {/* Headline */}
          <h1
            className="font-display animate-surgir"
            style={{
              animationDelay: '100ms',
              fontSize: 'clamp(2.25rem, 4.5vw, 4.25rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              color: '#ffffff',
              maxWidth: '18ch',
              marginBottom: '1.75rem',
            }}
          >
            {hero.titulo}
          </h1>

          {/* Subtítulo */}
          <p
            className="animate-surgir"
            style={{
              animationDelay: '200ms',
              fontSize: 'clamp(0.9375rem, 1.4vw, 1.125rem)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '50ch',
              marginBottom: '2.75rem',
            }}
          >
            {hero.subtitulo}
          </p>

          {/* CTA */}
          <div
            className="animate-surgir"
            style={{
              animationDelay: '300ms',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <a href="#areas" className="botao-claro">
              Conhecer as áreas
              <ArrowDown aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
            </a>
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              Ineprotec
              <span aria-hidden="true" style={{ margin: '0 0.5rem' }}>·</span>
              Matrícula EAD
            </p>
          </div>
        </div>

        {/* ── Coluna visual: busto escultórico ── */}
        <div
          className="hero-visual-col animate-surgir"
          style={{
            animationDelay: '120ms',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Halo de luz por trás do busto */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '0%',
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse at 55% 40%, rgba(133,155,164,0.5) 0%, rgba(219,194,180,0.3) 35%, transparent 65%)',
              filter: 'blur(44px)',
              zIndex: 0,
            }}
          />

          <img
            src="/hero-bust.png"
            alt="Escultura clássica — símbolo da consultoria VirtruvIA"
            className="hero-bust-img"
            style={{
              position: 'relative',
              zIndex: 1,
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              filter:
                'drop-shadow(0 40px 80px rgba(0,0,0,0.5)) drop-shadow(0 8px 32px rgba(0,0,0,0.35))',
            }}
          />
        </div>
      </div>

      {/* ── CSS responsivo ── */}
      <style>{`
        /* Desktop: duas colunas lado a lado */
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
            align-items: center !important;
            padding-top: 4.5rem !important;
            padding-bottom: 2rem !important;
            min-height: 100vh !important;
          }
          .hero-text-col {
            padding-bottom: 2rem;
          }
          .hero-visual-col {
            justify-content: center !important;
            align-items: center !important;
          }
          .hero-bust-img {
            max-width: 100% !important;
            max-height: 75vh !important;
            width: auto !important;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .hero-visual-col {
            order: -1;
          }
          .hero-bust-img {
            max-width: 260px !important;
            max-height: 300px !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .hero-visual-col {
            order: -1;
          }
          .hero-bust-img {
            max-width: 180px !important;
            max-height: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}
