import { Search, X } from 'lucide-react'
import { cn } from '../lib/utils'

interface CampoPesquisaProps {
  valor: string
  aoAlterar: (valor: string) => void
  id: string
  rotulo?: string
  placeholder?: string
  className?: string
}

export function CampoPesquisa({
  valor,
  aoAlterar,
  id,
  rotulo = 'Pesquisar materiais',
  placeholder = 'Pesquisar por documento, categoria ou instituição',
  className,
}: CampoPesquisaProps) {
  return (
    <div className={cn('relative', className)}>
      <label htmlFor={id} className="sr-only">
        {rotulo}
      </label>
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutro"
        strokeWidth={1.6}
      />
      <input
        id={id}
        type="search"
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        className={cn(
          'h-11 w-full rounded-md border border-linha bg-superficie pl-9 pr-9 text-sm text-tinta',
          'placeholder:text-neutro/80',
          'transition-colors duration-200',
          'hover:border-neutro/40 focus:border-destaque focus:outline-none focus-visible:outline-none',
          '[&::-webkit-search-cancel-button]:appearance-none',
        )}
      />
      {valor.length > 0 && (
        <button
          type="button"
          onClick={() => aoAlterar('')}
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-neutro transition-colors hover:bg-destaque-suave hover:text-destaque-forte"
        >
          <X className="h-4 w-4" strokeWidth={1.6} aria-hidden="true" />
          <span className="sr-only">Limpar pesquisa</span>
        </button>
      )}
    </div>
  )
}
