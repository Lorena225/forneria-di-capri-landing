import { useEffect, useMemo, useRef } from 'react'
import { X } from 'lucide-react'
import type { Area } from '../data/documentos'
import { documentos as todosDocumentos } from '../data/documentos'
import { filtrarDocumentos, ordenarPorData, plural } from '../lib/utils'
import type { FiltroInstituicao } from '../lib/utils'
import { SeletorInstituicaoSegmentado } from './SeletorInstituicao'
import { ItemDocumento } from './ItemDocumento'
import { EstadoVazio } from './EstadoVazio'

interface Props {
  area: Area
  instituicao: FiltroInstituicao
  aoTrocarInstituicao: (valor: FiltroInstituicao) => void
  busca: string
  aoLimparBusca: () => void
  aoFechar: () => void
}

const SELETOR_FOCAVEIS =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

export function ModalArea({
  area,
  instituicao,
  aoTrocarInstituicao,
  busca,
  aoLimparBusca,
  aoFechar,
}: Props) {
  const painelRef = useRef<HTMLDivElement>(null)
  const fecharRef = useRef<HTMLButtonElement>(null)

  const lista = useMemo(
    () =>
      ordenarPorData(
        filtrarDocumentos(todosDocumentos, { instituicao, busca, area: area.id }),
      ),
    [area.id, instituicao, busca],
  )

  /* Bloqueia a rolagem da página enquanto o popup estiver aberto. */
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

  /* Foco inicial, retorno do foco, Esc e navegação por Tab presa ao popup. */
  useEffect(() => {
    const elementoAnterior = document.activeElement as HTMLElement | null
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
      elementoAnterior?.focus?.()
    }
  }, [aoFechar])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 bg-tinta/45 backdrop-blur-[2px] animate-aparecer"
        onClick={aoFechar}
        aria-hidden="true"
      />

      <div
        ref={painelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-do-popup"
        aria-describedby="descricao-do-popup"
        className="relative flex max-h-[92vh] w-full max-w-4xl animate-modal-entrada flex-col rounded-t-xl bg-superficie shadow-modal sm:max-h-[86vh] sm:rounded-md"
      >
        {/* Cabeçalho do popup */}
        <div className="flex items-start justify-between gap-6 border-b border-linha px-6 pb-6 pt-7 sm:px-10 sm:pt-9">
          <div>
            <p className="rotulo">
              <span aria-hidden="true" className="font-display not-italic">
                {area.ordem}
              </span>
              <span aria-hidden="true" className="mx-2 text-linha">
                /
              </span>
              Frente de trabalho
            </p>
            <h2
              id="titulo-do-popup"
              className="mt-2 font-display text-[1.875rem] font-normal leading-tight text-tinta sm:text-4xl"
            >
              {area.nome}
            </h2>
            <p
              id="descricao-do-popup"
              className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-grafite"
            >
              {area.descricao}
            </p>
          </div>

          <button
            ref={fecharRef}
            type="button"
            onClick={aoFechar}
            className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-transparent text-neutro transition-colors hover:border-linha hover:bg-papel hover:text-tinta"
          >
            <X aria-hidden="true" strokeWidth={1.5} className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
          </button>
        </div>

        {/* Filtros do popup */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-linha bg-papel/70 px-6 py-4 sm:px-10">
          <SeletorInstituicaoSegmentado
            id="instituicao-popup"
            valor={instituicao}
            aoAlterar={aoTrocarInstituicao}
            tamanho="compacto"
          />
          <p className="text-[0.8125rem] text-neutro">
            {plural(lista.length, 'material', 'materiais')}
            {busca.trim().length > 0 && (
              <>
                {' para '}
                <span className="text-tinta">“{busca.trim()}”</span>
              </>
            )}
          </p>
        </div>

        {/* Lista de documentos */}
        <div className="rolagem-discreta flex-1 overflow-y-auto overscroll-contain px-6 sm:px-10">
          {lista.length > 0 ? (
            <ul className="pb-4">
              {lista.map((documento) => (
                <ItemDocumento key={documento.id} documento={documento} />
              ))}
            </ul>
          ) : (
            <div className="py-10">
              <EstadoVazio
                titulo="Nenhum material aqui ainda"
                mensagem={
                  busca.trim().length > 0
                    ? 'Nenhum documento desta frente corresponde à pesquisa e à instituição selecionadas. Ajuste os filtros para ver outros materiais.'
                    : 'Nenhum documento desta frente está disponível para a instituição selecionada. Escolha outra instituição para ver os materiais.'
                }
                acao={
                  busca.trim().length > 0
                    ? { rotulo: 'Limpar pesquisa', aoClicar: aoLimparBusca }
                    : { rotulo: 'Ver todos os materiais', aoClicar: () => aoTrocarInstituicao('todos') }
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
