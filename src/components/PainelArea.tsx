import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import type { Area, Documento } from '../data/documentos'
import { ehLinkExterno } from '../data/documentos'
import { painel } from '../data/textos'
import { cn } from '../lib/utils'
import { EstadoVazio } from './EstadoVazio'

interface Props {
  area: Area
  documentos: Documento[]
  aoAbrirDocumento: (documento: Documento) => void
  aoFechar: () => void
}

/** Agrupa documentos por categoria preservando a ordem de aparição. */
function agruparPorCategoria(docs: Documento[]): { categoria: string; itens: Documento[] }[] {
  const mapa = new Map<string, Documento[]>()
  for (const doc of docs) {
    const lista = mapa.get(doc.categoria) ?? []
    lista.push(doc)
    mapa.set(doc.categoria, lista)
  }
  return Array.from(mapa.entries()).map(([categoria, itens]) => ({ categoria, itens }))
}

export function PainelArea({
  area,
  documentos,
  aoAbrirDocumento,
  aoFechar,
}: Props) {
  const refPainel = useRef<HTMLDivElement>(null)

  /* Ao trocar de área, leva a leitura até o início do painel. */
  useEffect(() => {
    const elemento = refPainel.current
    if (!elemento) return
    const timer = window.setTimeout(() => {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [area.id])

  const grupos = agruparPorCategoria(documentos)

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

        {/* Badge do cliente */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 0.875rem',
            borderRadius: '9999px',
            border: '1px solid rgba(176,115,69,0.3)',
            background: 'rgba(176,115,69,0.06)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#b07345',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              color: '#8a5732',
              fontFamily: 'var(--font-display, Georgia, serif)',
              fontStyle: 'italic',
            }}
          >
            Forneria Di Capri
          </span>
        </div>
      </div>

      {/* Grupos por categoria */}
      <div className="px-7 py-6 sm:px-10">
        {documentos.length === 0 ? (
          <div className="py-10">
            <EstadoVazio
              titulo="Nenhum material nesta área"
              mensagem="Esta frente está em desenvolvimento e será atualizada conforme os materiais forem finalizados."
            />
          </div>
        ) : (
          <div className="flex flex-col gap-10 py-4">
            {grupos.map(({ categoria, itens }) => (
              <section key={categoria}>
                {/* Cabeçalho da categoria */}
                <div className="mb-4 flex items-center gap-3">
                  <span
                    style={{
                      display: 'block',
                      width: '3px',
                      height: '18px',
                      borderRadius: '2px',
                      background: 'linear-gradient(to bottom, #b07345, #dbc2b4)',
                      flexShrink: 0,
                    }}
                  />
                  <h5
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(44,57,63,0.5)',
                    }}
                  >
                    {categoria}
                  </h5>
                  <span
                    style={{
                      flex: 1,
                      height: '1px',
                      background: 'rgba(44,57,63,0.08)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      fontWeight: 500,
                      color: 'rgba(44,57,63,0.35)',
                    }}
                  >
                    {itens.length} {itens.length === 1 ? 'material' : 'materiais'}
                  </span>
                </div>

                {/* Itens da categoria */}
                <ul className="grid gap-3">
                  {itens.map((documento) => {
                    const externo = ehLinkExterno(documento)
                    return (
                      <li key={documento.id}>
                        <button
                          type="button"
                          onClick={() => aoAbrirDocumento(documento)}
                          aria-label={`Abrir a ficha de ${documento.titulo}`}
                          className={cn(
                            'group flex w-full items-start justify-between gap-6 rounded-xl border px-6 py-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card',
                            'border-linha bg-papel/60 hover:border-sereno hover:bg-superficie',
                          )}
                        >
                          <span className="min-w-0">
                            <span className="block font-display text-[1.1875rem] font-normal leading-snug text-tinta transition-colors duration-300 group-hover:text-argila-forte">
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
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
