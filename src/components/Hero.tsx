import gsap from "gsap"
import { useEffect, useState } from "react"
import { SITE } from "../data"
import { BackgroundVideo } from "./BackgroundVideo"
import { Navbar } from "./Navbar"

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % SITE.roles.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 },
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
        },
        "<",
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <BackgroundVideo />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />

      <Navbar />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center md:px-10">
        <p className="blur-in mb-8 text-xs uppercase tracking-[0.3em] text-muted">
          {SITE.eyebrow}
        </p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {SITE.name}
        </h1>

        <p className="blur-in mb-4 text-base text-muted md:text-lg">
          A{" "}
          <span
            key={roleIndex}
            className="animate-role-fade-in inline-block font-display italic text-text-primary"
          >
            {SITE.roles[roleIndex]}
          </span>{" "}
          lives in {SITE.location}.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          {SITE.description}
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative rounded-full"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-all group-hover:scale-105 group-hover:bg-bg group-hover:text-text-primary">
              See Works
            </span>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="group relative rounded-full"
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-all group-hover:scale-105 group-hover:border-transparent">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">
          Scroll
        </span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient absolute inset-x-0 h-1/2 animate-scroll-down" />
        </div>
      </div>
    </section>
  )
}
