import { escolas } from '../data/documentos'

export function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-linha bg-superficie">
      <div className="mx-auto max-w-conteudo px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <img
              src="/logo-virtruvia.png"
              alt="VirtruvIA"
              className="h-8 w-auto"
              width={559}
              height={200}
            />
            <p className="rotulo mt-4">Consultoria estratégica</p>
            <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-neutro">
              Posicionamento de marca, marketing e estruturação comercial para operações
              que precisam crescer com consistência.
            </p>
          </div>

          <div className="md:text-right">
            <p className="rotulo">Instituições atendidas</p>
            <ul className="mt-4 space-y-2">
              {escolas.map((escola) => (
                <li key={escola.id} className="text-[0.9375rem] text-grafite">
                  {escola.nome}
                  <span className="ml-2 text-[0.8125rem] text-neutro">
                    {escola.descricao}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:agenciavirtruvia@gmail.com"
              className="link-sublinhado mt-6 inline-block text-[0.9375rem] text-tinta"
            >
              agenciavirtruvia@gmail.com
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-linha pt-6 text-[0.8125rem] text-neutro">
          © {ano} VirtruvIA. Materiais de uso interno das instituições atendidas.
        </p>
      </div>
    </footer>
  )
}
