const navegacao = [
  { href: '#resumo', rotulo: 'Resumo' },
  { href: '#cliente', rotulo: 'Cliente' },
  { href: '#areas', rotulo: 'Materiais' },
]

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-papel/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-conteudo items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#topo"
          className="flex shrink-0 items-center gap-4"
          aria-label="VirtruvIA — Consultoria estratégica"
        >
          <img
            src="/logo-virtruvia.png"
            alt=""
            className="h-7 w-auto sm:h-8"
            width={179}
            height={64}
          />
          <span aria-hidden="true" className="hidden h-8 w-px bg-pedra/30 sm:block" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-[0.9375rem] font-medium tracking-[0.14em] text-tinta">
              VIRTRUVIA
            </span>
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-pedra-escura">
              Consultoria estratégica
            </span>
          </span>
        </a>

        <nav aria-label="Seções da página">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navegacao.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.8125rem] font-medium text-sereno-forte transition-colors duration-200 hover:bg-sereno-claro hover:text-tinta max-[420px]:px-2 max-[420px]:text-[0.75rem]"
                >
                  {item.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
