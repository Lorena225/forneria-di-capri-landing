import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-profundo text-white">
      {/* campo de luz discreto, sem gradiente chamativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-52 h-[42rem] w-[42rem] rounded-full bg-profundo-claro/60 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10"
      />

      <div className="relative mx-auto max-w-conteudo px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-32">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 animate-surgir">
          <span aria-hidden="true" className="h-px w-12 bg-areia" />
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-areia">
            {hero.selo}
          </p>
        </div>

        <h1
          className="mt-10 max-w-[18ch] font-display text-[2.5rem] font-light leading-[1.05] tracking-[-0.015em] text-white animate-surgir sm:text-6xl lg:text-[4.5rem]"
          style={{ animationDelay: '100ms' }}
        >
          {hero.titulo}
        </h1>

        <div
          className="mt-12 grid gap-10 animate-surgir lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-20"
          style={{ animationDelay: '200ms' }}
        >
          <p className="text-[1.0625rem] leading-relaxed text-white/85 sm:text-[1.1875rem]">
            {hero.subtitulo}
          </p>
          <p className="border-l border-areia/40 pl-6 text-[0.9375rem] leading-relaxed text-white/70">
            {hero.apoio}
          </p>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 animate-surgir"
          style={{ animationDelay: '300ms' }}
        >
          <a href="#areas" className="botao-claro">
            Conhecer as áreas
            <ArrowDown aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
          </a>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-white/50">
            Ineprotec
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            Matrícula EAD
          </p>
        </div>
      </div>
    </section>
  )
}
