import { WorksWheel } from "@/components/ui/works-wheel"
import { galleryItems } from "@/data/portfolio"

export function Gallery() {
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
        <WorksWheel items={galleryItems} label="Gallery" action="Open" className="h-full min-h-0" />
      </div>
    </section>
  )
}
