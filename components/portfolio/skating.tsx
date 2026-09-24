import { skatingStats, skatingResults, recognitions } from "@/data/portfolio"

export function Skating() {
  return (
    <section id="skating" aria-labelledby="skating-heading" className="py-16 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">Athletics</p>
        <h2
          id="skating-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Freestyle roller skating
        </h2>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-black/8 bg-black/8">
        {skatingStats.map((stat) => (
          <div key={stat.label} className="bg-white p-6">
            <div className="font-serif text-4xl md:text-5xl font-medium tracking-tight">{stat.value}</div>
            <p className="mt-3 text-sm text-black/60 leading-relaxed">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-black/50">Results</h3>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {skatingResults.map((result, i) => (
              <li key={`${result.year}-${i}`} className="flex items-baseline gap-4 py-3.5">
                <span className="w-12 shrink-0 font-mono text-xs text-black/45">{result.year}</span>
                <span className="text-sm text-black/75 leading-relaxed">{result.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-black/50">Recognition</h3>
          <ul className="flex flex-col gap-3">
            {recognitions.map((item) => (
              <li key={item.title} className="rounded-2xl border border-black/8 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-medium text-[15px] leading-snug text-balance">{item.title}</p>
                  <span className="shrink-0 text-xs text-black/45">{item.date}</span>
                </div>
                <p className="mt-1.5 text-sm text-black/55">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
