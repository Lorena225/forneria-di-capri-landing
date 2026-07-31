import { ArrowRight, MousePointerClick } from 'lucide-react'
import type { AreaId } from '../data/documentos'
import { areas } from '../data/documentos'
import type { ReactNode } from 'react'
import { secaoAreas } from '../data/textos'
import { cn } from '../lib/utils'

interface Props {
  areaSelecionada: AreaId | null
  aoSelecionar: (id: AreaId) => void
  quantidadePorArea: Map<string, number>
  /** Painel dinâmico exibido abaixo dos cards quando há área selecionada. */
  painel?: ReactNode
}

/* Paleta por acento — cores sólidas para os CTAs */
const acentos = {
  sereno: {
    barra: 'bg-sereno',
    numero: 'text-sereno-forte',
    icone: 'text-sereno-forte',
    marcador: 'bg-sereno',
    anel: 'ring-sereno',
    /* CTA sólido */
    ctaBg: '#5f727b',       /* sereno-forte */
    ctaBgHover: '#4a5d65',
    ctaBgAtivo: '#3a4b52',
    /* Gradiente de fundo sutil no card */
    gradiente: 'linear-gradient(160deg, rgba(133,155,164,0.07) 0%, rgba(133,155,164,0.0) 60%)',
  },
  argila: {
    barra: 'bg-argila',
    numero: 'text-argila-forte',
    icone: 'text-argila-forte',
    marcador: 'bg-argila',
    anel: 'ring-argila',
    ctaBg: '#b07345',       /* argila */
    ctaBgHover: '#8a5732',
    ctaBgAtivo: '#6e4226',
    gradiente: 'linear-gradient(160deg, rgba(176,115,69,0.08) 0%, rgba(176,115,69,0.0) 60%)',
  },
  pedra: {
    barra: 'bg-pedra',
    numero: 'text-pedra-escura',
    icone: 'text-pedra-escura',
    marcador: 'bg-pedra',
    anel: 'ring-pedra',
    ctaBg: '#6e675f',       /* pedra-escura */
    ctaBgHover: '#58524b',
    ctaBgAtivo: '#44403a',
    gradiente: 'linear-gradient(160deg, rgba(139,132,125,0.08) 0%, rgba(139,132,125,0.0) 60%)',
  },
} as const

export function AreasConsultoria({
  areaSelecionada,
  aoSelecionar,
  quantidadePorArea,
  painel,
}: Props) {
  return (
    <section id="areas" className="border-t border-linha bg-superficie">
      <div className="mx-auto max-w-conteudo px-5 py-24 sm:px-8 sm:py-28">
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

        {/* Chamada de ação — instrução explícita */}
        <p className="mt-14 flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-pedra-escura">
          <MousePointerClick aria-hidden="true" className="h-4 w-4 text-argila" strokeWidth={1.5} />
          {secaoAreas.chamada}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-5 lg:gap-7">
          {areas.map((area, indice) => {
            const Icone = area.icone
            const cor = acentos[area.acento]
            const quantidade = quantidadePorArea.get(area.id) ?? 0
            const ativa = areaSelecionada === area.id

            return (
              <button
                key={area.id}
                type="button"
                aria-pressed={ativa}
                aria-controls="painel-da-area"
                onClick={() => aoSelecionar(area.id)}
                style={{
                  animationDelay: `${indice * 90}ms`,
                  background: ativa
                    ? cor.gradiente.replace('0.07', '0.14').replace('0.08', '0.14')
                    : cor.gradiente,
                  cursor: 'pointer',
                }}
                className={cn(
                  'group flex animate-surgir flex-col overflow-hidden rounded-2xl border bg-superficie text-left',
                  'transition-all duration-300 hover:-translate-y-1.5 hover:shadow-alto',
                  ativa
                    ? cn('border-transparent shadow-alto ring-2', cor.anel)
                    : 'border-linha hover:border-transparent',
                )}
              >
                {/* Barra de cor no topo — mais espessa */}
                <span
                  aria-hidden="true"
                  className={cn('h-1.5 w-full transition-all duration-300', cor.barra)}
                  style={{ opacity: ativa ? 1 : 0.7 }}
                />

                <span className="flex flex-1 flex-col px-7 py-8 sm:px-8">
                  {/* Número e ícone */}
                  <span className="flex items-center justify-between">
                    <span
                      aria-hidden="true"
                      className={cn('font-display text-3xl italic leading-none', cor.numero)}
                    >
                      {area.ordem}
                    </span>
                    <Icone
                      aria-hidden="true"
                      strokeWidth={1.25}
                      className={cn('h-6 w-6 transition-transform duration-300 group-hover:scale-110', cor.icone)}
                    />
                  </span>

                  {/* Nome da área */}
                  <span className="mt-6 block font-display text-[1.75rem] font-normal leading-tight text-tinta">
                    {area.nome}
                  </span>

                  {/* Descrição */}
                  <span className="mt-4 block text-[0.9375rem] leading-relaxed text-grafite">
                    {area.descricao}
                  </span>

                  {/* Itens da área */}
                  <span className="mt-7 block space-y-2.5 border-t border-linha pt-6">
                    {area.itens.map((item) => (
                      <span
                        key={item}
                        className="flex items-start gap-3 text-[0.875rem] leading-snug text-grafite"
                      >
                        <span
                          aria-hidden="true"
                          className={cn('mt-[0.4rem] h-1 w-1 shrink-0 rounded-full', cor.marcador)}
                        />
                        {item}
                      </span>
                    ))}
                  </span>

                  {/* CTA — botão sólido com cor forte */}
                  <span className="mt-8 block">
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1.125rem',
                        borderRadius: '0.625rem',
                        background: ativa ? cor.ctaBgAtivo : cor.ctaBg,
                        color: '#fff',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        letterSpacing: '0.01em',
                        transition: 'background 0.25s, transform 0.2s',
                      }}
                      className="group-hover:brightness-90"
                    >
                      <span>
                        {ativa ? 'Materiais abertos abaixo' : 'Ver os materiais'}
                        <span className="sr-only"> de {area.nome}</span>
                      </span>
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                          fontSize: '0.8125rem',
                          opacity: 0.85,
                        }}
                      >
                        {quantidade > 0
                          ? `${quantidade} ${quantidade === 1 ? 'material' : 'materiais'}`
                          : 'em preparação'}
                        <ArrowRight
                          aria-hidden="true"
                          strokeWidth={2}
                          style={{
                            height: '0.9rem',
                            width: '0.9rem',
                            transition: 'transform 0.3s',
                          }}
                          className="group-hover:translate-x-1"
                        />
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        {painel}
      </div>
    </section>
  )
}
