import { Download, ArrowUpRight } from "lucide-react"
import { profile } from "@/data/portfolio"

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-16 scroll-mt-20">
      <div className="rounded-3xl border border-black/8 bg-neutral-50 p-8 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-black/50">Résumé</p>
            <h2
              id="resume-heading"
              className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
            >
              Download my CV
            </h2>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">
              A single, always up-to-date résumé generated from this site — education, experience,
              projects and skating are pulled straight from the content here, so it reflects the
              latest every time you download it.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
            >
              <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download résumé
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
            >
              View online
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
