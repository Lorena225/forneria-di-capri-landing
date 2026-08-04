import { Compass, Megaphone, type LucideIcon } from 'lucide-react'

/* =========================================================================
   ARQUIVO ÚNICO DE DADOS — Forneria Di Capri
   Estrutura em duas macroáreas: Posicionamento de Marca e Marketing Digital.
   Para publicar um novo material, acrescente um objeto em "documentos".
   ========================================================================= */

export type EscolaId = 'forneria-di-capri'
export type AreaId = 'posicionamento' | 'marketing'
export type TipoArquivo = 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'Link'

export interface Documento {
  id: string
  titulo: string
  descricao: string
  escolas: EscolaId[]
  area: AreaId
  /** Deve ser um dos itens listados na macroárea correspondente. */
  categoria: string
  tipo: TipoArquivo
  dataAtualizacao: string // formato dd/mm/aaaa
  /** Caminho em public/ (ex.: /documentos/arquivo.pdf) ou endereço externo */
  arquivo: string
  /** Texto do documento exibido na própria página, em public/conteudos/ */
  conteudo?: string
  /** Material em evidência: aparece primeiro no grupo, com destaque visual. */
  destaque?: boolean
  /**
   * Versão em PDF do material, quando o arquivo original for DOCX ou XLSX.
   * Preenchido, a ficha do documento passa a oferecer também "Baixar em PDF".
   */
  arquivoPdf?: string
}

export interface Escola {
  id: EscolaId
  nome: string
  descricao: string
  logo: string
}

export interface Area {
  id: AreaId
  ordem: string
  nome: string
  descricao: string
  /** Frase de apoio exibida quando a área é aberta. */
  apoio: string
  /** Escopo da macroárea — as categorias que ela reúne. */
  itens: string[]
  icone: LucideIcon
  /** Cor de apoio da área: define o acento visual do card. */
  acento: 'sereno' | 'argila' | 'pedra'
}

/* ------------------------------------------------------------------------
   CLIENTE ATENDIDO
   ------------------------------------------------------------------------ */
export const escolas: Escola[] = [
  {
    id: 'forneria-di-capri',
    nome: 'Forneria Di Capri',
    descricao: 'Casa italiana contemporânea de Brasília',
    logo: '/logo-forneria.png',
  },
]

export const buscarEscola = (id: EscolaId): Escola =>
  escolas.find((escola) => escola.id === id) as Escola

export const nomeEscola = (id: EscolaId): string =>
  escolas.find((escola) => escola.id === id)?.nome ?? id

export const rotuloEscolas = (ids: EscolaId[]): string =>
  ids.map(nomeEscola).join(' e ')

/** Materiais hospedados fora da página (brandbooks, painéis, sistemas). */
export const ehLinkExterno = (documento: Documento): boolean =>
  documento.arquivo.startsWith('http')

/* ------------------------------------------------------------------------
   ÁREAS DA CONSULTORIA
   ------------------------------------------------------------------------ */
export const areas: Area[] = [
  {
    id: 'posicionamento',
    ordem: '01',
    nome: 'Posicionamento de Marca',
    descricao:
      'A base estratégica que orienta toda a comunicação da Forneria Di Capri. Aqui estão os materiais que constroem a identidade, a alma e o vocabulário da marca — do diagnóstico inicial ao manual completo de posicionamento.',
    apoio:
      'Materiais que sustentam a identidade da marca, a clareza do posicionamento e a base conceitual da consultoria.',
    itens: [
      'Diagnóstico estratégico',
      'Posicionamento de marca',
      'Identidade de perfil digital',
      'Kickoff estratégico',
    ],
    icone: Compass,
    acento: 'sereno',
  },
  {
    id: 'marketing',
    ordem: '02',
    nome: 'Marketing e Mídias Sociais',
    descricao:
      'A tradução da estratégia em comunicação, conteúdo e presença digital. Este bloco reúne planejamentos mensais, calendários editoriais e materiais de apoio para fortalecer o posicionamento da marca nas redes sociais.',
    apoio:
      'Materiais ligados à gestão de mídias sociais, ao calendário estratégico, à presença digital e à construção de relacionamento com o público.',
    itens: [
      'Planejamento mensal',
      'Calendários editoriais',
      'Estratégia de conteúdo',
      'Identidade de perfil digital',
    ],
    icone: Megaphone,
    acento: 'argila',
  },
]

