import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const WORDS = ["Design", "Create", "Inspire"]

type LoadingScreenProps = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const duration = 2700
    const start = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * 100))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setCount(100)
        setTimeout(onComplete, 400)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onComplete])

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length)
    }, 900)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] bg-bg">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute left-6 top-6 text-xs uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        Portfolio
      </motion.p>

      <div className="flex h-full items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      <p className="absolute bottom-16 right-6 font-display text-6xl tabular-nums text-text-primary md:bottom-20 md:right-10 md:text-8xl lg:text-9xl">
        {String(count).padStart(3, "0")}
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </div>
  )
}
