import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-areia">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[36rem] w-[36rem] rounded-full bg-areia-clara/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-conteudo px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 animate-surgir">
          <span aria-hidden="true" className="h-px w-12 bg-argila-forte" />
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-argila-forte">
            {hero.selo}
          </p>
        </div>

        <h1
          className="mt-8 max-w-[19ch] font-display text-[2.5rem] font-light leading-[1.06] tracking-[-0.015em] text-tinta animate-surgir sm:text-6xl lg:text-[4.25rem]"
          style={{ animationDelay: '100ms' }}
        >
          {hero.titulo}
        </h1>

        <div
          className="mt-12 grid gap-10 animate-surgir lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-16"
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-[1.0625rem] leading-relaxed text-tinta/85 sm:text-[1.125rem]">
            {hero.subtitulo}
          </p>
          <p className="border-l border-argila-forte/30 pl-6 text-[0.9375rem] leading-relaxed text-grafite">
            {hero.apoio}
          </p>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 animate-surgir"
          style={{ animationDelay: '300ms' }}
        >
          <a href="#materiais" className="botao-principal">
            Ver os materiais
            <ArrowDown aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <p className="rotulo text-tinta/60">
            Ineprotec
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            Matrícula EAD
          </p>
        </div>
      </div>
    </section>
  )
}
