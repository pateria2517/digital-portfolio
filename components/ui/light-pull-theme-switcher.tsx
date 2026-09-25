"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

export function LightPullThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const wasDragged = useRef(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <div className="relative flex h-16 w-8 items-end justify-center pb-3">
      <motion.button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title="Pull down to change theme"
        drag="y"
        dragDirectionLock
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
        dragElastic={0.075}
        whileDrag={{ cursor: "grabbing" }}
        onDragStart={() => {
          wasDragged.current = true
        }}
        onDragEnd={(_, info) => {
          if (info.offset.y > 0) toggleTheme()
        }}
        onClick={() => {
          if (wasDragged.current) {
            wasDragged.current = false
            return
          }
          toggleTheme()
        }}
        className="relative size-6 cursor-grab rounded-full bg-[radial-gradient(circle_at_center,_#facc15,_#fcd34d,_#fef9c3)] shadow-[0_0_16px_6px_rgba(250,204,21,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-[radial-gradient(circle_at_center,_#4b5563,_#1f2937,_#000)] dark:shadow-[0_0_16px_4px_rgba(31,41,55,0.7)]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-1/2 h-[9999px] w-0.5 -translate-x-1/2 bg-neutral-300 dark:bg-neutral-600"
        />
      </motion.button>
    </div>
  )
}
