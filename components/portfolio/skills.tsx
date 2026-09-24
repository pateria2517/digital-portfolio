import { skillGroups } from "@/data/portfolio"

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">Capabilities</p>
        <h2
          id="skills-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Skills
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-black/8 bg-white p-6">
            <h3 className="font-serif text-xl font-medium tracking-tight">{group.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-black/70">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black/30" aria-hidden="true" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
