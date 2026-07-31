import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Area, Documento, EscolaId } from '../data/documentos'
import { ehLinkExterno, escolas, rotuloEscolas } from '../data/documentos'
import { painel } from '../data/textos'
import { cn, ordenarPorData } from '../lib/utils'
import type { FiltroInstituicao } from '../lib/utils'
import { EstadoVazio } from './EstadoVazio'

interface Props {
  area: Area
  documentos: Documento[]
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
  aoAbrirDocumento: (documento: Documento) => void
  aoFechar: () => void
}

interface Grupo {
  chave: string
  rotulo: string
  documentos: Documento[]
}

/**
 * Agrupa os materiais por instituição. Os comuns às duas escolas aparecem
 * primeiro, em um grupo próprio, para não se repetirem em duas listas.
 */
function agrupar(documentos: Documento[]): Grupo[] {
  const comuns = documentos.filter((doc) => doc.escolas.length > 1)
  const grupos: Grupo[] = []

  if (comuns.length > 0) {
    grupos.push({ chave: 'comum', rotulo: painel.grupoComum, documentos: comuns })
  }

  escolas.forEach((escola) => {
    const lista = documentos.filter(
      (doc) => doc.escolas.length === 1 && doc.escolas[0] === (escola.id as EscolaId),
    )
    if (lista.length > 0) {
      grupos.push({ chave: escola.id, rotulo: escola.nome, documentos: lista })
    }
  })

  return grupos
}

const opcoesInstituicao: Array<{ valor: FiltroInstituicao; rotulo: string }> = [
  { valor: 'todos', rotulo: 'Todas' },
  ...escolas.map((escola) => ({ valor: escola.id as FiltroInstituicao, rotulo: escola.nome })),
]

export function PainelArea({
  area,
  documentos,
  instituicao,
  aoTrocarInstituicao,
  aoAbrirDocumento,
  aoFechar,
}: Props) {
  const refPainel = useRef<HTMLDivElement>(null)
  const grupos = agrupar(ordenarPorData(documentos))

  /* Ao trocar de área, leva a leitura até o início do painel. */
  useEffect(() => {
    const elemento = refPainel.current
    if (!elemento) return
    const timer = window.setTimeout(() => {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [area.id])

  return (
    <div
      ref={refPainel}
      id="painel-da-area"
      role="region"
      aria-label={`Materiais de ${area.nome}`}
      className="mt-8 scroll-mt-24 animate-surgir overflow-hidden rounded-2xl border border-linha bg-superficie shadow-alto"
    >
      {/* Faixa de contexto */}
      <div className="border-b border-linha bg-profundo px-7 py-8 text-white sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-areia">
              {painel.prefixo}
            </p>
            <h3 className="mt-3 font-display text-[2rem] font-light leading-tight sm:text-[2.5rem]">
              {area.nome}
            </h3>
            <p className="mt-4 max-w-[62ch] text-[0.9375rem] leading-relaxed text-white/75">
              {area.apoio}
            </p>
          </div>

          <button
            type="button"
            onClick={aoFechar}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-[0.8125rem] text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
            {painel.fechar}
          </button>
        </div>
      </div>

      {/* Cabeçalho dos materiais */}
      <div className="flex flex-wrap items-end justify-between gap-5 border-b border-linha px-7 py-7 sm:px-10">
        <div>
          <h4 className="font-display text-2xl font-normal text-tinta">
            {painel.tituloMateriais}
          </h4>
          <p className="mt-2 max-w-[56ch] text-[0.9375rem] leading-relaxed text-grafite">
            {painel.apoioMateriais}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {opcoesInstituicao.map((opcao) => (
            <button
              key={opcao.valor}
              type="button"
              aria-pressed={instituicao === opcao.valor}
              onClick={() => aoTrocarInstituicao(opcao.valor)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-all duration-200',
                instituicao === opcao.valor
                  ? 'border-sereno-forte bg-sereno-forte text-white'
                  : 'border-sereno/40 text-sereno-forte hover:border-sereno hover:bg-sereno-claro/60 hover:text-tinta',
              )}
            >
              {opcao.rotulo}
            </button>
          ))}
        </div>
      </div>

      {/* Grupos por instituição */}
      <div className="px-7 py-4 sm:px-10">
        {grupos.length === 0 ? (
          <div className="py-10">
            <EstadoVazio
              titulo="Nada nesta combinação"
              mensagem="Não há materiais desta área para a instituição selecionada. Escolha outra instituição para continuar."
              acao={{ rotulo: 'Ver todas', aoClicar: () => aoTrocarInstituicao('todos') }}
            />
          </div>
        ) : (
          grupos.map((grupo) => (
            <section key={grupo.chave} className="py-8">
              <div className="flex items-center gap-4">
                <h5 className="shrink-0 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-sereno-forte">
                  {grupo.rotulo}
                </h5>
                <span aria-hidden="true" className="h-px flex-1 bg-linha" />
                <span className="shrink-0 text-[0.75rem] text-pedra-escura">
                  {grupo.documentos.length}{' '}
                  {grupo.documentos.length === 1 ? 'material' : 'materiais'}
                </span>
              </div>

              <ul className="mt-5 grid gap-3">
                {grupo.documentos.map((documento) => {
                  const externo = ehLinkExterno(documento)
                  return (
                    <li key={documento.id}>
                      <button
                        type="button"
                        onClick={() => aoAbrirDocumento(documento)}
                        aria-label={`Abrir a ficha de ${documento.titulo}`}
                        className="group flex w-full items-start justify-between gap-6 rounded-xl border border-linha bg-papel/60 px-6 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-sereno hover:bg-superficie hover:shadow-card"
                      >
                        <span className="min-w-0">
                          <span className="block font-display text-[1.25rem] font-normal leading-snug text-tinta transition-colors duration-300 group-hover:text-argila-forte">
                            {documento.titulo}
                          </span>
                          <span className="mt-1.5 block max-w-[70ch] text-[0.9375rem] leading-relaxed text-grafite">
                            {documento.descricao}
                          </span>
                        </span>

                        <span className="flex shrink-0 flex-col items-end gap-2">
                          <span className="rounded-full border border-sereno/30 bg-sereno-claro/50 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-sereno-forte">
                            {externo ? 'Online' : documento.tipo}
                          </span>
                          <span className="hidden items-center gap-1.5 text-[0.8125rem] font-medium text-argila-forte sm:flex">
                            Abrir material
                            <ArrowUpRight
                              aria-hidden="true"
                              strokeWidth={1.5}
                              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </span>
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))
        )}
      </div>
    </div>
  )
}

export { rotuloEscolas }
