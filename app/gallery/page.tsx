import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { Gallery } from "@/components/portfolio/gallery"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Project and competition photo gallery.",
}

export default function GalleryPage() {
  return (
    <main className="h-dvh overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex h-full max-w-[1280px] min-h-0 flex-col px-6 py-4">
        <Link
          href="/"
          className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
        <div className="min-h-0 flex-1">
          <Gallery />
        </div>
      </div>
    </main>
  )
}
