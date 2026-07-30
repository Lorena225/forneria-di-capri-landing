import { SearchX } from 'lucide-react'

interface Props {
  titulo: string
  mensagem: string
  acao?: { rotulo: string; aoClicar: () => void }
}

export function EstadoVazio({ titulo, mensagem, acao }: Props) {
  return (
    <div className="flex flex-col items-center rounded-md border border-dashed border-linha px-6 py-16 text-center">
      <SearchX
        aria-hidden="true"
        strokeWidth={1.2}
        className="h-7 w-7 text-neutro/70"
      />
      <p className="mt-5 font-display text-2xl font-normal text-tinta">{titulo}</p>
      <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-neutro">
        {mensagem}
      </p>
      {acao && (
        <button
          type="button"
          onClick={acao.aoClicar}
          className="mt-6 rounded-md border border-linha px-4 py-2.5 text-sm font-medium text-tinta transition-colors hover:border-destaque/50 hover:bg-destaque-suave hover:text-destaque-forte"
        >
          {acao.rotulo}
        </button>
      )}
    </div>
  )
}
