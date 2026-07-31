/* =========================================================================
   TEXTOS DA PÁGINA
   Todo o conteúdo escrito da consultoria fica reunido aqui, separado dos
   componentes, para facilitar revisões de copy sem mexer no código.
   ========================================================================= */

export const hero = {
  titulo:
    'Entregas estratégicas para transformar posicionamento, marketing e operação comercial.',
  subtitulo:
    'Nesta página, reunimos os materiais, direcionamentos e documentos desenvolvidos pela VirtruvIA para o Ineprotec e a Matrícula EAD, com foco em clareza de marca, estrutura comercial e crescimento sustentável.',
}

export const resumo = {
  eyebrow: 'O que foi construído',
  titulo: 'Resumo da consultoria',
  texto:
    'Ao longo desta consultoria, a VirtruvIA estruturou uma base estratégica para duas instituições do setor educacional, organizando marca, marketing e operação comercial com uma visão prática de crescimento. O trabalho foi conduzido para transformar decisões dispersas em direcionamentos mais claros, consistentes e acionáveis no dia a dia.',
  itens: [
    'Diagnóstico das frentes de posicionamento, marketing e estrutura comercial.',
    'Organização de materiais estratégicos para apoiar decisões e execução.',
    'Desenvolvimento de direcionamentos para fortalecer comunicação, autoridade e conversão.',
    'Estruturação de uma lógica comercial mais alinhada à proposta de valor de cada instituição.',
    'Consolidação de uma base de consulta para continuidade, expansão e treinamento das equipes.',
  ],
}

export interface MiniCase {
  id: string
  titulo: string
  subtitulo: string
  texto: string
  desafio: string
  entregas: string
  foco: string
}

export const tituloInstituicoes = 'Duas operações, dois desafios'

export const miniCases: MiniCase[] = [
  {
    id: 'ineprotec',
    titulo: 'Ineprotec',
    subtitulo:
      'Formação técnica com posicionamento mais claro, comunicação mais estratégica e base comercial mais organizada.',
    texto:
      'Para o Ineprotec, a consultoria foi desenhada para fortalecer a percepção de marca, estruturar melhor a comunicação e apoiar uma operação mais coerente entre proposta de valor, marketing e comercial. O objetivo foi transformar o crescimento em algo menos improvisado e mais orientado por estratégia, clareza e consistência.',
    desafio:
      'Organizar a presença da marca e alinhar comunicação, estratégia e operação comercial para sustentar crescimento com mais clareza.',
    entregas:
      'Posicionamento, estruturação de marketing, organização comercial, materiais de apoio e direcionamentos para execução e treinamento.',
    foco: 'Conectar autoridade, percepção de valor e eficiência operacional em uma mesma linha de atuação.',
  },
  {
    id: 'matricula-ead',
    titulo: 'Matrícula EAD',
    subtitulo:
      'Estratégia para consolidar a comunicação, refinar a proposta de valor e apoiar uma operação comercial mais eficiente.',
    texto:
      'Na Matrícula EAD, a consultoria foi conduzida para estruturar melhor os fundamentos da marca e orientar uma comunicação mais segura, objetiva e convertida em resultado. O trabalho buscou alinhar posicionamento, marketing e rotina comercial para sustentar expansão com mais direção e menos ruído.',
    desafio:
      'Dar mais consistência à comunicação e construir uma base estratégica que apoie captação, relacionamento e vendas.',
    entregas:
      'Direcionamentos de posicionamento, materiais estratégicos, organização de frentes de marketing e apoio à estrutura comercial.',
    foco: 'Fortalecer valor percebido, melhorar a comunicação com o público e aumentar a coerência da operação.',
  },
]

export const secaoAreas = {
  titulo: 'Áreas da consultoria',
  subtitulo:
    'Os materiais foram reorganizados por macroárea para tornar a consulta mais intuitiva entre estratégia, marketing e operação comercial.',
  introducao:
    'Em vez de percorrer as etapas do projeto, você entra pela área que interessa no momento. Escolha um dos três caminhos abaixo e o acervo se ajusta ao que pertence àquela frente.',
  chamada: 'Toque em uma área para ver seus materiais',
}

export const painel = {
  prefixo: 'Você está vendo:',
  tituloMateriais: 'Materiais desta área',
  apoioMateriais:
    'Selecione um documento para visualizar sua ficha completa e acessar o material.',
  fechar: 'Fechar esta área',
  grupoComum: 'Ineprotec e Matrícula EAD',
}

export const secaoMateriais = {
  titulo: 'Acervo de entregas',
  acimaDoFiltro:
    'Percorra os materiais da consultoria e filtre por área ou instituição para chegar direto ao que interessa. Cada material abre com sua ficha completa, pronto para leitura ou download.',
  apoio:
    'Selecione uma instituição para ver os materiais no contexto de cada operação.',
  /** Mensagem única de estado vazio, usada em cards, popups e listagens. */
  vazio:
    'Esta frente está em desenvolvimento e será atualizada conforme os materiais forem finalizados.',
}

export const rodape = {
  institucional:
    'Na VirtruvIA, marketing não é tentativa e erro nem ações isoladas. Estruturamos marketing como sistema: estratégia clara, dados orientando decisões e execução contínua. Cada ação faz parte de uma engrenagem que aprende, evolui e gera crescimento previsível.',
  linhaFinal: 'Mais do que presença, construímos direção.',
  contato: 'agenciavirtruvia@gmail.com',
}
