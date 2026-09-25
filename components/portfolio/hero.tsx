import { ArrowUpRight } from "lucide-react"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section id="intro" className="pt-20 pb-24 scroll-mt-20">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-black/50">{profile.eyebrow}</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.03] font-medium tracking-tight text-balance">
          {profile.headline}
        </h1>
        <p className="mt-8 max-w-xl text-base text-black/60 leading-relaxed">{profile.intro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            See current work
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-black/30 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            Open gallery
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-black/30 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
