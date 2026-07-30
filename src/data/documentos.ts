import { Compass, Megaphone, Workflow, type LucideIcon } from 'lucide-react'

/* =========================================================================
   ARQUIVO ÚNICO DE DADOS
   Estrutura em três macroáreas: Fundação estratégica, Marketing e Comercial.
   Para publicar um novo material, acrescente um objeto em "documentos".
   ========================================================================= */

export type EscolaId = 'ineprotec' | 'matricula-ead'
export type AreaId = 'fundacao-estrategica' | 'marketing' | 'comercial'
export type TipoArquivo = 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'Link'

export interface Documento {
  id: string
  titulo: string
  descricao: string
  /** Uma escola, ou as duas quando o material for comum às duas operações. */
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
}

export interface Escola {
  id: EscolaId
  nome: string
  descricao: string
}

export interface Area {
  id: AreaId
  ordem: string
  nome: string
  descricao: string
  /** Escopo da macroárea — as categorias que ela reúne. */
  itens: string[]
  icone: LucideIcon
  /** Cor de apoio da área: define o acento visual do card. */
  acento: 'sereno' | 'argila' | 'pedra'
}

/* ------------------------------------------------------------------------
   INSTITUIÇÕES ATENDIDAS
   ------------------------------------------------------------------------ */
export const escolas: Escola[] = [
  {
    id: 'ineprotec',
    nome: 'Ineprotec',
    descricao: 'Cursos técnicos e profissionalizantes',
  },
  {
    id: 'matricula-ead',
    nome: 'Matrícula EAD',
    descricao: 'Graduação e pós-graduação a distância',
  },
]

export const nomeEscola = (id: EscolaId): string =>
  escolas.find((escola) => escola.id === id)?.nome ?? id

/** "Ineprotec" ou "Ineprotec e Matrícula EAD" */
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
    id: 'fundacao-estrategica',
    ordem: '01',
    nome: 'Fundação estratégica',
    descricao:
      'A base que orienta toda a consultoria. Aqui estão os materiais que ajudam a compreender cenário, diferenciação, proposta de valor e direcionamento das marcas antes da execução.',
    itens: ['Pesquisa de mercado', 'Posicionamento de marca'],
    icone: Compass,
    acento: 'sereno',
  },
  {
    id: 'marketing',
    ordem: '02',
    nome: 'Marketing',
    descricao:
      'A tradução da estratégia em comunicação, campanhas e presença de marca. Este bloco reúne planejamentos, calendários, conteúdos e materiais de apoio para fortalecer atração, percepção e relacionamento.',
    itens: [
      'Planejamento estratégico',
      'Calendários de marketing',
      'Calendários editoriais',
      'Campanhas',
      'Conteúdos e posts',
      'Treinamentos de marketing',
    ],
    icone: Megaphone,
    acento: 'argila',
  },
  {
    id: 'comercial',
    ordem: '03',
    nome: 'Comercial',
    descricao:
      'A organização da operação para vender com mais clareza, consistência e eficiência. Aqui estão os materiais ligados a processos, funil, atendimento, CRM e treinamento das equipes comerciais.',
    itens: [
      'Diagnóstico comercial',
      'Processos comerciais',
      'Organização do funil de vendas',
      'Etapas da jornada do lead',
      'Scripts de atendimento',
      'Treinamentos comerciais',
      'Treinamentos de CRM',
    ],
    icone: Workflow,
    acento: 'pedra',
  },
]

export const buscarArea = (id: AreaId): Area =>
  areas.find((area) => area.id === id) as Area

/* ------------------------------------------------------------------------
   DOCUMENTOS

   ⚠️ CONFERIR AS DATAS: todos os registros estão com a data de publicação
   desta página (29/07/2026). Ajuste dataAtualizacao para a data real.
   ------------------------------------------------------------------------ */
