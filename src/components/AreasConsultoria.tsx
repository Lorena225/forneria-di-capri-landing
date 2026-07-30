import { ArrowRight } from 'lucide-react'
import { areas } from '../data/documentos'
import { secaoAreas } from '../data/textos'
import { cn } from '../lib/utils'

interface Props {
  quantidadePorArea: Map<string, number>
}

const acentos = {
  sereno: {
    barra: 'bg-sereno',
    numero: 'text-sereno',
    icone: 'text-sereno-forte',
    marcador: 'bg-sereno',
    borda: 'hover:border-sereno/60',
    acao: 'text-sereno-forte',
  },
  argila: {
    barra: 'bg-argila',
    numero: 'text-argila',
    icone: 'text-argila-forte',
    marcador: 'bg-argila',
    borda: 'hover:border-argila/60',
    acao: 'text-argila-forte',
  },
  pedra: {
    barra: 'bg-pedra',
    numero: 'text-pedra',
    icone: 'text-pedra-escura',
    marcador: 'bg-pedra',
    borda: 'hover:border-pedra/60',
    acao: 'text-pedra-escura',
  },
} as const

export function AreasConsultoria({ quantidadePorArea }: Props) {
  return (
    <section id="areas" className="border-y border-linha bg-areia-clara/40">
      <div className="mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="rotulo-tecnico">Organização dos conteúdos</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
              {secaoAreas.titulo}
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-grafite">
              {secaoAreas.subtitulo}
            </p>
          </div>
          <p className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-grafite lg:self-end lg:pb-1">
            {secaoAreas.introducao}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {areas.map((area, indice) => {
            const Icone = area.icone
            const cor = acentos[area.acento]
            const quantidade = quantidadePorArea.get(area.id) ?? 0

            return (
              <article
                key={area.id}
                style={{ animationDelay: `${indice * 90}ms` }}
                className={cn(
                  'group flex animate-surgir flex-col overflow-hidden rounded-lg border border-linha bg-superficie transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-alto',
                  cor.borda,
                )}
              >
                <span aria-hidden="true" className={cn('h-1 w-full', cor.barra)} />

                <div className="flex flex-1 flex-col px-7 py-8 sm:px-8">
                  <div className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className={cn('font-display text-3xl italic leading-none', cor.numero)}
                    >
                      {area.ordem}
                    </span>
                    <Icone
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className={cn('h-6 w-6', cor.icone)}
                    />
                  </div>

                  <h3 className="mt-6 font-display text-[1.75rem] font-normal leading-tight text-tinta">
                    {area.nome}
                  </h3>

                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-grafite">
                    {area.descricao}
                  </p>

                  <ul className="mt-7 space-y-2.5 border-t border-linha pt-6">
                    {area.itens.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.875rem] leading-snug text-grafite"
                      >
                        <span
                          aria-hidden="true"
                          className={cn('mt-[0.4rem] h-1 w-1 shrink-0 rounded-full', cor.marcador)}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`#area-${area.id}`}
                    className={cn(
                      'mt-8 inline-flex items-center gap-2 self-start pt-6 text-sm font-medium',
                      'w-full justify-between border-t border-linha transition-colors duration-200',
                      cor.acao,
                    )}
                  >
                    <span>
                      Ver materiais
                      <span className="sr-only"> de {area.nome}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-[0.8125rem] text-pedra-escura">
                      {quantidade > 0
                        ? `${quantidade} ${quantidade === 1 ? 'material' : 'materiais'}`
                        : 'em desenvolvimento'}
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
