import { about } from "@/data/portfolio"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="pt-20 pb-24 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">About</p>
      </header>
      <p className="max-w-2xl font-serif text-xl md:text-2xl leading-relaxed text-black/80 text-balance">
        {about}
      </p>
    </section>
  )
}
