'use client'

import { useRef } from "react"
import type { ReactNode } from "react"

export function PortfolioCarousel({ children, label }: { children: ReactNode; label: string }) {
  const viewportRef = useRef<HTMLDivElement>(null)

  function scroll(direction: "previous" | "next") {
    viewportRef.current?.scrollBy({ left: direction === "next" ? viewportRef.current.clientWidth * 0.82 : -viewportRef.current.clientWidth * 0.82, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div ref={viewportRef} className="flex snap-x gap-5 overflow-x-auto pb-4 pr-1 [scrollbar-width:thin]" aria-label={`${label} carousel`}>
        {children}
      </div>
      <div className="mt-2 flex gap-2">
        <button type="button" onClick={() => scroll("previous")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-background text-lg transition-colors hover:bg-black hover:text-white" aria-label={`Previous ${label.toLowerCase()}`}>
          {'‹'}
        </button>
        <button type="button" onClick={() => scroll("next")} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-background text-lg transition-colors hover:bg-black hover:text-white" aria-label={`Next ${label.toLowerCase()}`}>
          {'›'}
        </button>
      </div>
    </div>
  )
}
