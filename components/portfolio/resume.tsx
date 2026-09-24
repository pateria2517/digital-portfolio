import { Download } from "lucide-react"
import { education, certifications, pastProjects, currentProjects, profile } from "@/data/portfolio"

const experience = [
  ...currentProjects.map((p) => ({ period: p.period, title: p.title, role: p.role })),
  ...pastProjects.map((p) => ({ period: p.period, title: p.title, role: p.role })),
]

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-16 scroll-mt-20">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-black/50">Résumé</p>
          <h2
            id="resume-heading"
            className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
          >
            Education & experience
          </h2>
        </div>
        <a
          href={profile.resume}
          download
          className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
        >
          <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Download CV
        </a>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-black/50">Education</h3>
          <ul className="flex flex-col gap-4">
            {education.map((item, i) => (
              <li key={i} className="rounded-2xl border border-black/8 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-[15px] leading-snug text-balance">{item.institution}</p>
                  <span className="shrink-0 font-mono text-xs text-black/45">{item.period}</span>
                </div>
                <p className="mt-1.5 text-sm text-black/55 leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 mb-4 text-xs uppercase tracking-[0.18em] text-black/50">Certification</h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm text-black/70"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-black/50">Experience</h3>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {experience.map((item, i) => (
              <li key={i} className="flex items-baseline gap-4 py-3.5">
                <span className="w-32 shrink-0 font-mono text-xs text-black/45">{item.period}</span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium leading-snug text-balance">{item.title}</span>
                  <span className="text-sm text-black/55">{item.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
