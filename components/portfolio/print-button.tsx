"use client"

import { Download } from "lucide-react"

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 print:hidden"
    >
      <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      Save as PDF
    </button>
  )
}
