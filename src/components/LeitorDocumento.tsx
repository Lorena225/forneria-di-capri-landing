import { useEffect, useState, type ReactNode } from 'react'
import { ArrowUpRight, LoaderCircle, TriangleAlert } from 'lucide-react'

interface Props {
  /** Caminho do conteúdo em texto, ex.: /conteudos/arquivo.md */
  caminho: string
  /** Caminho do arquivo original, para o link de abertura */
  arquivo: string
  titulo: string
}

/* -------------------------------------------------------------------------
   Renderização do conteúdo
   O texto dos documentos é convertido para um subconjunto de Markdown:
   títulos, parágrafos, listas e tabelas. O trecho abaixo transforma esse
   texto em elementos React, sem inserir HTML.
   ------------------------------------------------------------------------- */

/** Trata **negrito** dentro de uma linha. */
function comNegrito(texto: string): ReactNode[] {
  return texto.split('**').map((parte, indice) =>
    indice % 2 === 1 ? (
      <strong key={indice} className="font-semibold text-tinta">
        {parte}
      </strong>
    ) : (
      <span key={indice}>{parte}</span>
    ),
  )
}

const ehSeparadorDeTabela = (linha: string) =>
  /^\|[\s|:-]+\|$/.test(linha.trim()) && linha.includes('-')

function celulas(linha: string): string[] {
  return linha
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((celula) => celula.trim())
}

