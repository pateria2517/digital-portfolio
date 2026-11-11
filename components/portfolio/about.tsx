import { about } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-20 pb-24 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">About</p>
        <h1
          id="about-heading"
          className="mt-3 font-serif text-5xl md:text-7xl font-medium tracking-tight text-balance"
        >
          A little about me
        </h1>
      </header>
      <p className="max-w-2xl font-serif text-xl md:text-2xl leading-relaxed text-black/80 text-balance">
        {about}
      </p>
    </section>
  )
}
