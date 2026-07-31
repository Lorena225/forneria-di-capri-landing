import { ArrowRight, MousePointerClick } from 'lucide-react'
import { useState } from 'react'
import type { AreaId } from '../data/documentos'
import { areas } from '../data/documentos'
import type { ReactNode } from 'react'
import { secaoAreas } from '../data/textos'
import { cn } from '../lib/utils'

interface Props {
  areaSelecionada: AreaId | null
  aoSelecionar: (id: AreaId) => void
  quantidadePorArea: Map<string, number>
  painel?: ReactNode
}

/* Paleta completa por acento */
const acentos = {
  sereno: {
    barra: 'bg-sereno',
    numero: 'text-sereno-forte',
    icone: 'text-sereno-forte',
    marcador: 'bg-sereno',
    anel: 'ring-sereno',
    /* Cores brutas para uso inline */
    rgb: '133,155,164',
    ctaBg: '#5f727b',
    ctaBgAtivo: '#3a4b52',
    /* Fundo hover — mais saturado e visível */
    hoverBg: 'linear-gradient(160deg, rgba(133,155,164,0.22) 0%, rgba(133,155,164,0.10) 100%)',
    hoverBorder: '#859ba4',
    /* Fundo padrão sutil */
    gradiente: 'linear-gradient(160deg, rgba(133,155,164,0.07) 0%, rgba(133,155,164,0.0) 60%)',
  },
  argila: {
    barra: 'bg-argila',
    numero: 'text-argila-forte',
    icone: 'text-argila-forte',
    marcador: 'bg-argila',
    anel: 'ring-argila',
    rgb: '176,115,69',
    ctaBg: '#b07345',
    ctaBgAtivo: '#6e4226',
    hoverBg: 'linear-gradient(160deg, rgba(176,115,69,0.20) 0%, rgba(176,115,69,0.08) 100%)',
    hoverBorder: '#b07345',
    gradiente: 'linear-gradient(160deg, rgba(176,115,69,0.08) 0%, rgba(176,115,69,0.0) 60%)',
  },
  pedra: {
    barra: 'bg-pedra',
    numero: 'text-pedra-escura',
    icone: 'text-pedra-escura',
    marcador: 'bg-pedra',
    anel: 'ring-pedra',
    rgb: '139,132,125',
    ctaBg: '#6e675f',
    ctaBgAtivo: '#44403a',
    hoverBg: 'linear-gradient(160deg, rgba(139,132,125,0.22) 0%, rgba(139,132,125,0.10) 100%)',
    hoverBorder: '#8b847d',
    gradiente: 'linear-gradient(160deg, rgba(139,132,125,0.08) 0%, rgba(139,132,125,0.0) 60%)',
  },
} as const

export function AreasConsultoria({
  areaSelecionada,
  aoSelecionar,
  quantidadePorArea,
  painel,
}: Props) {
  const [hoverId, setHoverId] = useState<string | null>(null)

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

        {/* Instrução de interação */}
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
            const emHover = hoverId === area.id

            /* Fundo dinâmico: ativo > hover > padrão */
            const bgCard = ativa
              ? cor.hoverBg
              : emHover
                ? cor.hoverBg
                : cor.gradiente

            /* Borda dinâmica */
            const borderCard = ativa || emHover ? cor.hoverBorder : 'transparent'
            const boxShadow = emHover || ativa
              ? `0 8px 32px rgba(${cor.rgb}, 0.25), 0 2px 8px rgba(${cor.rgb}, 0.15)`
              : 'none'

            return (
              <button
                key={area.id}
                type="button"
                aria-pressed={ativa}
                aria-controls="painel-da-area"
                onClick={() => aoSelecionar(area.id)}
                onMouseEnter={() => setHoverId(area.id)}
                onMouseLeave={() => setHoverId(null)}
                style={{
                  animationDelay: `${indice * 90}ms`,
                  background: bgCard,
                  border: `2px solid ${borderCard}`,
                  boxShadow,
                  cursor: 'pointer',
                  transform: emHover || ativa ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                className={cn(
                  'group flex animate-surgir flex-col overflow-hidden rounded-2xl bg-superficie text-left',
                  ativa ? cn('ring-2', cor.anel) : '',
                )}
              >
                {/* Barra de cor no topo */}
                <span
                  aria-hidden="true"
                  className={cn('h-1.5 w-full', cor.barra)}
                  style={{
                    opacity: ativa || emHover ? 1 : 0.65,
                    transition: 'opacity 0.28s',
                  }}
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
                      style={{
                        transform: emHover ? 'scale(1.15)' : 'scale(1)',
                        transition: 'transform 0.28s',
                      }}
                      className={cn('h-6 w-6', cor.icone)}
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

                  {/* CTA sólido */}
                  <span className="mt-8 block">
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1.125rem',
                        borderRadius: '0.625rem',
                        background: ativa ? cor.ctaBgAtivo : emHover ? cor.ctaBgAtivo : cor.ctaBg,
                        color: '#fff',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        letterSpacing: '0.01em',
                        transition: 'background 0.25s',
                      }}
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
                          opacity: 0.9,
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
                            transform: emHover ? 'translateX(4px)' : 'translateX(0)',
                            transition: 'transform 0.28s',
                          }}
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
