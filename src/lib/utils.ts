import type { AreaId, Documento, EscolaId } from '../data/documentos'
import { rotuloEscolas } from '../data/documentos'

/** Junta classes condicionais sem dependências externas. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

/** Remove acentos e caixa para que a pesquisa funcione com ou sem acento. */
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export type FiltroInstituicao = 'todos' | EscolaId

export interface Filtros {
  instituicao: FiltroInstituicao
  busca: string
  area?: AreaId
}

/**
 * Aplica instituição, área e pesquisa livre.
 * A pesquisa considera título, descrição, categoria e instituição.
 */
export function filtrarDocumentos(
  documentos: Documento[],
  { instituicao, busca, area }: Filtros,
): Documento[] {
  const termo = normalizar(busca)
  const termos = termo.length > 0 ? termo.split(/\s+/) : []

  return documentos.filter((documento) => {
    if (area && documento.area !== area) return false
    if (instituicao !== 'todos' && !documento.escolas.includes(instituicao)) return false
    if (termos.length === 0) return true

    const conteudo = normalizar(
      [
        documento.titulo,
        documento.descricao,
        documento.categoria,
        rotuloEscolas(documento.escolas),
      ].join(' '),
    )

    return termos.every((parte) => conteudo.includes(parte))
  })
}

/** Converte "dd/mm/aaaa" em número comparável. */
function dataEmNumero(data: string): number {
  const [dia, mes, ano] = data.split('/').map(Number)
  if (!dia || !mes || !ano) return 0
  return ano * 10000 + mes * 100 + dia
}

/** Mais recentes primeiro. */
export function ordenarPorData(documentos: Documento[]): Documento[] {
  return [...documentos].sort(
    (a, b) => dataEmNumero(b.dataAtualizacao) - dataEmNumero(a.dataAtualizacao),
  )
}

/** "3 materiais" / "1 material" */
export function plural(quantidade: number, singular: string, plural: string): string {
  return `${quantidade} ${quantidade === 1 ? singular : plural}`
}
