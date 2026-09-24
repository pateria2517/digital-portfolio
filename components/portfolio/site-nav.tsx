"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { nav } from "@/data/portfolio"

const navItems = nav.map((item) => ({ label: item.label, id: item.href.replace("#", "") }))

export function SiteNav() {
  const [active, setActive] = useState<string>(navItems[0]?.id ?? "")

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const target = id === "top" ? document.body : document.getElementById(id)
    if (!target) return
    const top = id === "top" ? 0 : (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: "smooth" })
    setActive(id)
    history.replaceState(null, "", `#${id}`)
  }

  return (
    <div className="sticky top-24 flex flex-col gap-10">
      <a
        href="#top"
        onClick={(event) => handleClick(event, "top")}
        aria-label="Shivansh Pateria — back to top"
        className="relative size-28 block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4"
      >
        <Image src="/sunflower.jpg" alt="" fill className="object-contain" sizes="112px" priority />
      </a>
      <nav aria-label="Page sections" className="flex flex-col gap-0.5 text-[13px]">
        {navItems.map((item) => {
          const isActive = active === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              aria-current={isActive ? "true" : undefined}
              className={
                isActive
                  ? "rounded-md bg-neutral-100 px-3 py-1.5 text-black font-medium capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                  : "rounded-md px-3 py-1.5 text-black/50 font-normal capitalize hover:text-black hover:bg-neutral-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
              }
            >
              {item.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}
