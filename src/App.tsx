import { useCallback, useMemo, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Hero } from './components/Hero'
import { ResumoConsultoria } from './components/ResumoConsultoria'
import { MiniCases } from './components/MiniCases'
import { AreasConsultoria } from './components/AreasConsultoria'
import { PainelArea } from './components/PainelArea'
import { ModalDocumento } from './components/ModalDocumento'
import { Rodape } from './components/Rodape'
import type { AreaId, Documento } from './data/documentos'
import { areas, buscarArea, documentos } from './data/documentos'
import type { FiltroInstituicao } from './lib/utils'
import { filtrarDocumentos } from './lib/utils'

export default function App() {
  const [instituicao, setInstituicao] = useState<FiltroInstituicao>('todos')
  const [area, setArea] = useState<AreaId | null>(null)
  const [documentoAberto, setDocumentoAberto] = useState<Documento | null>(null)

  /* A instituição filtra; a área define qual painel está aberto. */
  const visiveis = useMemo(
    () => filtrarDocumentos(documentos, { instituicao, busca: '' }),
    [instituicao],
  )

  const quantidadePorArea = useMemo(() => {
    const contagem = new Map<string, number>()
    areas.forEach((item) => contagem.set(item.id, 0))
    visiveis.forEach((documento) => {
      contagem.set(documento.area, (contagem.get(documento.area) ?? 0) + 1)
    })
    return contagem
  }, [visiveis])

  /* Clicar na área abre o painel abaixo dos cards; clicar de novo fecha. */
  const selecionarArea = useCallback((id: AreaId) => {
    setArea((atual) => (atual === id ? null : id))
  }, [])

  const fecharDocumento = useCallback(() => setDocumentoAberto(null), [])

  return (
    <div className="min-h-dvh bg-papel">
      <a
        href="#areas"
        className="sr-only rounded-full bg-argila-forte px-5 py-2.5 text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Ir para os materiais
      </a>

      <Cabecalho />

      <main>
        <Hero />
        <ResumoConsultoria />
        <MiniCases />
        <AreasConsultoria
          areaSelecionada={area}
          aoSelecionar={selecionarArea}
          quantidadePorArea={quantidadePorArea}
          painel={
            area && (
              <PainelArea
                area={buscarArea(area)}
                documentos={visiveis.filter((documento) => documento.area === area)}
                instituicao={instituicao}
                aoTrocarInstituicao={setInstituicao}
                aoAbrirDocumento={setDocumentoAberto}
                aoFechar={() => setArea(null)}
              />
            )
          }
        />
      </main>

      <Rodape />

      {documentoAberto && (
        <ModalDocumento documento={documentoAberto} aoFechar={fecharDocumento} />
      )}
    </div>
  )
}
