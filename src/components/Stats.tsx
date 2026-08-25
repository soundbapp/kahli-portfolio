import { motion } from "framer-motion"
import { STATS } from "../data"

const ease = [0.25, 0.1, 0.25, 1] as const

export function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="grid grid-cols-1 gap-10 border-y border-stroke py-12 md:grid-cols-3 md:gap-6 md:py-16"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl italic text-text-primary md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
