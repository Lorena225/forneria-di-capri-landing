import { ChevronDown } from 'lucide-react'
import { escolas } from '../data/documentos'
import type { FiltroInstituicao } from '../lib/utils'
import { cn } from '../lib/utils'

const opcoes: Array<{ valor: FiltroInstituicao; rotulo: string; curto: string }> = [
  { valor: 'todos', rotulo: 'Todos os materiais', curto: 'Todos' },
  ...escolas.map((escola) => ({
    valor: escola.id as FiltroInstituicao,
    rotulo: escola.nome,
    curto: escola.nome,
  })),
]

interface Props {
  valor: FiltroInstituicao
  aoAlterar: (valor: FiltroInstituicao) => void
  id: string
  className?: string
}

/** Versão compacta, usada no cabeçalho. */
export function SeletorInstituicao({ valor, aoAlterar, id, className }: Props) {
  return (
    <div className={cn('relative', className)}>
      <label htmlFor={id} className="sr-only">
        Filtrar por instituição
      </label>
      <select
        id={id}
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value as FiltroInstituicao)}
        className="h-11 w-full cursor-pointer appearance-none rounded-md border border-linha bg-superficie pl-3 pr-9 text-sm text-tinta transition-colors hover:border-pedra-escura/40 focus:border-argila focus:outline-none focus-visible:outline-none"
      >
        {opcoes.map((opcao) => (
          <option key={opcao.valor} value={opcao.valor}>
            {opcao.rotulo}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-pedra-escura"
        strokeWidth={1.6}
      />
    </div>
  )
}

interface SegmentadoProps extends Props {
  tamanho?: 'padrao' | 'compacto'
}

/** Versão em botões, usada na seção de filtros e dentro dos popups. */
export function SeletorInstituicaoSegmentado({
  valor,
  aoAlterar,
  id,
  className,
  tamanho = 'padrao',
}: SegmentadoProps) {
  return (
    <div
      role="radiogroup"
      aria-label="Filtrar por instituição"
      id={id}
      className={cn(
        'inline-flex flex-wrap items-center gap-1 rounded-md border border-sereno/30 bg-superficie/70 p-1',
        className,
      )}
    >
      {opcoes.map((opcao) => {
        const ativo = valor === opcao.valor
        return (
          <button
            key={opcao.valor}
            type="button"
            role="radio"
            aria-checked={ativo}
            onClick={() => aoAlterar(opcao.valor)}
            className={cn(
              'rounded-[4px] font-medium transition-colors duration-200',
              tamanho === 'padrao'
                ? 'px-4 py-2 text-sm'
                : 'px-3 py-1.5 text-[0.8125rem]',
              ativo
                ? 'bg-argila-forte text-white shadow-sm'
                : 'text-sereno-forte hover:bg-superficie hover:text-tinta',
            )}
          >
            {tamanho === 'compacto' ? opcao.curto : opcao.rotulo}
          </button>
        )
      })}
    </div>
  )
}
