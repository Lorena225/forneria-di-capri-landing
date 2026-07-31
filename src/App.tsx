import { useCallback, useMemo, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Hero } from './components/Hero'
import { ResumoConsultoria } from './components/ResumoConsultoria'
import { MiniCases } from './components/MiniCases'
import { AreasConsultoria } from './components/AreasConsultoria'
import { Acervo, type FiltroArea } from './components/Acervo'
import { ModalDocumento } from './components/ModalDocumento'
import { Rodape } from './components/Rodape'
import type { AreaId, Documento } from './data/documentos'
import { areas, documentos } from './data/documentos'
import type { FiltroInstituicao } from './lib/utils'
import { filtrarDocumentos } from './lib/utils'

export default function App() {
  const [instituicao, setInstituicao] = useState<FiltroInstituicao>('todos')
  const [area, setArea] = useState<FiltroArea>('todas')
  const [busca, setBusca] = useState('')
  const [documentoAberto, setDocumentoAberto] = useState<Documento | null>(null)

  /* Filtra por instituição e pesquisa; a área é aplicada dentro do acervo. */
  const visiveis = useMemo(
    () => filtrarDocumentos(documentos, { instituicao, busca }),
    [instituicao, busca],
  )

  const quantidadePorArea = useMemo(() => {
    const contagem = new Map<string, number>()
    areas.forEach((item) => contagem.set(item.id, 0))
    visiveis.forEach((documento) => {
      contagem.set(documento.area, (contagem.get(documento.area) ?? 0) + 1)
    })
    return contagem
  }, [visiveis])

  /* Escolher uma área no bloco leva direto ao acervo já filtrado. */
  const selecionarArea = useCallback((id: AreaId) => {
    setArea((atual) => (atual === id ? 'todas' : id))
    window.requestAnimationFrame(() => {
      document.getElementById('acervo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const fecharDocumento = useCallback(() => setDocumentoAberto(null), [])

  return (
    <div className="min-h-dvh bg-papel">
      <a
        href="#acervo"
        className="sr-only rounded-full bg-argila-forte px-5 py-2.5 text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Ir para o acervo
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
        />
        <Acervo
          documentos={visiveis}
          area={area}
          aoTrocarArea={setArea}
          instituicao={instituicao}
          aoTrocarInstituicao={setInstituicao}
          busca={busca}
          aoBuscar={setBusca}
          aoAbrirDocumento={setDocumentoAberto}
        />
      </main>

      <Rodape />

      {documentoAberto && (
        <ModalDocumento documento={documentoAberto} aoFechar={fecharDocumento} />
      )}
    </div>
  )
}
