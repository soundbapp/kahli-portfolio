import { motion } from "framer-motion"
import { JOURNAL } from "../data"
import { SafeImage } from "./SafeImage"

const ease = [0.25, 0.1, 0.25, 1] as const

export function Journal() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Journal
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Notes from building AI products, leading production, and inventing
              along the way.
            </p>
          </div>

          <a
            href="#resume"
            className="group relative hidden rounded-full md:inline-flex"
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
              View all <span aria-hidden>→</span>
            </span>
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {JOURNAL.map((entry) => (
            <a
              key={entry.title}
              href={entry.href}
              target={entry.href.startsWith("http") ? "_blank" : undefined}
              rel={
                entry.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex flex-col items-stretch gap-4 rounded-[40px] border border-stroke bg-surface/30 p-4 transition-colors hover:bg-surface sm:flex-row sm:items-center sm:gap-6 sm:rounded-full"
            >
              <SafeImage
                src={entry.image}
                alt=""
                className="h-24 w-full shrink-0 rounded-[28px] object-cover sm:h-16 sm:w-24 sm:rounded-full"
              />
              <div className="min-w-0 flex-1 sm:pr-4">
                <h3 className="text-base text-text-primary md:text-lg">
                  {entry.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-4 px-1 text-xs text-muted sm:gap-6 sm:px-4 sm:text-sm">
                <span>{entry.readTime}</span>
                <span>{entry.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