export const documentos: Documento[] = [
  // ----- Fundação estratégica ------------------------------------------
  {
    id: 'documento-01',
    titulo: 'Brandbook Ineprotec',
    descricao:
      'Documento de marca da Ineprotec: essência, atributos, identidade visual e diretrizes de aplicação da comunicação.',
    escolas: ['ineprotec'],
    area: 'fundacao-estrategica',
    categoria: 'Posicionamento de marca',
    tipo: 'Link',
    dataAtualizacao: '29/07/2026',
    arquivo: 'https://ineprotec-branding.manus.space/',
  },
  {
    id: 'documento-02',
    titulo: 'Brandbook Matrícula EAD',
    descricao:
      'Documento de marca da Matrícula EAD: essência, atributos, identidade visual e diretrizes de aplicação da comunicação.',
    escolas: ['matricula-ead'],
    area: 'fundacao-estrategica',
    categoria: 'Posicionamento de marca',
    tipo: 'Link',
    dataAtualizacao: '29/07/2026',
    arquivo: 'https://branding-matriculaead.manus.space/',
  },

  // ----- Marketing ------------------------------------------------------
  {
    id: 'documento-03',
    titulo: 'Calendário de junho — Ineprotec',
    descricao:
      'Bases do novo posicionamento da escola e plano de publicações do mês, apoiado em prova de credibilidade, Brasília como território e o aluno como protagonista.',
    escolas: ['ineprotec'],
    area: 'marketing',
    categoria: 'Calendários editoriais',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/calendario-junho-ineprotec.docx',
    conteudo: '/conteudos/calendario-junho-ineprotec.md',
  },
  {
    id: 'documento-04',
    titulo: 'Calendário de junho — Matrícula EAD',
    descricao:
      'Grade de publicações do mês organizada por pilar, formato, tema e gancho, cobrindo marca, modalidades, cursos e jornada do aluno.',
    escolas: ['matricula-ead'],
    area: 'marketing',
    categoria: 'Calendários editoriais',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/calendario-junho-matricula-ead.docx',
    conteudo: '/conteudos/calendario-junho-matricula-ead.md',
  },
  {
    id: 'documento-05',
    titulo: 'Calendário editorial de julho — Ineprotec',
    descricao:
      'Plano semanal de feed e stories com objetivo, gancho e estratégia de interação por publicação, além da distribuição editorial e das metas semanais.',
    escolas: ['ineprotec'],
    area: 'marketing',
    categoria: 'Calendários editoriais',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/calendario-editorial-julho-ineprotec.docx',
    conteudo: '/conteudos/calendario-editorial-julho-ineprotec.md',
  },
  {
    id: 'documento-06',
    titulo: 'Calendário estratégico de julho — Matrícula EAD',
    descricao:
      'Feed e stories integrados, com o mês estruturado para responder por que confiar na Matrícula EAD e reforçar orientação e acompanhamento.',
    escolas: ['matricula-ead'],
    area: 'marketing',
    categoria: 'Calendários de marketing',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/calendario-estrategico-julho-matricula-ead.docx',
    conteudo: '/conteudos/calendario-estrategico-julho-matricula-ead.md',
  },

  // ----- Comercial ------------------------------------------------------
  {
    id: 'documento-07',
    titulo: 'Configuração do Kommo CRM',
    descricao:
      'Estrutura completa da conta para implantação: funis e etapas, campos personalizados, tags, catálogo de cursos, salesbots, automações, integrações, motivos de perda e permissões.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'comercial',
    categoria: 'Processos comerciais',
    tipo: 'XLSX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/configuracao-kommo-v2.xlsx',
    conteudo: '/conteudos/configuracao-kommo-v2.md',
  },
  {
    id: 'documento-08',
    titulo: 'Controle de atividades do CRM',
    descricao:
      'Catálogo oficial das atividades de cada escola, com código, etapa do funil, tipo, instrução de uso, ação correspondente no CRM, responsável e prazo.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'comercial',
    categoria: 'Etapas da jornada do lead',
    tipo: 'XLSX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/controle-de-atividades-ine-mat.xlsx',
    conteudo: '/conteudos/controle-de-atividades-ine-mat.md',
  },
  {
    id: 'documento-09',
    titulo: 'Script de vendas — Matrícula EAD',
    descricao:
      'Roteiro de atendimento por perfil de lead, da abertura ao fechamento, com perguntas de diagnóstico, modelos de validação e condução até a matrícula.',
    escolas: ['matricula-ead'],
    area: 'comercial',
    categoria: 'Scripts de atendimento',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/script-vendas-matricula-ead.docx',
    conteudo: '/conteudos/script-vendas-matricula-ead.md',
  },
  {
    id: 'documento-10',
    titulo: 'Treinamento de supervisão comercial no Kommo CRM',
    descricao:
      'Formação da supervisão: estrutura dos dois funis, etapas, auditoria dos atendimentos da IA e dos consultores, atividades, filtros, relatórios e rotinas diária e semanal.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'comercial',
    categoria: 'Treinamentos de CRM',
    tipo: 'PDF',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/treinamento-supervisao-comercial-kommo-crm.pdf',
    conteudo: '/conteudos/treinamento-supervisao-comercial-kommo-crm.md',
  },
  {
    id: 'documento-11',
    titulo: 'Treinamento de excelência no atendimento e cultura comercial',
    descricao:
      'Cultura comercial das duas escolas: posicionamento, empatia, escuta ativa, perfis de lead, os sete pilares do atendimento, objeções, follow-up e fechamento.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'comercial',
    categoria: 'Treinamentos comerciais',
    tipo: 'PDF',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/treinamento-excelencia-atendimento-cultura-comercial.pdf',
    conteudo: '/conteudos/treinamento-excelencia-atendimento-cultura-comercial.md',
  },

  /* ⚠️ PENDENTE — o arquivo ainda não foi enviado.
  {
    id: 'documento-12',
    titulo: 'Manual de treinamento dos consultores — comercial',
    descricao:
      'Manual de apoio dos consultores sobre o funil comercial e a performance de atendimento das duas escolas.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'comercial',
    categoria: 'Treinamentos comerciais',
    tipo: 'PDF',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/manual-treinamento-consultores-comercial.pdf',
  },
  */
]
