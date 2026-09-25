import { WorksWheel } from "@/components/ui/works-wheel"
import { galleryItems } from "@/data/portfolio"

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="py-16 scroll-mt-20">
      <header className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-black/50">Gallery</p>
        <h2
          id="gallery-heading"
          className="mt-3 font-serif text-3xl md:text-4xl font-medium tracking-tight text-balance"
        >
          Photos from projects and competitions
        </h2>
        <p className="mt-4 text-sm text-black/60 leading-relaxed">
          Add or replace images in <code>/data/portfolio.ts</code> under <code>galleryItems</code> to keep
          this section updated with your latest work.
        </p>
      </header>

      <div className="h-[70vh] min-h-[30rem] rounded-2xl border border-black/8 bg-white">
        <WorksWheel items={galleryItems} label="Gallery" action="Open" />
      </div>
    </section>
  )
}
