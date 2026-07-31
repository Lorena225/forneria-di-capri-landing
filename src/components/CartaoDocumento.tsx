import { ArrowUpRight, FileText, Link2 } from 'lucide-react'
import type { Documento } from '../data/documentos'
import { buscarArea, ehLinkExterno, rotuloEscolas } from '../data/documentos'

interface Props {
  documento: Documento
  aoAbrir: (documento: Documento) => void
  mostrarArea?: boolean
}

/** Linha da biblioteca: abre o material em um painel detalhado. */
export function CartaoDocumento({ documento, aoAbrir, mostrarArea = false }: Props) {
  const externo = ehLinkExterno(documento)

  return (
    <li>
      <button
        type="button"
        onClick={() => aoAbrir(documento)}
        className="group flex w-full items-start gap-5 border-b border-linha px-1 py-7 text-left transition-colors duration-300 hover:bg-superficie sm:gap-7 sm:px-4"
      >
        <span
          aria-hidden="true"
          className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-linha bg-superficie text-sereno-forte transition-colors duration-300 group-hover:border-sereno group-hover:bg-sereno-claro"
        >
          {externo ? (
            <Link2 strokeWidth={1.4} className="h-4 w-4" />
          ) : (
            <FileText strokeWidth={1.4} className="h-4 w-4" />
          )}
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-sereno-forte">
            {documento.categoria}
            <span aria-hidden="true" className="text-pedra/50">
              ·
            </span>
            {rotuloEscolas(documento.escolas)}
            {mostrarArea && (
              <>
                <span aria-hidden="true" className="text-pedra/50">
                  ·
                </span>
                {buscarArea(documento.area).nome}
              </>
            )}
          </span>

          <span className="mt-2 block font-display text-xl font-normal leading-snug text-tinta transition-colors duration-300 group-hover:text-argila-forte sm:text-[1.375rem]">
            {documento.titulo}
          </span>

          <span className="mt-2 block max-w-[68ch] text-[0.9375rem] leading-relaxed text-grafite">
            {documento.descricao}
          </span>

          <span className="mt-3 block text-[0.8125rem] text-pedra-escura">
            {externo ? 'Página online' : documento.tipo}
            <span aria-hidden="true" className="mx-2 text-pedra/50">
              |
            </span>
            Atualizado em {documento.dataAtualizacao}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="mt-1 hidden shrink-0 items-center gap-2 text-[0.8125rem] font-medium text-sereno-forte transition-colors duration-300 group-hover:text-argila-forte sm:flex"
        >
          Abrir
          <ArrowUpRight
            strokeWidth={1.5}
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </button>
    </li>
  )
}
