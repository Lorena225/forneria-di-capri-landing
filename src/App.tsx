import { useCallback, useMemo, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Abertura } from './components/Abertura'
import { Filtros } from './components/Filtros'
import { BlocoArea } from './components/BlocoArea'
import { ModalArea } from './components/ModalArea'
import { ResultadosPesquisa } from './components/ResultadosPesquisa'
import { Rodape } from './components/Rodape'
import { EstadoVazio } from './components/EstadoVazio'
import type { Area } from './data/documentos'
import { areas, documentos } from './data/documentos'
import type { FiltroInstituicao } from './lib/utils'
import { filtrarDocumentos, ordenarPorData } from './lib/utils'

export default function App() {
  const [instituicao, setInstituicao] = useState<FiltroInstituicao>('todos')
  const [busca, setBusca] = useState('')
  const [areaAberta, setAreaAberta] = useState<Area | null>(null)

  const termo = busca.trim()

  const visiveis = useMemo(
    () => filtrarDocumentos(documentos, { instituicao, busca }),
    [instituicao, busca],
  )

  const resultados = useMemo(() => ordenarPorData(visiveis), [visiveis])

  const quantidadePorArea = useMemo(() => {
    const contagem = new Map<string, number>()
    areas.forEach((area) => contagem.set(area.id, 0))
    visiveis.forEach((documento) => {
      contagem.set(documento.area, (contagem.get(documento.area) ?? 0) + 1)
    })
    return contagem
  }, [visiveis])

  const limparBusca = useCallback(() => setBusca(''), [])
  const fecharModal = useCallback(() => setAreaAberta(null), [])

  const filtrosAtivos = termo.length > 0 || instituicao !== 'todos'
  const mensagemVazia = filtrosAtivos
    ? 'Nenhum material desta frente corresponde aos filtros aplicados.'
    : 'Materiais em preparação.'

  const nenhumMaterial = visiveis.length === 0 && termo.length === 0

  return (
    <div className="min-h-dvh bg-papel">
      <a
        href="#frentes"
        className="sr-only rounded-md bg-tinta px-4 py-2 text-sm text-papel focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Ir para os materiais
      </a>

      <Cabecalho
        busca={busca}
        aoBuscar={setBusca}
        instituicao={instituicao}
        aoTrocarInstituicao={setInstituicao}
      />

      <main>
        <Abertura />

        {termo.length > 0 && (
          <ResultadosPesquisa
            termo={termo}
            resultados={resultados}
            aoLimpar={limparBusca}
          />
        )}

        <section
          id="frentes"
          className="mx-auto max-w-conteudo px-5 pb-24 pt-16 sm:px-8"
        >
          <div className="mb-8">
            <p className="rotulo">Frentes de trabalho</p>
            <h2 className="mt-3 max-w-[24ch] font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
              Os materiais organizados por etapa do trabalho
            </h2>
            <p className="mt-4 max-w-[58ch] text-[0.9375rem] leading-relaxed text-neutro">
              Abra uma frente para ver os documentos correspondentes, filtrar por
              instituição e baixar os arquivos.
            </p>
          </div>

          <Filtros
            instituicao={instituicao}
            aoTrocarInstituicao={setInstituicao}
            busca={busca}
            aoLimparBusca={limparBusca}
            total={visiveis.length}
          />

          {nenhumMaterial ? (
            <div className="pt-10">
              <EstadoVazio
                titulo="Nenhum material disponível"
                mensagem="Ainda não há documentos publicados para a instituição selecionada. Escolha outra instituição para ver os materiais já entregues."
                acao={{
                  rotulo: 'Ver todos os materiais',
                  aoClicar: () => setInstituicao('todos'),
                }}
              />
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-4">
              {areas.map((area, indice) => (
                <BlocoArea
                  key={area.id}
                  area={area}
                  indice={indice}
                  quantidade={quantidadePorArea.get(area.id) ?? 0}
                  aoAbrir={setAreaAberta}
                  mensagemVazia={mensagemVazia}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Rodape />

      {areaAberta && (
        <ModalArea
          area={areaAberta}
          instituicao={instituicao}
          aoTrocarInstituicao={setInstituicao}
          busca={busca}
          aoLimparBusca={limparBusca}
          aoFechar={fecharModal}
        />
      )}
    </div>
  )
}
