import { useId, useState } from 'react'
import { ArrowUpRight, BookOpen, ChevronDown, Download, Eye, FileText, Link2 } from 'lucide-react'
import type { Documento } from '../data/documentos'
import { buscarArea, ehLinkExterno, rotuloEscolas } from '../data/documentos'
import { cn } from '../lib/utils'
import { LeitorDocumento } from './LeitorDocumento'

interface Props {
  documento: Documento
  /** Mostra também a frente de trabalho — usado nos resultados de pesquisa. */
  mostrarArea?: boolean
}

const classeBotaoSecundario = cn(
  'inline-flex items-center gap-2 rounded-md border border-linha bg-superficie px-4 py-2.5 text-sm font-medium text-tinta',
  'transition-colors duration-200 hover:border-argila/50 hover:bg-areia-clara hover:text-argila-forte',
)

const classeBotaoPrincipal = cn(
  'inline-flex items-center gap-2 rounded-md bg-argila-forte px-4 py-2.5 text-sm font-medium text-white',
  'transition-colors duration-200 hover:bg-tinta active:bg-tinta',
)

export function ItemDocumento({ documento, mostrarArea = false }: Props) {
  const [aberto, setAberto] = useState(false)
  const idLeitura = useId()

  const externo = ehLinkExterno(documento)
  const temLeitura = Boolean(documento.conteudo) && !externo
  const nomeArquivo = documento.arquivo.split('/').pop() ?? documento.titulo

  return (
    <li className="group border-b border-linha py-7 last:border-b-0">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="min-w-0">
          <p className="rotulo-tecnico">
            {documento.categoria}
            <span aria-hidden="true" className="mx-2 text-linha">
              /
            </span>
            {rotuloEscolas(documento.escolas)}
            {mostrarArea && (
              <>
                <span aria-hidden="true" className="mx-2 text-linha">
                  /
                </span>
                {buscarArea(documento.area).nome}
              </>
            )}
          </p>

          {temLeitura ? (
            <h4 className="mt-2">
              <button
                type="button"
                onClick={() => setAberto((valor) => !valor)}
                aria-expanded={aberto}
                aria-controls={idLeitura}
                className="text-left font-display text-xl font-normal leading-snug text-tinta transition-colors hover:text-argila-forte sm:text-[1.375rem]"
              >
                {documento.titulo}
              </button>
            </h4>
          ) : (
            <h4 className="mt-2 font-display text-xl font-normal leading-snug text-tinta sm:text-[1.375rem]">
              {documento.titulo}
            </h4>
          )}

          <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-grafite">
            {documento.descricao}
          </p>

          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-pedra-escura">
            <span className="inline-flex items-center gap-1.5">
              {externo ? (
                <Link2 aria-hidden="true" strokeWidth={1.4} className="h-3.5 w-3.5" />
              ) : (
                <FileText aria-hidden="true" strokeWidth={1.4} className="h-3.5 w-3.5" />
              )}
              {externo ? 'Página online' : documento.tipo}
            </span>
            <span aria-hidden="true" className="text-linha">
              |
            </span>
            <span>Atualizado em {documento.dataAtualizacao}</span>
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {externo ? (
            <a
              href={documento.arquivo}
              target="_blank"
              rel="noopener noreferrer"
              className={classeBotaoPrincipal}
            >
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
              Abrir
              <span className="sr-only">{documento.titulo} em nova aba</span>
            </a>
          ) : (
            <>
              {temLeitura ? (
                <button
                  type="button"
                  onClick={() => setAberto((valor) => !valor)}
                  aria-expanded={aberto}
                  aria-controls={idLeitura}
                  className={classeBotaoSecundario}
                >
                  <BookOpen aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                  {aberto ? 'Fechar leitura' : 'Ler aqui'}
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className={cn(
                      'h-4 w-4 transition-transform duration-300',
                      aberto && 'rotate-180',
                    )}
                  />
                  <span className="sr-only">{documento.titulo}</span>
                </button>
              ) : (
                <a
                  href={documento.arquivo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classeBotaoSecundario}
                >
                  <Eye aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                  Visualizar
                  <span className="sr-only">{documento.titulo}</span>
                </a>
              )}
              <a
                href={documento.arquivo}
                download={nomeArquivo}
                className={classeBotaoPrincipal}
              >
                <Download aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
                Baixar
                <span className="sr-only">{documento.titulo}</span>
              </a>
            </>
          )}
        </div>
      </div>

      {temLeitura && aberto && (
        <div id={idLeitura}>
          <LeitorDocumento
            caminho={documento.conteudo as string}
            arquivo={documento.arquivo}
            titulo={documento.titulo}
          />
        </div>
      )}
    </li>
  )
}