function Tabela({ linhas }: { linhas: string[] }) {
  const temCabecalho = linhas.length > 1 && ehSeparadorDeTabela(linhas[1])
  const cabecalho = temCabecalho ? celulas(linhas[0]) : null
  const corpo = (temCabecalho ? linhas.slice(2) : linhas)
    .filter((linha) => !ehSeparadorDeTabela(linha))
    .map(celulas)
  const colunas = Math.max(cabecalho?.length ?? 0, ...corpo.map((l) => l.length), 1)

  return (
    <div className="rolagem-discreta my-5 overflow-x-auto rounded-md border border-linha">
      <table
        className="w-full border-collapse text-left text-[0.8125rem]"
        style={
          colunas > 5 ? { minWidth: `${Math.min(colunas * 7.5, 80)}rem` } : undefined
        }
      >
        {cabecalho && (
          <thead>
            <tr className="bg-sereno-claro/70">
              {cabecalho.map((celula, indice) => (
                <th
                  key={indice}
                  scope="col"
                  className="border-b border-linha px-3 py-2.5 align-top font-medium text-tinta"
                >
                  {comNegrito(celula)}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {corpo.map((linha, indiceLinha) => (
            <tr key={indiceLinha} className="align-top even:bg-areia-clara/30">
              {linha.map((celula, indice) => (
                <td
                  key={indice}
                  className="border-b border-linha/70 px-3 py-2.5 leading-relaxed text-grafite"
                >
                  {comNegrito(celula)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function renderizar(texto: string): ReactNode[] {
  const linhas = texto.split('\n')
  const blocos: ReactNode[] = []
  let itens: string[] = []
  let ordenada = false
  let tabela: string[] = []
  let chave = 0

  const fecharLista = () => {
    if (itens.length === 0) return
    const conteudo = itens.map((item, indice) => (
      <li key={indice} className="pl-1 leading-relaxed">
        {comNegrito(item)}
      </li>
    ))
    blocos.push(
      ordenada ? (
        <ol
          key={`lista-${chave++}`}
          className="my-4 list-decimal space-y-1.5 pl-5 text-[0.9375rem] text-grafite"
        >
          {conteudo}
        </ol>
      ) : (
        <ul
          key={`lista-${chave++}`}
          className="my-4 list-disc space-y-1.5 pl-5 text-[0.9375rem] text-grafite marker:text-argila/60"
        >
          {conteudo}
        </ul>
      ),
    )
    itens = []
  }

  const fecharTabela = () => {
    if (tabela.length === 0) return
    blocos.push(<Tabela key={`tabela-${chave++}`} linhas={tabela} />)
    tabela = []
  }

  const fecharTudo = () => {
    fecharLista()
    fecharTabela()
  }

  for (const linhaBruta of linhas) {
    const linha = linhaBruta.trim()

    if (!linha) {
      fecharTudo()
      continue
    }

    if (linha.startsWith('|')) {
      fecharLista()
      tabela.push(linha)
      continue
    }

    const titulo = /^(#{1,4})\s+(.*)$/.exec(linha)
    if (titulo) {
      fecharTudo()
      const nivel = titulo[1].length
      const conteudo = titulo[2]
      if (nivel === 1) continue // o título já aparece no cabeçalho do item
      if (nivel === 2) {
        blocos.push(
          <h5
            key={`t-${chave++}`}
            className="mb-3 mt-8 border-t border-linha pt-6 font-display text-[1.375rem] font-normal leading-snug text-tinta first:mt-0 first:border-0 first:pt-0"
          >
            {conteudo}
          </h5>,
        )
      } else {
        blocos.push(
          <h6
            key={`t-${chave++}`}
            className="mb-2 mt-6 text-[0.9375rem] font-semibold text-tinta"
          >
            {conteudo}
          </h6>,
        )
      }
      continue
    }

    const marcador = /^[-*]\s+(.*)$/.exec(linha)
    if (marcador) {
      fecharTabela()
      if (ordenada) fecharLista()
      ordenada = false
      itens.push(marcador[1])
      continue
    }

    const numerado = /^\d{1,2}\.\s+(.*)$/.exec(linha)
    if (numerado) {
      fecharTabela()
      if (!ordenada) fecharLista()
      ordenada = true
      itens.push(numerado[1])
      continue
    }

    fecharTudo()

    const enfatizado = /^_(.+)_$/.exec(linha)
    if (enfatizado) {
      blocos.push(
        <p key={`p-${chave++}`} className="my-2 text-[0.875rem] italic text-pedra-escura">
          {enfatizado[1]}
        </p>,
      )
      continue
    }

    blocos.push(
      <p
        key={`p-${chave++}`}
        className="my-3 text-[0.9375rem] leading-relaxed text-grafite"
      >
        {comNegrito(linha)}
      </p>,
    )
  }

  fecharTudo()
  return blocos
}

export function LeitorDocumento({ caminho, arquivo, titulo }: Props) {
  const [texto, setTexto] = useState<string | null>(null)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    let ativo = true
    setTexto(null)
    setErro(false)

    fetch(caminho)
      .then((resposta) => {
        if (!resposta.ok) throw new Error(String(resposta.status))
        return resposta.text()
      })
      .then((conteudo) => {
        if (ativo) setTexto(conteudo)
      })
      .catch(() => {
        if (ativo) setErro(true)
      })

    return () => {
      ativo = false
    }
  }, [caminho])

  return (
    <div className="mt-6 rounded-lg border border-linha bg-areia-clara/40 px-5 py-6 sm:px-7">
      <p className="rotulo-tecnico mb-4 border-b border-linha pb-3">Conteúdo do documento</p>

      {erro ? (
        <p className="flex items-start gap-2 text-[0.9375rem] text-grafite">
          <TriangleAlert
            aria-hidden="true"
            strokeWidth={1.5}
            className="mt-0.5 h-4 w-4 shrink-0 text-pedra-escura"
          />
          Não foi possível carregar o conteúdo deste documento. Use o botão Baixar para
          abrir o arquivo original.
        </p>
      ) : texto === null ? (
        <p
          aria-live="polite"
          className="flex items-center gap-2 text-[0.9375rem] text-pedra-escura"
        >
          <LoaderCircle
            aria-hidden="true"
            strokeWidth={1.5}
            className="h-4 w-4 animate-spin"
          />
          Carregando o conteúdo…
        </p>
      ) : (
        <>
          <div className="max-w-[70ch]">{renderizar(texto)}</div>
          <p className="mt-8 border-t border-linha pt-5 text-[0.8125rem] text-pedra-escura">
            Este é o texto do documento, apresentado para leitura rápida. Para a versão
            formatada, use o botão Baixar ou{' '}
            <a
              href={arquivo}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sublinhado inline-flex items-center gap-1 text-tinta"
            >
              abra o arquivo original
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="h-3.5 w-3.5" />
              <span className="sr-only">de {titulo}</span>
            </a>
            .
          </p>
        </>
      )}
    </div>
  )
}
