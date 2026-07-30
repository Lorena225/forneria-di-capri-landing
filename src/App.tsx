import { useCallback, useMemo, useState } from 'react'
import { Cabecalho } from './components/Cabecalho'
import { Hero } from './components/Hero'
import { ResumoConsultoria } from './components/ResumoConsultoria'
import { MiniCases } from './components/MiniCases'
import { AreasConsultoria } from './components/AreasConsultoria'
import { SecaoMateriais } from './components/SecaoMateriais'
import { Rodape } from './components/Rodape'
import { areas, documentos } from './data/documentos'
import type { FiltroInstituicao } from './lib/utils'
import { filtrarDocumentos } from './lib/utils'

export default function App() {
  const [instituicao, setInstituicao] = useState<FiltroInstituicao>('todos')
  const [busca, setBusca] = useState('')

  const visiveis = useMemo(
    () => filtrarDocumentos(documentos, { instituicao, busca }),
    [instituicao, busca],
  )

  const quantidadePorArea = useMemo(() => {
    const contagem = new Map<string, number>()
    areas.forEach((area) => contagem.set(area.id, 0))
    visiveis.forEach((documento) => {
      contagem.set(documento.area, (contagem.get(documento.area) ?? 0) + 1)
    })
    return contagem
  }, [visiveis])

  const limparBusca = useCallback(() => setBusca(''), [])

  return (
    <div className="min-h-dvh bg-papel">
      <a
        href="#materiais"
        className="sr-only rounded-md bg-argila-forte px-4 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
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
        <Hero />
        <ResumoConsultoria />
        <MiniCases />
        <AreasConsultoria quantidadePorArea={quantidadePorArea} />
        <SecaoMateriais
          documentos={visiveis}
          instituicao={instituicao}
          aoTrocarInstituicao={setInstituicao}
          busca={busca}
          aoLimparBusca={limparBusca}
        />
      </main>

      <Rodape />
    </div>
  )
}
