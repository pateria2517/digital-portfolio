import { about } from "@/data/portfolio"
import { getPortfolioEntries } from "@/lib/portfolio-content"

export async function About() {
  const [entry] = await getPortfolioEntries("about")
  const content = entry ?? { title: "", body: about, image_url: null, link_url: null }

  return (
    <section id="about" aria-label="About" className="pt-20 pb-24 scroll-mt-20">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">About</p>
        {content.title ? (
          <h1 className="mt-3 font-serif text-5xl md:text-7xl font-medium tracking-tight text-balance">{content.title}</h1>
        ) : <h1 className="sr-only">About</h1>}
      </header>
      {content.image_url ? <img src={content.image_url} alt={content.title || "About me"} className="mb-8 max-h-[28rem] w-full max-w-2xl rounded-2xl object-cover" /> : null}
      <p className="max-w-2xl whitespace-pre-wrap font-serif text-xl md:text-2xl leading-relaxed text-black/80 text-balance">
        {content.body}
      </p>
      {content.link_url ? <a href={content.link_url} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-medium underline underline-offset-4">More about me</a> : null}
    </section>
  )
}
