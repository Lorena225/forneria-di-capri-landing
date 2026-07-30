import { resumo } from '../data/textos'

export function ResumoConsultoria() {
  return (
    <section className="border-b border-linha bg-superficie">
      <div className="mx-auto max-w-conteudo px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <p className="rotulo-tecnico">Visão geral</p>
            <h2 className="mt-4 font-display text-4xl font-light leading-tight text-tinta sm:text-5xl">
              {resumo.titulo}
            </h2>
            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-grafite">
              {resumo.texto}
            </p>
          </div>

          <ul className="border-t border-linha">
            {resumo.itens.map((item, indice) => (
              <li
                key={item}
                className="flex gap-5 border-b border-linha py-5 text-[0.9375rem] leading-relaxed text-grafite"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 font-display text-lg italic text-argila"
                >
                  {String(indice + 1).padStart(2, '0')}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
