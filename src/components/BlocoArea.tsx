import { ArrowRight } from 'lucide-react'
import type { Area } from '../data/documentos'
import { cn } from '../lib/utils'

interface Props {
  area: Area
  quantidade: number
  aoAbrir: (area: Area) => void
  indice: number
  /** Texto exibido quando a frente não tem materiais para exibir. */
  mensagemVazia: string
}

const LIMITE_CATEGORIAS = 5

export function BlocoArea({ area, quantidade, aoAbrir, indice, mensagemVazia }: Props) {
  const Icone = area.icone
  const vazio = quantidade === 0
  const visiveis = area.categorias.slice(0, LIMITE_CATEGORIAS)
  const restantes = area.categorias.length - visiveis.length

  return (
    <button
      type="button"
      onClick={() => !vazio && aoAbrir(area)}
      aria-disabled={vazio}
      aria-label={`${area.nome} — abrir materiais`}
      style={{ animationDelay: `${indice * 70}ms` }}
      className={cn(
        'group relative block w-full animate-surgir rounded-md border border-linha bg-superficie px-6 py-8 text-left',
        'transition-all duration-300 ease-out',
        vazio
          ? 'cursor-default opacity-55'
          : 'hover:-translate-y-0.5 hover:border-destaque/45 hover:shadow-card',
        'sm:px-10 sm:py-10',
      )}
    >
      <div className="grid gap-7 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-start md:gap-10">
        <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-7">
          <span
            aria-hidden="true"
            className="font-display text-3xl font-light italic leading-none text-destaque/75"
          >
            {area.ordem}
          </span>
          <Icone
            aria-hidden="true"
            strokeWidth={1.25}
            className="h-6 w-6 text-neutro transition-colors duration-300 group-hover:text-destaque-forte"
          />
        </div>

        <div>
          <h3 className="font-display text-[1.75rem] font-normal leading-tight text-tinta sm:text-[2rem]">
            {area.nome}
          </h3>
          <p className="mt-1 font-display text-lg font-light italic text-neutro">
            {area.resumo}
          </p>
          <p className="mt-5 max-w-[62ch] text-[0.9375rem] leading-relaxed text-grafite">
            {area.descricao}
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-2 gap-y-2">
            {visiveis.map((categoria) => (
              <li
                key={categoria}
                className="rounded-full border border-linha px-3 py-1 text-[0.75rem] leading-normal text-neutro transition-colors duration-300 group-hover:border-destaque/25"
              >
                {categoria}
              </li>
            ))}
            {restantes > 0 && (
              <li className="px-1 py-1 text-[0.75rem] leading-normal text-neutro/80">
                e mais {restantes}
              </li>
            )}
          </ul>

          {vazio && (
            <p className="mt-6 text-[0.8125rem] text-neutro">{mensagemVazia}</p>
          )}
        </div>

        <span
          className={cn(
            'mt-2 inline-flex items-center gap-2 self-center whitespace-nowrap text-sm font-medium md:mt-0',
            vazio ? 'text-neutro' : 'text-destaque-forte',
          )}
        >
          {vazio ? 'Sem materiais' : 'Ver materiais'}
          {!vazio && (
            <ArrowRight
              aria-hidden="true"
              strokeWidth={1.5}
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </span>
      </div>
    </button>
  )
}
