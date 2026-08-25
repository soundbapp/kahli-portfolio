import { useEffect, useState } from "react"
import { SITE } from "../data"

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "#resume" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("Home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (label: string, href: string) => {
    setActive(label)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNav("Home", "#home")
          }}
          className="group relative flex h-9 w-9 items-center justify-center"
          aria-label="Home"
        >
          <span className="accent-gradient absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:[background-image:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]" />
          <span className="relative flex h-[calc(100%-4px)] w-[calc(100%-4px)] items-center justify-center rounded-full bg-bg transition-transform duration-300 group-hover:scale-110">
            <span className="font-display text-[13px] italic text-text-primary">
              {SITE.initials}
            </span>
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <div className="flex items-center">
          {LINKS.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNav(link.label, link.href)}
              className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                active === link.label
                  ? "bg-stroke/50 text-text-primary"
                  : "text-muted hover:bg-stroke/50 hover:text-text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

        <a
          href={`mailto:${SITE.email}`}
          className="group relative ml-0.5 rounded-full"
        >
          <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-muted backdrop-blur-md transition-colors group-hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm">
            Say hi <span aria-hidden>↗</span>
          </span>
        </a>
      </div>
    </nav>
  )
}
