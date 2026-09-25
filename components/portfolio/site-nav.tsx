"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { nav } from "@/data/portfolio"

const navItems = nav.map((item) => ({ label: item.label, id: item.href.replace("#", "") }))

export function SiteNav() {
  const [active, setActive] = useState<string>(navItems[0]?.id ?? "")

  useEffect(() => {
    const getSections = () =>
      navItems
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => Boolean(el))

    let frame = 0

    const update = () => {
      frame = 0
      const sections = getSections()
      if (sections.length === 0) return

      // Reading line: a point ~30% down the viewport.
      const line = window.innerHeight * 0.3

      // If scrolled to the very bottom, the last section is active.
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) {
        setActive(sections[sections.length - 1].id)
        return
      }

      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) {
          current = section.id
        } else {
          break
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
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
        aria-label="Shivansh Pateria - back to top"
        className="relative size-28 block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-4"
      >
        <Image src="/sunflower.png" alt="" fill className="object-contain" sizes="112px" priority />
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
