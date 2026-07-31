import { Hourglass } from 'lucide-react'
import { secaoMateriais } from '../data/textos'

interface Props {
  titulo?: string
  mensagem?: string
  acao?: { rotulo: string; aoClicar: () => void }
}

export function EstadoVazio({
  titulo = 'Materiais em preparação',
  mensagem = secaoMateriais.vazio,
  acao,
}: Props) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-sereno/40 bg-superficie px-6 py-16 text-center">
      <Hourglass aria-hidden="true" strokeWidth={1.2} className="h-7 w-7 text-sereno" />
      <p className="mt-5 font-display text-2xl font-normal text-tinta">{titulo}</p>
      <p className="mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-grafite">
        {mensagem}
      </p>
      {acao && (
        <button type="button" onClick={acao.aoClicar} className="botao-secundario mt-7">
          {acao.rotulo}
        </button>
      )}
    </div>
  )
}
