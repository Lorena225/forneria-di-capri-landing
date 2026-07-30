import {
  Compass,
  Gem,
  GraduationCap,
  Megaphone,
  Workflow,
  type LucideIcon,
} from 'lucide-react'

/* =========================================================================
   ARQUIVO ÚNICO DE DADOS
   Todo o conteúdo da página vem daqui. Para publicar um novo material,
   basta acrescentar um objeto na lista "documentos", no final do arquivo.
   ========================================================================= */

export type EscolaId = 'ineprotec' | 'matricula-ead'
export type AreaId =
  | 'pesquisa-de-mercado'
  | 'posicionamento-de-marca'
  | 'marketing'
  | 'estruturacao-comercial'
  | 'treinamentos'
export type TipoArquivo = 'PDF' | 'DOCX' | 'PPTX' | 'XLSX' | 'Link'

export interface Documento {
  id: string
  titulo: string
  descricao: string
  /** Uma escola, ou as duas quando o material for comum às duas operações. */
  escolas: EscolaId[]
  area: AreaId
  categoria: string
  tipo: TipoArquivo
  dataAtualizacao: string // formato dd/mm/aaaa
  /** Caminho em public/ (ex.: /documentos/arquivo.pdf) ou endereço externo (https://...) */
  arquivo: string
  /**
   * Texto do documento, exibido na própria página ao abrir o material.
   * Os arquivos ficam em public/conteudos/ e são gerados a partir dos
   * documentos originais. Deixe vazio quando não houver texto para ler.
   */
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
  resumo: string
  descricao: string
  categorias: string[]
  icone: LucideIcon
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
   FRENTES DE TRABALHO (os cinco blocos da página)
   A ordem reproduz a sequência do trabalho: entender o mercado, definir a
   marca, comunicar, organizar a venda e capacitar a equipe.
   ------------------------------------------------------------------------ */
export const areas: Area[] = [
  {
    id: 'pesquisa-de-mercado',
    ordem: 'I',
    nome: 'Pesquisa de mercado',
    resumo: 'O ponto de partida: entender o terreno antes de decidir.',
    descricao:
      'Análises desenvolvidas para compreender o cenário educacional, os concorrentes, os públicos e as oportunidades de diferenciação das instituições.',
    categorias: [
      'Análise de mercado',
      'Cenário competitivo',
      'Referências do segmento',
      'Análise de concorrentes',
      'Oportunidades identificadas',
      'Perfis de público',
      'Pesquisas complementares',
    ],
    icone: Compass,
  },
  {
    id: 'posicionamento-de-marca',
    ordem: 'II',
    nome: 'Posicionamento de marca',
    resumo: 'A definição do que cada instituição representa e por quê.',
    descricao:
      'Diretrizes estratégicas construídas para fortalecer a percepção das marcas, seus diferenciais e a consistência da comunicação.',
    categorias: [
      'Diagnóstico de posicionamento',
      'Estratégia de marca',
      'Proposta de valor',
      'Diferenciais competitivos',
      'Pilares de comunicação',
      'Identidade verbal',
      'Brandbook',
      'Diretrizes visuais',
    ],
    icone: Gem,
  },
  {
    id: 'marketing',
    ordem: 'III',
    nome: 'Marketing',
    resumo: 'A tradução da estratégia em comunicação e campanhas.',
    descricao:
      'Planejamentos e materiais criados para orientar a comunicação, as campanhas e a produção de conteúdo das instituições.',
    categorias: [
      'Planejamento estratégico',
      'Calendários de marketing',
      'Calendários editoriais',
      'Campanhas',
      'Conteúdos e posts',
      'Criativos',
      'Funis de vendas',
      'Materiais de apoio',
      'Eventos e datas sazonais',
    ],
    icone: Megaphone,
  },
  {
    id: 'estruturacao-comercial',
    ordem: 'IV',
    nome: 'Estruturação comercial',
    resumo: 'A organização do atendimento e da rotina de vendas.',
    descricao:
      'Processos, materiais e orientações desenvolvidos para organizar a operação comercial e melhorar o atendimento aos potenciais alunos.',
    categorias: [
      'Diagnóstico comercial',
      'Processos comerciais',
      'Organização do funil de vendas',
      'Etapas da jornada do lead',
      'Scripts de atendimento',
      'Cadências de contato',
      'Configuração e organização do CRM',
      'Procedimentos comerciais',
      'Materiais para a equipe',
    ],
    icone: Workflow,
  },
  {
    id: 'treinamentos',
    ordem: 'V',
    nome: 'Treinamentos',
    resumo: 'A passagem do conhecimento para quem executa todos os dias.',
    descricao:
      'Conteúdos utilizados para capacitar as equipes e apoiar a aplicação prática das estratégias desenvolvidas.',
    categorias: [
      'Treinamentos de marketing',
      'Treinamentos comerciais',
      'Treinamentos de CRM',
      'Apresentações',
      'Manuais',
      'Guias práticos',
      'Materiais complementares',
    ],
    icone: GraduationCap,
  },
]

export const buscarArea = (id: AreaId): Area =>
  areas.find((area) => area.id === id) as Area

/* ------------------------------------------------------------------------
   DOCUMENTOS

   Materiais reais entregues à Ineprotec e à Matrícula EAD.
   Os arquivos ficam em public/documentos/ e os brandbooks apontam para
   endereços externos.

   ⚠️ CONFERIR AS DATAS: todos os registros abaixo estão com a data de
   publicação desta página (29/07/2026). Ajuste o campo dataAtualizacao de
   cada documento para a data real da última versão.

   Modelo de um novo registro:
   {
     id: 'documento-13',                        // identificador único
     titulo: 'Nome do documento',
     descricao: 'Breve descrição do material',
     escolas: ['ineprotec'],                    // uma ou as duas escolas
     area: 'marketing',                         // uma das cinco áreas
     categoria: 'Calendários editoriais',
     tipo: 'PDF',                               // PDF | DOCX | PPTX | XLSX | Link
     dataAtualizacao: '29/07/2026',             // sempre dd/mm/aaaa
     arquivo: '/documentos/nome-do-arquivo.pdf',
   }
   ------------------------------------------------------------------------ */
export const documentos: Documento[] = [
  // ----- Posicionamento de marca ---------------------------------------
  {
    id: 'documento-01',
    titulo: 'Brandbook Ineprotec',
    descricao:
      'Documento de marca da Ineprotec: essência, atributos, identidade visual e diretrizes de aplicação da comunicação.',
    escolas: ['ineprotec'],
    area: 'posicionamento-de-marca',
    categoria: 'Brandbook',
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
    area: 'posicionamento-de-marca',
    categoria: 'Brandbook',
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
    categoria: 'Calendários editoriais',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/calendario-estrategico-julho-matricula-ead.docx',
    conteudo: '/conteudos/calendario-estrategico-julho-matricula-ead.md',
  },

  // ----- Estruturação comercial ----------------------------------------
  {
    id: 'documento-07',
    titulo: 'Configuração do Kommo CRM',
    descricao:
      'Estrutura completa da conta para implantação: funis e etapas, campos personalizados, tags, catálogo de cursos, salesbots, automações, integrações, motivos de perda e permissões.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'estruturacao-comercial',
    categoria: 'Configuração e organização do CRM',
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
    area: 'estruturacao-comercial',
    categoria: 'Procedimentos comerciais',
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
    area: 'estruturacao-comercial',
    categoria: 'Scripts de atendimento',
    tipo: 'DOCX',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/script-vendas-matricula-ead.docx',
    conteudo: '/conteudos/script-vendas-matricula-ead.md',
  },

  // ----- Treinamentos ---------------------------------------------------
  {
    id: 'documento-10',
    titulo: 'Treinamento de supervisão comercial no Kommo CRM',
    descricao:
      'Formação da supervisão: estrutura dos dois funis, etapas, auditoria dos atendimentos da IA e dos consultores, atividades, filtros, relatórios e rotinas diária e semanal.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'treinamentos',
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
    area: 'treinamentos',
    categoria: 'Treinamentos comerciais',
    tipo: 'PDF',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/treinamento-excelencia-atendimento-cultura-comercial.pdf',
    conteudo: '/conteudos/treinamento-excelencia-atendimento-cultura-comercial.md',
  },

  /* ⚠️ PENDENTE — o arquivo ainda não foi enviado.
     Assim que o "Manual de treinamento dos consultores — comercial" estiver
     em public/documentos/, remova os barra-asterisco e confira o nome do arquivo.

  {
    id: 'documento-12',
    titulo: 'Manual de treinamento dos consultores — comercial',
    descricao:
      'Manual de apoio dos consultores sobre o funil comercial e a performance de atendimento das duas escolas.',
    escolas: ['ineprotec', 'matricula-ead'],
    area: 'treinamentos',
    categoria: 'Manuais',
    tipo: 'PDF',
    dataAtualizacao: '29/07/2026',
    arquivo: '/documentos/manual-treinamento-consultores-comercial.pdf',
  },
  */
]
