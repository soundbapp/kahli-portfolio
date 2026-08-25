import { motion } from "framer-motion"
import { PROJECTS } from "../data"

const ease = [0.25, 0.1, 0.25, 1] as const

export function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted">
                Selected Work
              </span>
            </div>
            <h2 className="mb-3 text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Featured{" "}
              <span className="font-display italic">projects</span>
            </h2>
            <p className="max-w-md text-sm text-muted md:text-base">
              Conference packages, interview edits, documentary, and motion
              explainers — from raw source to finished broadcast.
            </p>
          </div>

          <a
            href="#explorations"
            className="group relative hidden rounded-full md:inline-flex"
            onClick={(e) => {
              e.preventDefault()
              document
                .querySelector("#explorations")
                ?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex items-center gap-2 rounded-full border border-stroke bg-bg px-5 py-2.5 text-sm text-text-primary">
              View all work <span aria-hidden>→</span>
            </span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface ${project.span} ${project.aspect}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
                <span className="relative inline-flex rounded-full">
                  <span className="accent-gradient absolute -inset-[2px] animate-[gradient-shift_6s_ease_infinite] rounded-full bg-[length:200%_200%]" />
                  <span className="relative rounded-full bg-white px-5 py-2.5 text-sm text-bg">
                    View —{" "}
                    <span className="font-display italic">{project.title}</span>
                  </span>
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {project.subtitle}
                </p>
                <h3 className="mt-1 font-display text-2xl italic text-text-primary md:text-3xl">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
