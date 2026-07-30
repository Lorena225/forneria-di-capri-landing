import type { Documento } from '../data/documentos'
import { plural } from '../lib/utils'
import { ItemDocumento } from './ItemDocumento'
import { EstadoVazio } from './EstadoVazio'

interface Props {
  termo: string
  resultados: Documento[]
  aoLimpar: () => void
}

export function ResultadosPesquisa({ termo, resultados, aoLimpar }: Props) {
  return (
    <section
      aria-label="Resultados da pesquisa"
      className="mx-auto max-w-conteudo animate-surgir px-5 pb-4 sm:px-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-linha pb-5">
        <h2 className="font-display text-3xl font-normal text-tinta">
          Resultados para <span className="italic text-destaque-forte">“{termo}”</span>
        </h2>
        <p aria-live="polite" className="text-[0.8125rem] text-neutro">
          {plural(resultados.length, 'material encontrado', 'materiais encontrados')}
        </p>
      </div>

      {resultados.length > 0 ? (
        <ul>
          {resultados.map((documento) => (
            <ItemDocumento key={documento.id} documento={documento} mostrarArea />
          ))}
        </ul>
      ) : (
        <div className="py-10">
          <EstadoVazio
            titulo="Nenhum material encontrado"
            mensagem="Não há documentos com esse termo na instituição selecionada. Tente outra palavra, use apenas parte do nome ou volte para todos os materiais."
            acao={{ rotulo: 'Limpar pesquisa', aoClicar: aoLimpar }}
          />
        </div>
      )}
    </section>
  )
}
