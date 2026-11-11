import { WorksWheel } from "@/components/ui/works-wheel"
import { getPortfolioEntries } from "@/lib/portfolio-content"

export async function Gallery() {
  const galleryItems = (await getPortfolioEntries("images"))
    .filter((entry) => entry.image_url)
    .map((entry) => ({ title: entry.title, image: entry.image_url!, href: entry.link_url ?? undefined }))

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="flex h-full min-h-0 flex-col py-4">
      <header className="mb-4 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">Gallery</p>
        <h2
          id="gallery-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Photos from projects and competitions
        </h2>
      </header>

      <div className="min-h-0 flex-1 rounded-2xl border border-black/8 bg-white">
        {galleryItems.length > 0 ? (
          <WorksWheel items={galleryItems} label="Gallery" action="" className="h-full min-h-0" />
        ) : null}
      </div>
    </section>
  )
}
