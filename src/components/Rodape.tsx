import { rodape } from '../data/textos'
import { escolas } from '../data/documentos'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-profundo text-white">
      <div className="mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <img
              src="/logo-virtruvia.png"
              alt="VirtruvIA"
              className="h-9 w-auto brightness-0 invert"
              width={179}
              height={64}
            />
            <p className="mt-10 max-w-[54ch] text-[1.0625rem] leading-relaxed text-white/85">
              {rodape.institucional}
            </p>
            <p className="mt-10 flex items-center gap-4 font-display text-xl font-light italic text-areia">
              <span aria-hidden="true" className="h-px w-10 shrink-0 bg-areia/50" />
              {rodape.linhaFinal}
            </p>
          </div>

          <div className="lg:text-right">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-sereno">
              Instituições atendidas
            </p>
            <ul className="mt-6 space-y-4">
              {escolas.map((escola) => (
                <li key={escola.id}>
                  <span className="block text-[1.0625rem] text-white">{escola.nome}</span>
                  <span className="block text-[0.8125rem] text-white/60">
                    {escola.descricao}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${rodape.contato}`}
              className="link-sublinhado mt-10 inline-block text-[0.9375rem] text-areia"
            >
              {rodape.contato}
            </a>
          </div>
        </div>

        <p className="mt-16 border-t border-white/15 pt-6 text-[0.8125rem] text-white/50">
          © {ano} VirtruvIA. Materiais de uso interno das instituições atendidas.
        </p>
      </div>
    </footer>
  )
}
