import gsap from "gsap"
import { useEffect, useRef } from "react"
import { SITE } from "../data"
import { BackgroundVideo } from "./BackgroundVideo"

const MARQUEE = "BUILDING THE FUTURE • ".repeat(10)

export function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <BackgroundVideo flipped overlayClassName="bg-black/60" />

      <div className="relative z-10">
        <div className="overflow-hidden py-8 md:py-12">
          <div
            ref={marqueeRef}
            className="flex w-max whitespace-nowrap font-display text-5xl italic text-text-primary/30 md:text-7xl lg:text-8xl"
          >
            <span>{MARQUEE}</span>
            <span>{MARQUEE}</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 pb-16 text-center md:px-10 lg:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
            Let&apos;s work
          </p>
          <h2 className="mb-8 text-3xl text-text-primary md:text-5xl">
            Open to technical, creative,{" "}
            <span className="font-display italic">leadership</span>, or hybrid
            roles.
          </h2>

          <a
            href={`mailto:${SITE.email}`}
            className="group relative inline-flex rounded-full"
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-8 py-4 text-sm text-text-primary backdrop-blur-md md:text-base">
              {SITE.email} <span aria-hidden>↗</span>
            </span>
          </a>
        </div>

        <footer className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 border-t border-stroke/60 px-6 py-6 md:flex-row md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {SITE.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-muted transition-colors hover:text-text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Available for projects
          </div>
        </footer>
      </div>
    </section>
  )
}
