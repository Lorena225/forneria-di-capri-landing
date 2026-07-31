import type { EscolaId } from '../data/documentos'
import { buscarEscola } from '../data/documentos'
import { cn } from '../lib/utils'

interface Props {
  escola: EscolaId
  /** Altura do logotipo dentro do container. */
  tamanho?: 'pequeno' | 'medio' | 'grande'
  className?: string
}

const alturas = {
  pequeno: 'h-6',
  medio: 'h-8',
  grande: 'h-11',
} as const

const respiros = {
  pequeno: 'px-3 py-2',
  medio: 'px-4 py-2.5',
  grande: 'px-5 py-3.5',
} as const

/**
 * Logotipo oficial da instituição em container claro, para funcionar tanto
 * sobre fundo branco quanto sobre as faixas escuras da página.
 */
export function LogoEscola({ escola, tamanho = 'medio', className }: Props) {
  const dados = buscarEscola(escola)

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl border border-linha bg-white shadow-sm',
        respiros[tamanho],
        className,
      )}
    >
      <img
        src={dados.logo}
        alt={`Logotipo ${dados.nome}`}
        loading="lazy"
        className={cn('w-auto max-w-[11rem] object-contain', alturas[tamanho])}
      />
    </span>
  )
}
