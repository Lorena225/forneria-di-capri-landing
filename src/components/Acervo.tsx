import { useRef } from 'react'
import { Search, X } from 'lucide-react'
import type { AreaId, Documento } from '../data/documentos'
import { areas, escolas } from '../data/documentos'
import { secaoMateriais } from '../data/textos'
import type { FiltroInstituicao } from '../lib/utils'
import { cn, ordenarPorData } from '../lib/utils'
import { CartaoDocumento } from './CartaoDocumento'
import { EstadoVazio } from './EstadoVazio'

export type FiltroArea = 'todas' | AreaId

interface Props {
  documentos: Documento[]
  area: FiltroArea
  aoTrocarArea: (valor: FiltroArea) => void
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
  busca: string
  aoBuscar: (valor: string) => void
  aoAbrirDocumento: (documento: Documento) => void
}

const opcoesInstituicao: Array<{ valor: FiltroInstituicao; rotulo: string }> = [
  { valor: 'todos', rotulo: 'Todas' },
  ...escolas.map((escola) => ({ valor: escola.id as FiltroInstituicao, rotulo: escola.nome })),
]

export function Acervo({
  documentos,
  area,
  aoTrocarArea,
  instituicao,
  aoTrocarInstituicao,
  busca,
  aoBuscar,
  aoAbrirDocumento,
}: Props) {
  const listaRef = useRef<HTMLDivElement>(null)
  const termo = busca.trim()
  const pesquisando = termo.length > 0

  const visiveis = ordenarPorData(
    area === 'todas' ? documentos : documentos.filter((doc) => doc.area === area),
  )
  const total = visiveis.length

  return (
    <section id="acervo" className="scroll-mt-24 border-t border-linha bg-papel">
      <div className="mx-auto max-w-conteudo px-5 py-24 sm:px-8 sm:py-28">
        <div className="max-w-[60ch]">
          <p className="rotulo-tecnico">Biblioteca estratégica</p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
            {secaoMateriais.titulo}
          </h2>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-grafite">
            {secaoMateriais.acimaDoFiltro}
          </p>
        </div>

        {/* Painel de filtros */}
        <div className="mt-12 rounded-2xl border border-linha bg-sereno-claro/50 p-3 sm:p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="tablist"
              aria-label="Filtrar por área da consultoria"
              className="flex flex-wrap items-center gap-1"
            >
              <button
                type="button"
                role="tab"
                aria-selected={area === 'todas'}
                onClick={() => aoTrocarArea('todas')}
                className={cn('pill', area === 'todas' ? 'pill-ativa' : 'pill-inativa')}
              >
                Todas as áreas
              </button>
              {areas.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={area === item.id}
                  onClick={() => aoTrocarArea(item.id)}
                  className={cn('pill', area === item.id ? 'pill-ativa' : 'pill-inativa')}
                >
                  {item.nome}
                </button>
              ))}
            </div>

            <div className="relative lg:w-72">
              <Search
                aria-hidden="true"
                strokeWidth={1.6}
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-sereno-forte"
              />
              <label htmlFor="pesquisa-acervo" className="sr-only">
                Pesquisar nos materiais
              </label>
              <input
                id="pesquisa-acervo"
                type="search"
                value={busca}
                onChange={(evento) => aoBuscar(evento.target.value)}
                placeholder="Pesquisar no acervo"
                autoComplete="off"
                className="h-11 w-full rounded-full border border-transparent bg-superficie pl-10 pr-9 text-sm text-tinta placeholder:text-pedra-escura/70 transition-colors hover:border-sereno/40 focus:border-sereno focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
              />
              {pesquisando && (
                <button
                  type="button"
                  onClick={() => aoBuscar('')}
                  className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-sereno-forte transition-colors hover:bg-sereno-claro hover:text-tinta"
                >
                  <X aria-hidden="true" strokeWidth={1.6} className="h-4 w-4" />
                  <span className="sr-only">Limpar pesquisa</span>
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/60 px-1 pt-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-sereno-forte">
                Instituição
              </span>
              {opcoesInstituicao.map((opcao) => (
                <button
                  key={opcao.valor}
                  type="button"
                  aria-pressed={instituicao === opcao.valor}
                  onClick={() => aoTrocarInstituicao(opcao.valor)}
                  className={cn(
                    'rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-all duration-200',
                    instituicao === opcao.valor
                      ? 'border-argila-forte bg-argila-forte text-white'
                      : 'border-sereno/40 bg-superficie/70 text-sereno-forte hover:border-sereno hover:text-tinta',
                  )}
                >
                  {opcao.rotulo}
                </button>
              ))}
            </div>

            <p aria-live="polite" className="text-[0.8125rem] text-sereno-forte">
              {total}{' '}
              {total === 1
                ? 'material estratégico disponível'
                : 'materiais estratégicos disponíveis'}{' '}
              para consulta.
            </p>
          </div>
        </div>

        <p className="mt-4 px-1 text-[0.8125rem] leading-relaxed text-pedra-escura">
          {secaoMateriais.apoio}
        </p>

        {/* Listagem */}
        <div ref={listaRef} className="mt-10">
          {total === 0 ? (
            <EstadoVazio
              titulo={pesquisando ? 'Nada por aqui com esse termo' : 'Frente em preparação'}
              mensagem={
                pesquisando
                  ? 'Não encontramos nenhum material com essa palavra nos filtros escolhidos. Tente outro termo ou volte para todas as áreas.'
                  : secaoMateriais.vazio
              }
              acao={
                pesquisando
                  ? { rotulo: 'Limpar pesquisa', aoClicar: () => aoBuscar('') }
                  : { rotulo: 'Ver todas as áreas', aoClicar: () => aoTrocarArea('todas') }
              }
            />
          ) : (
            <ul className="border-t border-linha">
              {visiveis.map((documento) => (
                <CartaoDocumento
                  key={documento.id}
                  documento={documento}
                  aoAbrir={aoAbrirDocumento}
                  mostrarArea={area === 'todas'}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
