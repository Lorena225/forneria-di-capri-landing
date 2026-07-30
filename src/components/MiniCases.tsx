import { miniCases, type MiniCase } from '../data/textos'
import { cn } from '../lib/utils'

const blocos = (caso: MiniCase) => [
  { rotulo: 'Desafio', texto: caso.desafio },
  { rotulo: 'Entregas', texto: caso.entregas },
  { rotulo: 'Foco estratégico', texto: caso.foco },
]

export function MiniCases() {
  return (
    <section className="mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24">
      <p className="rotulo-tecnico">Instituições atendidas</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
        {miniCases.map((caso, indice) => (
          <article
            key={caso.id}
            style={{ animationDelay: `${indice * 90}ms` }}
            className="flex animate-surgir flex-col overflow-hidden rounded-lg border border-linha bg-superficie shadow-card"
          >
            <span
              aria-hidden="true"
              className={cn(
                'h-1 w-full',
                indice === 0 ? 'bg-argila' : 'bg-sereno',
              )}
            />

            <div className="flex flex-1 flex-col px-7 py-8 sm:px-9 sm:py-10">
              <h3 className="font-display text-[2rem] font-normal leading-tight text-tinta sm:text-4xl">
                {caso.titulo}
              </h3>
              <p className="mt-3 font-display text-lg font-light italic leading-snug text-pedra-escura">
                {caso.subtitulo}
              </p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-grafite">
                {caso.texto}
              </p>

              <dl className="mt-8 border-t border-linha">
                {blocos(caso).map((bloco) => (
                  <div key={bloco.rotulo} className="border-b border-linha py-4">
                    <dt className="rotulo-tecnico">{bloco.rotulo}</dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-grafite">
                      {bloco.texto}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
