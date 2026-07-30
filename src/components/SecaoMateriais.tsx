import { X } from 'lucide-react'
import type { Documento } from '../data/documentos'
import { areas } from '../data/documentos'
import { secaoMateriais } from '../data/textos'
import type { FiltroInstituicao } from '../lib/utils'
import { ordenarPorData } from '../lib/utils'
import { SeletorInstituicaoSegmentado } from './SeletorInstituicao'
import { ItemDocumento } from './ItemDocumento'
import { EstadoVazio } from './EstadoVazio'

interface Props {
  documentos: Documento[]
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
  busca: string
  aoLimparBusca: () => void
}

export function SecaoMateriais({
  documentos,
  instituicao,
  aoTrocarInstituicao,
  busca,
  aoLimparBusca,
}: Props) {
  const termo = busca.trim()
  const total = documentos.length
  const pesquisando = termo.length > 0
  const resultados = ordenarPorData(documentos)

  return (
    <section id="materiais" className="mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24">
      <div className="max-w-[62ch]">
        <p className="rotulo-tecnico">Materiais da consultoria</p>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
          Acervo de entregas
        </h2>
        <p className="mt-6 text-[1.0625rem] leading-relaxed text-grafite">
          {secaoMateriais.acimaDoFiltro}
        </p>
      </div>

      {/* Filtro por instituição */}
      <div className="mt-10 flex flex-col gap-5 rounded-lg border border-linha bg-sereno-claro/50 px-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <SeletorInstituicaoSegmentado
            id="instituicao-materiais"
            valor={instituicao}
            aoAlterar={aoTrocarInstituicao}
          />
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-sereno-forte">
            {secaoMateriais.apoio}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          {pesquisando && (
            <button
              type="button"
              onClick={aoLimparBusca}
              className="inline-flex items-center gap-2 rounded-full border border-sereno/40 bg-superficie py-1.5 pl-3 pr-2 text-[0.8125rem] text-tinta transition-colors hover:border-argila/50 hover:bg-areia-clara"
            >
              <span className="text-pedra-escura">Pesquisa:</span> {termo}
              <X aria-hidden="true" strokeWidth={1.6} className="h-3.5 w-3.5 text-pedra-escura" />
              <span className="sr-only">Limpar pesquisa</span>
            </button>
          )}
          <p aria-live="polite" className="text-[0.875rem] font-medium text-tinta">
            {total} {total === 1 ? 'material estratégico disponível' : 'materiais estratégicos disponíveis'} para consulta.
          </p>
        </div>
      </div>

      {/* Listagem */}
      {total === 0 ? (
        <div className="mt-12">
          <EstadoVazio
            titulo={pesquisando ? 'Nenhum material encontrado' : 'Materiais em preparação'}
            mensagem={
              pesquisando
                ? 'Não há documentos com esse termo na instituição selecionada. Tente outra palavra, use apenas parte do nome ou volte para todos os materiais.'
                : secaoMateriais.vazio
            }
            acao={
              pesquisando
                ? { rotulo: 'Limpar pesquisa', aoClicar: aoLimparBusca }
                : { rotulo: 'Ver todos os materiais', aoClicar: () => aoTrocarInstituicao('todos') }
            }
          />
        </div>
      ) : pesquisando ? (
        <div className="mt-12">
          <h3 className="border-b border-linha pb-4 font-display text-2xl font-normal text-tinta">
            Resultados para <span className="italic text-argila-forte">“{termo}”</span>
          </h3>
          <ul>
            {resultados.map((documento) => (
              <ItemDocumento key={documento.id} documento={documento} mostrarArea />
            ))}
          </ul>
        </div>
      ) : (
        <div className="mt-12 space-y-14">
          {areas.map((area) => {
            const lista = ordenarPorData(
              documentos.filter((documento) => documento.area === area.id),
            )

            return (
              <div key={area.id} id={`area-${area.id}`} className="scroll-mt-28">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-pedra/30 pb-4">
                  <h3 className="font-display text-[1.75rem] font-normal leading-tight text-tinta">
                    <span aria-hidden="true" className="mr-3 text-lg italic text-argila">
                      {area.ordem}
                    </span>
                    {area.nome}
                  </h3>
                  <p className="text-[0.8125rem] text-pedra-escura">
                    {lista.length > 0
                      ? `${lista.length} ${lista.length === 1 ? 'material' : 'materiais'}`
                      : 'em desenvolvimento'}
                  </p>
                </div>

                {lista.length > 0 ? (
                  <ul>
                    {lista.map((documento) => (
                      <ItemDocumento key={documento.id} documento={documento} />
                    ))}
                  </ul>
                ) : (
                  <p className="py-8 text-[0.9375rem] leading-relaxed text-pedra-escura">
                    {secaoMateriais.vazio}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
