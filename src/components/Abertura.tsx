const frentes = [
  {
    nome: 'Posicionamento de marca',
    texto: 'Clareza sobre identidade, diferenciais, proposta de valor e comunicação.',
  },
  {
    nome: 'Estratégia de marketing',
    texto:
      'Planejamento de campanhas, conteúdos e ações alinhadas aos objetivos das instituições.',
  },
  {
    nome: 'Estruturação comercial',
    texto: 'Organização de processos, funis, atendimento, CRM e rotinas de vendas.',
  },
]

export function Abertura() {
  return (
    <section
      id="topo"
      className="mx-auto max-w-conteudo px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-28"
    >
      <p className="rotulo animate-surgir">
        Ineprotec
        <span aria-hidden="true" className="mx-2 text-linha">
          /
        </span>
        Matrícula EAD
      </p>

      <span
        aria-hidden="true"
        className="mt-5 block h-px w-24 origin-left bg-destaque animate-surgir"
        style={{ animationDelay: '80ms' }}
      />

      <h1
        className="mt-8 max-w-[20ch] font-display text-[2.75rem] font-light leading-[1.05] tracking-[-0.01em] text-tinta animate-surgir sm:text-6xl lg:text-[4.5rem]"
        style={{ animationDelay: '140ms' }}
      >
        Estratégia que{' '}
        <em className="not-italic text-destaque-forte">conecta</em> marca,
        comunicação e vendas
      </h1>

      <div
        className="mt-10 grid gap-8 animate-surgir lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16"
        style={{ animationDelay: '220ms' }}
      >
        <p className="text-[1.0625rem] leading-relaxed text-grafite">
          A VirtruvIA é uma consultoria estratégica especializada em posicionamento de
          marca, marketing e estruturação comercial. Atuamos conectando identidade,
          comunicação e processos de vendas para construir operações mais consistentes,
          organizadas e preparadas para crescer.
        </p>
        <p className="text-[1.0625rem] leading-relaxed text-grafite lg:pt-1">
          Esta página reúne os materiais, estratégias e documentos desenvolvidos para a
          Ineprotec e a Matrícula EAD, organizados para facilitar o acesso, a aplicação e
          a continuidade do trabalho realizado.
        </p>
      </div>

      <ul
        className="mt-16 grid gap-px overflow-hidden border-t border-linha animate-surgir sm:grid-cols-3"
        style={{ animationDelay: '300ms' }}
      >
        {frentes.map((frente) => (
          <li
            key={frente.nome}
            className="group relative border-b border-linha bg-papel pt-6 sm:border-b-0 sm:pr-10"
          >
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-0 bg-destaque transition-all duration-700 ease-out group-hover:w-full"
            />
            <h2 className="font-display text-2xl font-normal leading-snug text-tinta">
              {frente.nome}
            </h2>
            <p className="mb-6 mt-3 max-w-[34ch] text-[0.9375rem] leading-relaxed text-neutro">
              {frente.texto}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
