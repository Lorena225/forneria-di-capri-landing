import { rodape } from '../data/textos'
import { escolas } from '../data/documentos'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-escuro text-areia">
      <div className="mx-auto max-w-conteudo px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <img
              src="/logo-virtruvia.png"
              alt="VirtruvIA"
              className="h-9 w-auto brightness-0 invert"
              width={179}
              height={64}
            />
            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-areia">
              {rodape.institucional}
            </p>
            <p className="mt-8 font-display text-xl font-light italic text-areia/80">
              {rodape.linhaFinal}
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-sereno">
              Instituições atendidas
            </p>
            <ul className="mt-5 space-y-3">
              {escolas.map((escola) => (
                <li key={escola.id} className="text-[0.9375rem] text-white">
                  {escola.nome}
                  <span className="ml-2 block text-[0.8125rem] text-areia/70 lg:inline lg:ml-2">
                    {escola.descricao}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${rodape.contato}`}
              className="link-sublinhado mt-8 inline-block text-[0.9375rem] text-white"
            >
              {rodape.contato}
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-areia/20 pt-6 text-[0.8125rem] text-areia/70">
          © {ano} VirtruvIA. Materiais de uso interno das instituições atendidas.
        </p>
      </div>
    </footer>
  )
}
