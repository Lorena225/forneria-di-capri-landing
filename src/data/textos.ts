/* =========================================================================
   TEXTOS DA PÁGINA — Forneria Di Capri
   Todo o conteúdo escrito da consultoria fica reunido aqui, separado dos
   componentes, para facilitar revisões de copy sem mexer no código.
   ========================================================================= */

export const hero = {
  titulo:
    'Posicionamento, identidade e gestão de mídias sociais para a casa italiana contemporânea de Brasília.',
  subtitulo:
    'Nesta página, reunimos os materiais, direcionamentos e documentos desenvolvidos pela VirtruvIA para a Forneria Di Capri. O foco: construção de marca, presença digital e gestão estratégica de conteúdo.',
}

export const resumo = {
  eyebrow: 'O que foi construído',
  titulo: 'Resumo da consultoria',
  texto:
    'Ao longo desta consultoria, a VirtruvIA estruturou a base estratégica de marca e a presença digital da Forneria Di Capri, transformando um produto técnico de padrão internacional em uma comunicação que faz jus ao que a casa entrega. O trabalho foi conduzido para ocupar um território claro: o da nova casa italiana contemporânea de Brasília, com técnica, personalidade e ambiente.',
  itens: [
    'Diagnóstico 360° da operação, público, concorrência e presença digital.',
    'Construção do manual completo de posicionamento estratégico de marca.',
    'Definição das seis palavras-âncora e do tom de voz da Forneria.',
    'Mapeamento de cinco arquétipos comportamentais de público-alvo.',
    'Gestão mensal de mídias sociais com planejamento, calendários editoriais e estratégia de conteúdo.',
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

export const tituloInstituicoes = 'Uma casa, uma estratégia'

export const miniCases: MiniCase[] = [
  {
    id: 'forneria-di-capri',
    titulo: 'Forneria Di Capri',
    subtitulo:
      'Posicionamento de marca e gestão de mídias sociais para transformar substância em comunicação desejada.',
    texto:
      'A Forneria Di Capri tem o que poucos restaurantes em Brasília conseguem acumular em menos de três anos: produto técnico de padrão internacional, dois endereços consolidados, nota 4.8 no Google e a consultoria de um pizzaiolo entre os três melhores do mundo. A VirtruvIA foi contratada para traduzir toda essa substância em uma comunicação que faça jus ao que a casa entrega. Saindo de uma narrativa de "pizzaria premium" para criar uma marca desejada de experiência italiana.',
    desafio:
      'Construir um posicionamento claro e uma presença digital coerente que comunique menos foto bonita e mais processo, ambiente, sabores, vinho e estilo de vida.',
    entregas:
      'Manual de posicionamento estratégico, diagnóstico 360°, identidade de perfil digital e gestão mensal de mídias sociais com planejamentos e calendários editoriais.',
    foco: 'Ocupar o território da nova casa italiana contemporânea de Brasília. Onde a pizza deixa de ser só comida e vira uma ocasião.',
  },
]

export const secaoAreas = {
  titulo: 'Áreas da consultoria',
  subtitulo:
    'Os materiais foram organizados por macroárea para tornar a consulta mais intuitiva entre posicionamento de marca e gestão de mídias sociais.',
  introducao:
    'Em vez de percorrer as etapas do projeto, você entra pela área que interessa no momento. Escolha um dos dois caminhos abaixo e o acervo se ajusta ao que pertence àquela frente.',
  chamada: 'Toque em uma área para ver seus materiais',
}

export const painel = {
  prefixo: 'Você está vendo:',
  tituloMateriais: 'Materiais desta área',
  apoioMateriais:
    'Selecione um documento para visualizar sua ficha completa e acessar o material.',
  fechar: 'Fechar esta área',
  grupoComum: 'Forneria Di Capri',
}

export const secaoMateriais = {
  titulo: 'Acervo de entregas',
  acimaDoFiltro:
    'Percorra os materiais da consultoria e filtre por área para chegar direto ao que interessa. Cada material abre com sua ficha completa, pronto para leitura ou download.',
  apoio:
    'Selecione uma área para ver os materiais correspondentes.',
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
