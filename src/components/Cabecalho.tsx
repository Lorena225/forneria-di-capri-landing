import { CampoPesquisa } from './CampoPesquisa'
import { SeletorInstituicao } from './SeletorInstituicao'
import type { FiltroInstituicao } from '../lib/utils'

interface Props {
  busca: string
  aoBuscar: (valor: string) => void
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
}

export function Cabecalho({ busca, aoBuscar, instituicao, aoTrocarInstituicao }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-papel/85 backdrop-blur-md">
      <div className="mx-auto max-w-conteudo px-5 sm:px-8">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <a
            href="#topo"
            className="flex shrink-0 items-center gap-4 rounded-sm"
            aria-label="VirtruvIA — Consultoria estratégica"
          >
            {/* Para trocar o logotipo, substitua public/logo-virtruvia.png */}
            <img
              src="/logo-virtruvia.png"
              alt=""
              className="h-7 w-auto sm:h-8"
              width={559}
              height={200}
            />
            <span aria-hidden="true" className="hidden h-8 w-px bg-linha sm:block" />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[0.9375rem] font-medium tracking-[0.12em] text-tinta">
                VIRTRUVIA
              </span>
              <span className="rotulo text-[0.625rem]">Consultoria estratégica</span>
            </span>
          </a>

          <div className="flex flex-1 items-center justify-end gap-3">
            <CampoPesquisa
              id="pesquisa-cabecalho"
              valor={busca}
              aoAlterar={aoBuscar}
              placeholder="Pesquisar materiais"
              className="hidden w-full max-w-xs lg:block"
            />
            <SeletorInstituicao
              id="instituicao-cabecalho"
              valor={instituicao}
              aoAlterar={aoTrocarInstituicao}
              className="w-[11.5rem] shrink-0 max-[380px]:w-[9rem]"
            />
          </div>
        </div>

        {/* Pesquisa em linha própria em telas menores */}
        <div className="pb-4 lg:hidden">
          <CampoPesquisa
            id="pesquisa-cabecalho-movel"
            valor={busca}
            aoAlterar={aoBuscar}
            placeholder="Pesquisar materiais"
          />
        </div>
      </div>
    </header>
  )
}