export const buscarArea = (id: AreaId): Area =>
  areas.find((area) => area.id === id) as Area

/* ------------------------------------------------------------------------
   DOCUMENTOS
   ------------------------------------------------------------------------ */
export const documentos: Documento[] = [
  // ----- Posicionamento de Marca ------------------------------------------
  {
    id: 'doc-kickoff',
    titulo: 'Kickoff Estratégico VirtruvIA × Forneria Di Capri',
    descricao:
      'Apresentação de abertura da consultoria: contexto do projeto, metodologia de trabalho, cronograma de entregas e alinhamento estratégico inicial entre a VirtruvIA e os sócios da Forneria.',
    escolas: ['forneria-di-capri'],
    area: 'posicionamento',
    categoria: 'Kickoff estratégico',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/kickoff-estrategico-v2.pdf',
    destaque: true,
  },
  {
    id: 'doc-diagnostico',
    titulo: 'Diagnóstico 360° — Forneria Di Capri',
    descricao:
      'Levantamento completo da operação, público, concorrência, presença digital e metas do negócio. Base de dados que orientou toda a construção estratégica da consultoria.',
    escolas: ['forneria-di-capri'],
    area: 'posicionamento',
    categoria: 'Diagnóstico estratégico',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/diagnostico-360.pdf',
  },
  {
    id: 'doc-posicionamento',
    titulo: 'Manual de Posicionamento Estratégico de Marca',
    descricao:
      'Documento central da consultoria: alma da marca, posicionamento em uma linha, frase-mãe, as seis palavras-âncora (mesa, casa, forno, massa, vinho, sabor), tom de voz, arquétipos de público e sistema digital de marca.',
    escolas: ['forneria-di-capri'],
    area: 'posicionamento',
    categoria: 'Posicionamento de marca',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/posicionamento-marca-v2.pdf',
  },
  {
    id: 'doc-bio',
    titulo: 'Proposta de Posicionamento e Identidade do Perfil',
    descricao:
      'Apresentação com opções de bio, estratégia de destaques do Instagram e linguagem de perfil — construída para posicionar a Forneria como casa italiana contemporânea de Brasília.',
    escolas: ['forneria-di-capri'],
    area: 'posicionamento',
    categoria: 'Identidade de perfil digital',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/apresentacao-nova-bio-dicapri.pdf',
  },

  // ----- Marketing e Mídias Sociais ---------------------------------------
  {
    id: 'doc-planejamento-julho',
    titulo: 'Planejamento Mensal — Julho 2026',
    descricao:
      'Planejamento estratégico completo de julho: objetivo do mês, cinco arcos de conteúdo semanais, grade de publicações com tema, formato, objetivo criativo e CTA para cada post, além da estrutura de stories de apoio.',
    escolas: ['forneria-di-capri'],
    area: 'marketing',
    categoria: 'Planejamento mensal',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/planejamento-julho-2026.pdf',
    destaque: true,
  },
  {
    id: 'doc-calendario-junho',
    titulo: 'Calendário Editorial — Junho 2026',
    descricao:
      'Grade editorial de junho organizada por semanas: objetivo semanal, três posts de feed e cinco stories por semana. Temas centrais: Dia dos Namorados, técnica com Dani Branca, harmonização de vinhos e convite à reserva.',
    escolas: ['forneria-di-capri'],
    area: 'marketing',
    categoria: 'Calendários editoriais',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/calendario-junho-2026.pdf',
  },
  {
    id: 'doc-calendario-maio',
    titulo: 'Calendário Editorial — Maio 2026',
    descricao:
      'Estratégia editorial de maio estruturada como sistema narrativo: pilares "A Casa", Dia das Mães, "Vinho e Ocasião" e "A Casa é Sua". Inclui formatos, funções de cada post e estrutura de stories com forno, salão, mesa pronta e UGC.',
    escolas: ['forneria-di-capri'],
    area: 'marketing',
    categoria: 'Calendários editoriais',
    tipo: 'PDF',
    dataAtualizacao: '03/08/2026',
    arquivo: '/documentos/calendario-maio-2026.pdf',
  },
]
