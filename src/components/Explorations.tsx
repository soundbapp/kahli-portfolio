import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { EXPLORATIONS } from "../data"

gsap.registerPlugin(ScrollTrigger)

const ease = [0.25, 0.1, 0.25, 1] as const

export function Explorations() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const colLeftRef = useRef<HTMLDivElement>(null)
  const colRightRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<(typeof EXPLORATIONS)[0] | null>(
    null,
  )

  const left = EXPLORATIONS.filter((_, i) => i % 2 === 0)
  const right = EXPLORATIONS.filter((_, i) => i % 2 === 1)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const colLeft = colLeftRef.current
    const colRight = colRightRef.current
    if (!section || !content || !colLeft || !colRight) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: content,
        pinSpacing: false,
      })

      gsap.fromTo(
        colLeft,
        { y: 80 },
        {
          y: -220,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      )

      gsap.fromTo(
        colRight,
        { y: -40 },
        {
          y: -320,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg"
    >
      <div
        ref={contentRef}
        className="relative z-10 flex h-svh flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-stroke" />
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Explorations
            </span>
            <span className="h-px w-8 bg-stroke" />
          </div>
          <h2 className="mb-4 text-3xl text-text-primary md:text-5xl lg:text-6xl">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-muted md:text-base">
            Shortform storytelling, interviews, and motion design from VOA and
            beyond.
          </p>
          <a
            href="https://www.voaafrica.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex rounded-full"
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
              Watch on VOA <span aria-hidden>↗</span>
            </span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-12 px-4 md:gap-40 md:px-10">
          <div
            ref={colLeftRef}
            className="pointer-events-auto flex flex-col items-center gap-10 pt-[20vh] md:gap-16"
          >
            {left.map((item, i) => (
              <ExplorationCard
                key={item.title}
                item={item}
                rotate={i % 2 === 0 ? -3 : 4}
                onOpen={() => setLightbox(item)}
              />
            ))}
          </div>
          <div
            ref={colRightRef}
            className="pointer-events-auto flex flex-col items-center gap-10 pt-[35vh] md:gap-16"
          >
            {right.map((item, i) => (
              <ExplorationCard
                key={item.title}
                item={item}
                rotate={i % 2 === 0 ? 5 : -4}
                onOpen={() => setLightbox(item)}
              />
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-6 backdrop-blur-md"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl overflow-hidden rounded-3xl border border-stroke"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-h-[70vh] w-full object-cover"
            />
            <div className="flex items-center justify-between gap-4 bg-surface p-4">
              <p className="font-display text-xl italic text-text-primary">
                {lightbox.title}
              </p>
              <a
                href={lightbox.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text-primary"
              >
                Open ↗
              </a>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 rounded-full bg-bg/80 px-3 py-1 text-sm text-text-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function ExplorationCard({
  item,
  rotate,
  onOpen,
}: {
  item: (typeof EXPLORATIONS)[0]
  rotate: number
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl border border-stroke bg-surface shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.03]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
    </button>
  )
}
