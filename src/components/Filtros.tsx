import { X } from 'lucide-react'
import { SeletorInstituicaoSegmentado } from './SeletorInstituicao'
import type { FiltroInstituicao } from '../lib/utils'
import { plural } from '../lib/utils'

interface Props {
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
  busca: string
  aoLimparBusca: () => void
  total: number
}

export function Filtros({
  instituicao,
  aoTrocarInstituicao,
  busca,
  aoLimparBusca,
  total,
}: Props) {
  const termo = busca.trim()

  return (
    <div className="flex flex-col gap-4 border-b border-linha pb-6 lg:flex-row lg:items-center lg:justify-between">
      <SeletorInstituicaoSegmentado
        id="instituicao-filtros"
        valor={instituicao}
        aoAlterar={aoTrocarInstituicao}
        className="self-start"
      />

      <div className="flex flex-wrap items-center gap-3">
        {termo.length > 0 && (
          <button
            type="button"
            onClick={aoLimparBusca}
            className="inline-flex items-center gap-2 rounded-full border border-linha bg-superficie py-1.5 pl-3 pr-2 text-[0.8125rem] text-tinta transition-colors hover:border-destaque/50 hover:bg-destaque-suave"
          >
            <span className="text-neutro">Pesquisa:</span> {termo}
            <X aria-hidden="true" strokeWidth={1.6} className="h-3.5 w-3.5 text-neutro" />
            <span className="sr-only">Limpar pesquisa</span>
          </button>
        )}
        <p aria-live="polite" className="text-[0.8125rem] text-neutro">
          {plural(total, 'material disponível', 'materiais disponíveis')}
        </p>
      </div>
    </div>
  )
}
