"use client"

import { useState } from "react"
import { Mail, Copy, Check, Linkedin, MapPin } from "lucide-react"
import { profile } from "@/data/portfolio"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 scroll-mt-20">
      <p className="text-xs uppercase tracking-[0.18em] text-black/50">Contact</p>
      <h2
        id="contact-heading"
        className="mt-3 font-serif text-4xl md:text-6xl font-medium tracking-tight text-balance"
      >
        Let&apos;s connect.
      </h2>
      <p className="mt-6 max-w-xl text-base text-black/60 leading-relaxed">
        Open to audience research, creative content, strategic initiatives and collaborations.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
        >
          <Mail className="size-4" />
          Email me
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-black/30 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          aria-live="polite"
        >
          {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
          {copied ? "Copied ✓" : "Copy email"}
        </button>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:border-black/30 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
        >
          <Linkedin className="size-4" />
          LinkedIn
        </a>
      </div>

      <p className="mt-8 inline-flex items-center gap-2 text-sm text-black/55">
        <MapPin className="size-4 text-black/40" />
        {profile.location}
      </p>
    </section>
  )
}
