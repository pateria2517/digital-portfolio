import { Sparkles, Wrench } from "lucide-react"
import { collegeProjects } from "@/data/portfolio"
import { getPortfolioEntries } from "@/lib/portfolio-content"

const statusStyles: Record<string, string> = {
  ongoing: "bg-emerald-500",
  planned: "bg-amber-500",
  completed: "bg-black/40",
}

const statusLabels: Record<string, string> = {
  ongoing: "Ongoing",
  planned: "Planned",
  completed: "Completed",
}

export async function CollegeProjects() {
  const liveProjects = await getPortfolioEntries("projects")
  const projects = [...collegeProjects, ...liveProjects.map((entry) => ({ title: entry.title, status: "ongoing" as const, period: "Added", context: "Portfolio project", description: entry.body, skills: [...(entry.metadata?.skillsHave ?? []).map((name) => ({ name, status: "have" as const })), ...(entry.metadata?.skillsDeveloping ?? []).map((name) => ({ name, status: "developing" as const }))] }))]

  return (
    <section id="college" aria-labelledby="college-heading" className="py-16 scroll-mt-20">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">College projects</p>
        <h2
          id="college-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Projects I take up, and the skills behind them
        </h2>
        <p className="mt-4 text-sm text-black/60 leading-relaxed">
          Each project I pick up during my programme, mapped to the skills I already bring and the
          ones I&apos;m building through the work.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap items-center gap-5 text-xs text-black/55">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="size-3.5 text-black/50" aria-hidden="true" />
          Skills I have
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Wrench className="size-3.5 text-black/50" aria-hidden="true" />
          Skills I&apos;m developing
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-black/8 bg-white p-6 transition-all duration-300 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-black/60">
                <span className={`size-2 rounded-full ${statusStyles[project.status] ?? "bg-black/40"}`} />
                {statusLabels[project.status] ?? project.status}
              </span>
              <span className="font-mono text-xs text-black/45">{project.period}</span>
            </div>

            <h3 className="mt-5 font-serif text-2xl font-medium tracking-tight text-balance">{project.title}</h3>
            <p className="mt-1.5 text-sm font-medium text-black/70">{project.context}</p>
            <p className="mt-4 text-sm text-black/60 leading-relaxed">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-black/8">
              {project.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={
                    skill.status === "have"
                      ? "inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-black/75"
                      : "inline-flex items-center gap-1.5 rounded-full border border-dashed border-black/25 px-3 py-1.5 text-xs font-medium text-black/60"
                  }
                >
                  {skill.status === "have" ? (
                    <Sparkles className="size-3 shrink-0" aria-hidden="true" />
                  ) : (
                    <Wrench className="size-3 shrink-0" aria-hidden="true" />
                  )}
                  {skill.name}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
