import { SiteNav } from "@/components/portfolio/site-nav"
import { Hero } from "@/components/portfolio/hero"
import { Projects } from "@/components/portfolio/projects"
import { Skating } from "@/components/portfolio/skating"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { CollegeProjects } from "@/components/portfolio/college-projects"
import { Resume } from "@/components/portfolio/resume"
import { Contact } from "@/components/portfolio/contact"
import { PixelBand } from "@/components/portfolio/pixel-band"
import { SiteFooter } from "@/components/portfolio/site-footer"
import { profile } from "@/data/portfolio"

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-[#F1E9D2] text-[#0A0A0A]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 bg-[#F1E9D2]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-serif text-xl font-medium tracking-tight rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            {profile.name}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-black/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2"
          >
            Get in touch
          </a>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
        <aside className="hidden md:block">
          <SiteNav />
        </aside>

        <div id="main-content" className="min-w-0 divide-y divide-black/8">
          <Hero />
          <Projects />
          <PixelBand
            src="/pixel-landscape.jpg"
            alt="Pixel-art landscape of sunflowers beside a calm lake and distant mountains"
          />
          <Skating />
          <About />
          <Skills />
          <CollegeProjects />
          <Resume />
          <PixelBand
            src="/pixel-meadow.jpg"
            alt="Pixel-art meadow of wildflowers along a winding stream under a bright sky"
            eyebrow="What's next"
            title="Open to internships, clubs and case competitions."
          />
          <Contact />
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
