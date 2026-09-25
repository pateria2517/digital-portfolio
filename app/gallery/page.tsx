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
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1280px] px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
        <Gallery />
      </div>
    </main>
  )
}
