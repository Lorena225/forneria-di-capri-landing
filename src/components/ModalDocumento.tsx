import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, BookOpen, Download, X } from 'lucide-react'
import type { Documento } from '../data/documentos'
import { buscarArea, ehLinkExterno } from '../data/documentos'
import { LeitorDocumento } from './LeitorDocumento'

interface Props {
  documento: Documento
  aoFechar: () => void
}

const SELETOR_FOCAVEIS =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

/** Rótulo do download conforme o formato — sem prometer PDF onde não há PDF. */
function rotuloDownload(documento: Documento): string {
  if (ehLinkExterno(documento)) return 'Abrir material'
  return documento.tipo === 'PDF' ? 'Baixar em PDF' : 'Baixar arquivo'
}

export function ModalDocumento({ documento, aoFechar }: Props) {
  const painelRef = useRef<HTMLDivElement>(null)
  const fecharRef = useRef<HTMLButtonElement>(null)
  const [lendo, setLendo] = useState(false)

  const externo = ehLinkExterno(documento)
  const area = buscarArea(documento.area)
  const nomeArquivo = documento.arquivo.split('/').pop() ?? documento.titulo

  /* Bloqueia a rolagem da página enquanto o painel estiver aberto. */
  useEffect(() => {
    const { body } = document
    const overflowAnterior = body.style.overflow
    const paddingAnterior = body.style.paddingRight
    const larguraBarra = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (larguraBarra > 0) body.style.paddingRight = `${larguraBarra}px`
    return () => {
      body.style.overflow = overflowAnterior
      body.style.paddingRight = paddingAnterior
    }
  }, [])

  /* Foco inicial, devolução do foco, Esc e navegação por Tab presa ao painel. */
  useEffect(() => {
    const anterior = document.activeElement as HTMLElement | null
    fecharRef.current?.focus()

    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === 'Escape') {
        evento.stopPropagation()
        aoFechar()
        return
      }
      if (evento.key !== 'Tab' || !painelRef.current) return

      const focaveis = Array.from(
        painelRef.current.querySelectorAll<HTMLElement>(SELETOR_FOCAVEIS),
      ).filter((elemento) => elemento.offsetParent !== null)
      if (focaveis.length === 0) return

      const primeiro = focaveis[0]
      const ultimo = focaveis[focaveis.length - 1]
      const ativo = document.activeElement

      if (evento.shiftKey && (ativo === primeiro || !painelRef.current.contains(ativo))) {
        evento.preventDefault()
        ultimo.focus()
      } else if (!evento.shiftKey && ativo === ultimo) {
        evento.preventDefault()
        primeiro.focus()
      }
    }

    document.addEventListener('keydown', aoTeclar)
    return () => {
      document.removeEventListener('keydown', aoTeclar)
      anterior?.focus?.()
    }
  }, [aoFechar])

  const ficha = [
    { rotulo: 'Área', valor: area.nome },
    { rotulo: 'Categoria', valor: documento.categoria },
    { rotulo: 'Cliente', valor: 'Forneria Di Capri' },
    { rotulo: 'Formato', valor: externo ? 'Página online' : documento.tipo },
    { rotulo: 'Atualizado em', valor: documento.dataAtualizacao },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-profundo/70 backdrop-blur-[3px] animate-aparecer"
        onClick={aoFechar}
        aria-hidden="true"
      />

      <div
        ref={painelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-do-material"
        className="relative flex max-h-[92vh] w-full max-w-3xl animate-modal-entrada flex-col overflow-hidden rounded-t-2xl bg-superficie shadow-modal sm:max-h-[88vh] sm:rounded-2xl"
      >
        {/* Cabeçalho */}
        <div className="shrink-0 border-b border-linha bg-sereno-claro/40 px-6 pb-7 pt-7 sm:px-10 sm:pt-9">
          <div className="flex items-start justify-between gap-6">
            <div>
              {/* Badge do cliente */}
              <span
                className="mb-5 inline-flex items-center gap-2"
                style={{
                  padding: '0.375rem 0.875rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(176,115,69,0.25)',
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
              </span>
              <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-sereno-forte">
                {area.nome}
              </p>
              <h2
                id="titulo-do-material"
                className="mt-3 font-display text-[1.75rem] font-normal leading-tight text-tinta sm:text-[2.25rem]"
              >
                {documento.titulo}
              </h2>
            </div>

            <button
              ref={fecharRef}
              type="button"
              onClick={aoFechar}
              className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-transparent text-sereno-forte transition-colors hover:border-linha hover:bg-superficie hover:text-tinta"
            >
              <X aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
              <span className="sr-only">Fechar</span>
            </button>
          </div>
        </div>

        {/* Corpo */}
        <div className="rolagem-discreta flex-1 overflow-y-auto overscroll-contain px-6 py-8 sm:px-10">
          <p className="max-w-[64ch] text-[1.0625rem] leading-relaxed text-grafite">
            {documento.descricao}
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-5 border-y border-linha py-6 sm:grid-cols-2">
            {ficha.map((linha) => (
              <div key={linha.rotulo} className="flex flex-col gap-1">
                <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-pedra-escura">
                  {linha.rotulo}
                </dt>
                <dd className="text-[0.9375rem] text-tinta">{linha.valor}</dd>
              </div>
            ))}
          </dl>

          {lendo && documento.conteudo && (
            <LeitorDocumento
              caminho={documento.conteudo}
              arquivo={documento.arquivo}
              titulo={documento.titulo}
            />
          )}
        </div>

        {/* Ações */}
        <div className="shrink-0 border-t border-linha bg-papel px-6 py-5 sm:px-10">
          <div className="flex flex-wrap items-center gap-3">
            {documento.conteudo && (
              <button
                type="button"
                onClick={() => setLendo((valor) => !valor)}
                aria-expanded={lendo}
                className="botao-secundario"
              >
                <BookOpen aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                {lendo ? 'Fechar leitura' : 'Ler o conteúdo'}
              </button>
            )}

            {!externo && (
              <a
                href={documento.arquivo}
                target="_blank"
                rel="noopener noreferrer"
                className="botao-secundario"
              >
                <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Abrir o arquivo
              </a>
            )}

            {documento.arquivoPdf && (
              <a href={documento.arquivoPdf} download className="botao-secundario">
                <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Baixar em PDF
              </a>
            )}

            <a
              href={documento.arquivo}
              {...(externo
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { download: nomeArquivo })}
              className="botao-principal"
            >
              {externo ? (
                <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
              ) : (
                <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
              )}
              {rotuloDownload(documento)}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
