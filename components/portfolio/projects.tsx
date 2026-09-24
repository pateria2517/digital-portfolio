import { ArrowUpRight, Plus } from "lucide-react"
import { currentProjects, pastProjects } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-16 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">Work</p>
        <h2
          id="work-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Current focus
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {currentProjects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-black/8 bg-white p-6 transition-all duration-300 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-black/60">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/70" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Current
              </span>
              <span className="text-xs text-black/45">{project.period}</span>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight text-balance">{project.title}</h3>
            <p className="mt-1.5 text-sm font-medium text-black/70">
              {project.role} · {project.org}
            </p>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">{project.description}</p>
          </article>
        ))}
      </div>

      <h3 className="mt-16 mb-4 font-serif text-2xl font-medium tracking-tight">More work</h3>
      <div className="divide-y divide-black/10 border-y border-black/10">
        {pastProjects.map((project) => (
          <details key={project.title} className="group">
            <summary className="flex cursor-pointer list-none items-center gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded-md">
              <span className="hidden sm:block w-32 shrink-0 text-xs uppercase tracking-[0.14em] text-black/45">
                {project.period}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-[15px] leading-snug text-balance">{project.title}</span>
                <span className="mt-0.5 block text-sm text-black/55">
                  {project.role} - {project.summary}
                </span>
              </span>
              <Plus className="size-4 shrink-0 text-black/40 transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <div className="pb-6 sm:pl-36">
              <p className="text-sm text-black/65 leading-relaxed max-w-2xl">{project.details}</p>
              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white px-4 py-1.5 text-xs font-medium text-black transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
