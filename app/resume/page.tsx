import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { PrintButton } from "@/components/portfolio/print-button"
import {
  profile,
  about,
  currentProjects,
  collegeProjects,
  pastProjects,
  education,
  skillGroups,
  certifications,
  skatingResults,
  recognitions,
} from "@/data/portfolio"

export const metadata: Metadata = {
  title: `${profile.name} - Résumé`,
  description: `Résumé of ${profile.name}. ${profile.headline}`,
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-black/15 pb-1.5 font-serif text-lg font-medium tracking-tight">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-neutral-100 py-10 text-[#0A0A0A] print:bg-white print:py-0">
      <div className="mx-auto flex max-w-[800px] items-center justify-between px-6 pb-6 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 transition-colors hover:text-black"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-[800px] bg-white px-10 py-12 shadow-sm print:max-w-none print:px-0 print:py-0 print:shadow-none">
        <header className="border-b border-black/15 pb-6">
          <h1 className="font-serif text-4xl font-medium tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-[15px] text-black/70">{profile.headline}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-black/60">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-black">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-black">
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mt-8">
          <SectionTitle>Profile</SectionTitle>
          <p className="text-sm leading-relaxed text-black/75">{about}</p>
        </section>

        <section className="mt-8">
          <SectionTitle>Current focus</SectionTitle>
          <ul className="flex flex-col gap-4">
            {currentProjects.map((p) => (
              <li key={p.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium">
                    {p.title} <span className="font-normal text-black/55">- {p.role}, {p.org}</span>
                  </p>
                  <span className="shrink-0 font-mono text-xs text-black/50">{p.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-black/70">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <SectionTitle>College projects</SectionTitle>
          <ul className="flex flex-col gap-4">
            {collegeProjects.map((p) => (
              <li key={p.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium">
                    {p.title} <span className="font-normal text-black/55">- {p.context}</span>
                  </p>
                  <span className="shrink-0 font-mono text-xs text-black/50">{p.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-black/70">{p.description}</p>
                <p className="mt-1.5 text-xs text-black/55">
                  <span className="font-medium text-black/70">Skills:</span>{" "}
                  {p.skills.map((s) => `${s.name}${s.status === "developing" ? " (developing)" : ""}`).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <SectionTitle>Experience & activities</SectionTitle>
          <ul className="flex flex-col gap-3">
            {pastProjects.map((p) => (
              <li key={p.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium">
                    {p.title} <span className="font-normal text-black/55">- {p.role}</span>
                  </p>
                  <span className="shrink-0 font-mono text-xs text-black/50">{p.period}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-black/70">{p.details}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <section>
            <SectionTitle>Education</SectionTitle>
            <ul className="flex flex-col gap-3">
              {education.map((e, i) => (
                <li key={i}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-medium leading-snug">{e.institution}</p>
                    <span className="shrink-0 font-mono text-xs text-black/50">{e.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-black/65">{e.detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionTitle>Skills</SectionTitle>
            <ul className="flex flex-col gap-2.5">
              {skillGroups.map((g) => (
                <li key={g.title} className="text-sm">
                  <span className="font-medium">{g.title}: </span>
                  <span className="text-black/70">{g.items.join(", ")}</span>
                </li>
              ))}
            </ul>
            {certifications.length > 0 && (
              <p className="mt-3 text-sm">
                <span className="font-medium">Certifications: </span>
                <span className="text-black/70">{certifications.join(", ")}</span>
              </p>
            )}
          </section>
        </div>

        <section className="mt-8">
          <SectionTitle>Skating - selected results</SectionTitle>
          <ul className="flex flex-col gap-1.5">
            {skatingResults.map((r, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className="w-12 shrink-0 font-mono text-xs text-black/50">{r.year}</span>
                <span className="text-black/70">{r.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <SectionTitle>Recognition</SectionTitle>
          <ul className="flex flex-col gap-2">
            {recognitions.map((r, i) => (
              <li key={i} className="flex items-baseline justify-between gap-4 text-sm">
                <span>
                  <span className="font-medium">{r.title}</span>
                  <span className="text-black/55"> - {r.body}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-black/50">{r.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}
