import { miniCases, tituloInstituicoes, type MiniCase } from '../data/textos'
import type { EscolaId } from '../data/documentos'
import { buscarEscola } from '../data/documentos'
import { LogoEscola } from './LogoEscola'
import { cn } from '../lib/utils'

const blocos = (caso: MiniCase) => [
  { rotulo: 'Desafio', texto: caso.desafio },
  { rotulo: 'Entregas', texto: caso.entregas },
  { rotulo: 'Foco estratégico', texto: caso.foco },
]

export function MiniCases() {
  return (
    <section
      id="instituicoes"
      className="mx-auto max-w-conteudo scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28"
    >
      <p className="rotulo-tecnico">Instituições atendidas</p>
      <h2 className="mt-4 max-w-[22ch] font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
        {tituloInstituicoes}
      </h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
        {miniCases.map((caso, indice) => {
          const escola = buscarEscola(caso.id as EscolaId)

          return (
            <article
              key={caso.id}
              style={{ animationDelay: `${indice * 90}ms` }}
              className="flex animate-surgir flex-col overflow-hidden rounded-2xl border border-linha bg-superficie shadow-card"
            >
              <span
                aria-hidden="true"
                className={cn('h-1 w-full', indice === 0 ? 'bg-sereno' : 'bg-argila')}
              />

              {/* Identidade da instituição */}
              <div className="flex flex-wrap items-center gap-5 border-b border-linha bg-sereno-claro/30 px-7 py-7 sm:px-9">
                <LogoEscola escola={caso.id as EscolaId} tamanho="grande" />
                <div>
                  <h3 className="font-display text-[1.875rem] font-normal leading-tight text-tinta">
                    {caso.titulo}
                  </h3>
                  <p className="mt-1 text-[0.8125rem] text-pedra-escura">
                    {escola.descricao}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-7 py-8 sm:px-9 sm:py-10">
                <p className="font-display text-xl font-light italic leading-snug text-sereno-forte">
                  {caso.subtitulo}
                </p>

                <p className="mt-6 text-[0.9375rem] leading-relaxed text-grafite">
                  {caso.texto}
                </p>

                {/* Desafio, entregas e foco em cards próprios */}
                <div className="mt-9 grid gap-4">
                  {blocos(caso).map((bloco) => (
                    <div
                      key={bloco.rotulo}
                      className="rounded-xl border border-linha bg-papel/70 px-5 py-5 transition-colors duration-300 hover:border-sereno/50 hover:bg-sereno-claro/25"
                    >
                      <p className="flex items-center gap-2.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-sereno-forte">
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
          )
        })}
      </div>
    </section>
  )
}
