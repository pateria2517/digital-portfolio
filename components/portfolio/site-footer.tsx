import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { profile } from "@/data/portfolio"

const marqueeItems = [
  "Strategy",
  "Content",
  "Marketing",
  "Fintech",
  "Freestyle skating",
  "Athletic discipline",
  "StratIX",
  "AceIPM",
  "TAPMI Bengaluru",
]

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-black/8 bg-white">
      <div className="border-b border-black/8 bg-neutral-50/60 py-4">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-xs font-medium uppercase tracking-[0.25em] text-black/50">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="flex items-center gap-12">
              {item}
              <span className="text-black/20" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pt-16 pb-10">
        <div className="mb-8 flex items-center gap-4">
          <div className="relative size-12 shrink-0">
            <Image src="/sunflower.png" alt="" fill className="object-contain dark:hidden" sizes="48px" />
            <Image src="/bluebell.png" alt="" fill className="hidden object-contain dark:block" sizes="48px" />
          </div>
          <p className="font-serif text-xl font-medium tracking-tight">{profile.name}</p>
        </div>
        <div
          aria-hidden="true"
          className="select-none pointer-events-none overflow-hidden -mx-6 px-6"
        >
          <p className="font-serif font-medium tracking-tight leading-[0.85] text-[16vw] text-balance bg-gradient-to-b from-black/10 to-transparent bg-clip-text text-transparent">
            Shivansh
          </p>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-black/8">
          <p className="text-xs uppercase tracking-[0.2em] text-black/50 order-2 md:order-1">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>

          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 order-1 md:order-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-black/50">Based in</span>
            <span className="text-xs font-medium text-black">Bengaluru, India</span>
          </div>

          <a
            href="#top"
            aria-label="Back to top"
            className="group order-3 inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 transition-all hover:border-black/30 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
