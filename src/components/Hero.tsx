import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden"
      style={{
        /* Degradê principal: azul da marca → bege/creme harmonioso */
        background: 'linear-gradient(135deg, #859ba4 0%, #a8bcc4 18%, #c8d8dc 35%, #dde8ea 50%, #ede8e0 68%, #f5ede3 82%, #faf4ec 100%)',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >

      {/* ── Camada 1: Textura com logo Virtruvia (fundo de marca) — muito sutil ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-texture-logo.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* ── Camada 2: Imagem renascentista — canto direito, desbotada ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '55%',
          backgroundImage: 'url(/hero-renaissance.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          opacity: 0.22,
          mixBlendMode: 'multiply',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Camada 3: Véu branco suave sobre o texto para legibilidade ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(250,244,236,0.55) 0%, rgba(250,244,236,0.2) 55%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Ornamento renascentista SVG — canto superior direito ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '320px',
          height: '320px',
          opacity: 0.09,
          pointerEvents: 'none',
          color: '#2c393f',
        }}
      >
        {/* Círculo de Vitrúvio — referência direta ao nome da marca */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.4"/>
        {/* Cruz áurea */}
        <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="0.5"/>
        {/* Diagonais */}
        <line x1="40" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="0.3"/>
        <line x1="160" y1="40" x2="40" y2="160" stroke="currentColor" strokeWidth="0.3"/>
        {/* Polígono inscrito — referência geométrica renascentista */}
        <polygon
          points="100,18 175,62 175,138 100,182 25,138 25,62"
          fill="none" stroke="currentColor" strokeWidth="0.6"
        />
        {/* Pontos cardinais ornamentais */}
        <circle cx="100" cy="15" r="2" fill="currentColor"/>
        <circle cx="185" cy="100" r="2" fill="currentColor"/>
        <circle cx="100" cy="185" r="2" fill="currentColor"/>
        <circle cx="15" cy="100" r="2" fill="currentColor"/>
      </svg>

      {/* ── Ornamento renascentista SVG — canto inferior esquerdo ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '-10px',
          width: '200px',
          height: '200px',
          opacity: 0.08,
          pointerEvents: 'none',
          color: '#b07345',
        }}
      >
        <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="10" y1="60" x2="110" y2="60" stroke="currentColor" strokeWidth="0.5"/>
        <polygon
          points="60,12 104,36 104,84 60,108 16,84 16,36"
          fill="none" stroke="currentColor" strokeWidth="0.6"
        />
      </svg>

      {/* ── Linha decorativa horizontal central ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, rgba(133,155,164,0.4) 0%, rgba(176,115,69,0.3) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Container de conteúdo ── */}
      <div
        className="relative mx-auto w-full max-w-conteudo px-5 sm:px-8"
        style={{
          paddingTop: '7rem',
          paddingBottom: '5rem',
          zIndex: 2,
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
              opacity: 0.5,
              filter: 'saturate(0) brightness(0.3)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '1px',
              height: '18px',
              background: 'rgba(44,57,63,0.2)',
            }}
          />
          <span
            style={{
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(44,57,63,0.55)',
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
            color: '#1a2124',
            maxWidth: '22ch',
            marginBottom: '1.5rem',
          }}
        >
          {hero.titulo}
        </h1>

        {/* Linha decorativa em argila */}
        <span
          aria-hidden="true"
          className="animate-surgir"
          style={{
            animationDelay: '120ms',
            display: 'block',
            width: '40px',
            height: '1px',
            background: 'linear-gradient(to right, #b07345, #dbc2b4)',
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
            color: 'rgba(44,57,63,0.75)',
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
              color: 'rgba(44,57,63,0.45)',
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
