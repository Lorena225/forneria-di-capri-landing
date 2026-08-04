import { rodape } from '../data/textos'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        /* Degradê espelhado ao hero: bege/creme → azul da marca */
        background: 'linear-gradient(135deg, #faf4ec 0%, #f5ede3 18%, #ede8e0 35%, #dde8ea 50%, #c8d8dc 65%, #a8bcc4 82%, #859ba4 100%)',
      }}
    >
      {/* ── Textura com logo Virtruvia — muito sutil ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-texture-logo.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          mixBlendMode: 'multiply',
          pointerEvents: 'none',
        }}
      />

      {/* ── Imagem renascentista — canto esquerdo, desbotada ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '50%',
          backgroundImage: 'url(/hero-renaissance.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.18,
          mixBlendMode: 'multiply',
          maskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.85) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Véu claro sobre o lado do texto ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to left, rgba(133,155,164,0.3) 0%, rgba(250,244,236,0.4) 55%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Ornamento Círculo de Vitrúvio — canto inferior esquerdo ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '280px',
          height: '280px',
          opacity: 0.08,
          pointerEvents: 'none',
          color: '#2c393f',
        }}
      >
        <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.8"/>
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="100" cy="100" r="35" fill="none" stroke="currentColor" strokeWidth="0.4"/>
        <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="0.5"/>
        <line x1="40" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="0.3"/>
        <line x1="160" y1="40" x2="40" y2="160" stroke="currentColor" strokeWidth="0.3"/>
        <polygon
          points="100,18 175,62 175,138 100,182 25,138 25,62"
          fill="none" stroke="currentColor" strokeWidth="0.6"
        />
        <circle cx="100" cy="15" r="2" fill="currentColor"/>
        <circle cx="185" cy="100" r="2" fill="currentColor"/>
        <circle cx="100" cy="185" r="2" fill="currentColor"/>
        <circle cx="15" cy="100" r="2" fill="currentColor"/>
      </svg>

      {/* ── Ornamento hexagonal — canto superior direito ── */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
          width: '180px',
          height: '180px',
          opacity: 0.07,
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

      {/* ── Linha superior ── */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, rgba(176,115,69,0.3) 0%, rgba(133,155,164,0.4) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Conteúdo ── */}
      <div
        className="relative mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24"
        style={{ zIndex: 2 }}
      >
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <img
              src="/logo-virtruvia.png"
              alt="VirtruvIA"
              style={{
                height: '36px',
                width: 'auto',
                opacity: 0.55,
                filter: 'saturate(0) brightness(0.2)',
              }}
              width={179}
              height={64}
            />
            <p
              style={{
                marginTop: '2.5rem',
                maxWidth: '54ch',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'rgba(26,33,36,0.8)',
              }}
            >
              {rodape.institucional}
            </p>
            <p
              style={{
                marginTop: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                fontFamily: 'var(--font-display, Georgia, serif)',
                fontSize: '1.1875rem',
                fontWeight: 300,
                fontStyle: 'italic',
                color: '#b07345',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'block',
                  width: '40px',
                  height: '1px',
                  flexShrink: 0,
                  background: 'linear-gradient(to right, #b07345, #dbc2b4)',
                }}
              />
              {rodape.linhaFinal}
            </p>
          </div>

          <div className="lg:text-right">
            <p
              style={{
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(133,155,164,0.9)',
              }}
            >
              Cliente atendido
            </p>

            <div style={{ marginTop: '1.5rem' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display, Georgia, serif)',
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'rgba(26,33,36,0.85)',
                }}
              >
                Forneria Di Capri
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: '0.375rem',
                  fontSize: '0.8125rem',
                  color: 'rgba(26,33,36,0.5)',
                }}
              >
                Casa italiana contemporânea de Brasília
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: '0.25rem',
                  fontSize: '0.8125rem',
                  color: 'rgba(26,33,36,0.4)',
                }}
              >
                Park Sul · Asa Sul
              </span>
            </div>

            {/* Escopo da consultoria */}
            <div style={{ marginTop: '2rem' }}>
              <p
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(133,155,164,0.9)',
                }}
              >
                Escopo
              </p>
              <ul style={{ marginTop: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                {['Posicionamento de marca', 'Gestão de mídias sociais', 'Calendários editoriais', 'Estratégia de conteúdo'].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'rgba(26,33,36,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: '#b07345',
                        flexShrink: 0,
                        order: 1,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`mailto:${rodape.contato}`}
              style={{
                display: 'inline-block',
                marginTop: '2.5rem',
                fontSize: '0.9375rem',
                color: '#b07345',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              {rodape.contato}
            </a>
          </div>
        </div>

        <p
          style={{
            marginTop: '4rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(44,57,63,0.15)',
            fontSize: '0.8125rem',
            color: 'rgba(44,57,63,0.45)',
          }}
        >
          © {ano} VirtruvIA. Materiais de uso interno — Forneria Di Capri.
        </p>
      </div>
    </footer>
  )
}
