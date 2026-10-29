import { createClient } from "@/lib/supabase/server"

const labels: Record<string, string> = {
  projects: "Projects",
  recognitions: "Recognitions",
  awards: "Awards",
  images: "Gallery",
  skills: "Skills",
}

export async function LiveContent() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("portfolio_content")
      .select("id, section, title, body, image_url, link_url, sort_order")
      .order("section")
      .order("sort_order")

    if (error || !data?.length) return null

    return <LiveContentList data={data} />
  } catch {
    return null
  }
}

function LiveContentList({ data }: { data: Array<{ id: string; section: string; title: string; body: string; image_url: string | null; link_url: string | null; sort_order: number }> }) {

  return (
    <section className="space-y-16 py-16" aria-label="Added portfolio content">
      {Object.keys(labels).map((section) => {
        const entries = data.filter((entry) => entry.section === section)
        if (!entries.length) return null
        return (
          <div key={section} id={section}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{labels[section]}</p>
            <div className={section === "images" ? "mt-6 grid gap-6 sm:grid-cols-2" : "mt-6 flex snap-x gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]"}>
              {entries.map((entry) => (
                <article key={entry.id} className={section === "images" ? "overflow-hidden rounded-2xl border border-black/10 bg-background p-5" : "w-[min(85vw,20rem)] min-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-black/10 bg-background p-5"}>
                  {entry.image_url && section === "images" ? (
                    /\.(mp4|webm)(\?|$)/i.test(entry.image_url) ? <video src={entry.image_url} controls className="mb-5 aspect-[4/3] w-full rounded-xl object-cover" aria-label={entry.title} /> : /\.(mp3|wav|ogg)(\?|$)/i.test(entry.image_url) ? <audio src={entry.image_url} controls className="mb-5 w-full" aria-label={entry.title} /> : <img src={entry.image_url} alt={entry.title} className="mb-5 aspect-[4/3] w-full rounded-xl object-cover" />
                  ) : null}
                  <h2 className="font-serif text-2xl">{entry.title}</h2>
                  {entry.body ? <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{entry.body}</p> : null}
                  {entry.link_url ? <a href={entry.link_url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline underline-offset-4">Open link</a> : null}
                </article>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}
