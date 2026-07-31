import { ArrowDown } from 'lucide-react'
import { hero } from '../data/textos'

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-marfim">
      {/* Assinatura da marca repetida, bem discreta, como textura de fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: 'url(/logo-virtruvia.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '340px auto',
          backgroundPosition: '-40px -30px',
        }}
      />

      <div className="relative mx-auto grid max-w-conteudo items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 lg:pb-28 lg:pt-24">
        {/* Coluna de texto */}
        <div>
          <h1 className="max-w-[17ch] animate-surgir font-display text-[2.5rem] font-semibold leading-[1.12] tracking-[-0.015em] text-tinta sm:text-[3.25rem] lg:text-[3.75rem]">
            {hero.titulo}
          </h1>

          <p
            className="mt-8 max-w-[54ch] animate-surgir text-[0.9375rem] leading-[1.9] text-grafite sm:text-base"
            style={{ animationDelay: '120ms' }}
          >
            {hero.subtitulo}
          </p>

          <div
            className="mt-10 flex animate-surgir flex-wrap items-center gap-x-8 gap-y-4"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#areas" className="botao-principal">
              {hero.chamada}
              <ArrowDown aria-hidden="true" strokeWidth={1.5} className="h-4 w-4" />
            </a>
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-pedra-escura">
              Ineprotec
              <span aria-hidden="true" className="mx-2 text-pedra">
                ·
              </span>
              Matrícula EAD
            </p>
          </div>
        </div>

        {/* Campo visual */}
        <div
          className="relative animate-surgir"
          style={{ animationDelay: '180ms' }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] lg:aspect-[5/6]">
            {/* gradiente de fundo do campo */}
            <span
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(150deg, #6ea8d8 0%, #8fb6dd 28%, #c9c3e4 58%, #e8bcd0 82%, #f2d6c8 100%)',
              }}
            />
            <span
              aria-hidden="true"
              className="absolute -left-16 -top-10 h-64 w-64 rounded-full bg-white/40 blur-3xl"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/35 to-transparent"
            />

            {/*
              IMAGEM DO HERO
              Para usar a arte do busto, salve o arquivo como
              public/hero-virtruvia.png e remova o comentário abaixo.

              <img
                src="/hero-virtruvia.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}
