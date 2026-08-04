import { miniCases, tituloInstituicoes, type MiniCase } from '../data/textos'

const blocos = (caso: MiniCase) => [
  { rotulo: 'Desafio', texto: caso.desafio },
  { rotulo: 'Entregas', texto: caso.entregas },
  { rotulo: 'Foco estratégico', texto: caso.foco },
]

export function MiniCases() {
  return (
    <section
      id="cliente"
      className="mx-auto max-w-conteudo scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <p className="rotulo-tecnico">Cliente atendido</p>
      <h2 className="mt-4 max-w-[22ch] font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
        {tituloInstituicoes}
      </h2>

      <div className="mt-12 grid gap-8">
        {miniCases.map((caso) => (
          <article
            key={caso.id}
            className="flex animate-surgir flex-col overflow-hidden rounded-2xl border border-linha bg-superficie shadow-card"
          >
            <span
              aria-hidden="true"
              className="h-1 w-full bg-argila"
            />

            {/* Identidade do cliente */}
            <div className="flex flex-wrap items-center gap-5 border-b border-linha bg-argila/[0.06] px-7 py-7 sm:px-9">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #b07345 0%, #8a5732 100%)',
                  flexShrink: 0,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '26px', height: '26px', color: 'white' }}
                >
                  {/* Ícone de forno/pizza */}
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                    fill="currentColor"
                    opacity="0.3"
                  />
                  <path
                    d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-[1.875rem] font-normal leading-tight text-tinta">
                  {caso.titulo}
                </h3>
                <p className="mt-1 text-[0.8125rem] text-pedra-escura">
                  Casa italiana contemporânea · Park Sul e Asa Sul · Brasília
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col px-7 py-8 sm:px-9 sm:py-10">
              <p className="font-display text-xl font-light italic leading-snug text-argila">
                {caso.subtitulo}
              </p>

              <p className="mt-6 text-[0.9375rem] leading-relaxed text-grafite">
                {caso.texto}
              </p>

              {/* Desafio, entregas e foco em cards próprios */}
              <div className="mt-9 grid gap-4 sm:grid-cols-3">
                {blocos(caso).map((bloco) => (
                  <div
                    key={bloco.rotulo}
                    className="rounded-xl border border-linha bg-papel/70 px-5 py-5 transition-colors duration-300 hover:border-argila/50 hover:bg-argila/[0.04]"
                  >
                    <p className="flex items-center gap-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-argila">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-argila"
                      />
                      {bloco.rotulo}
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-grafite">
                      {bloco.texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
