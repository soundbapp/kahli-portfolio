import { MuxBackgroundVideo } from "@mux/mux-background-video/react"
import { useEffect, useRef } from "react"
import { HLS_SRC, MUX_PLAYBACK_ID } from "../data"

type BackgroundVideoProps = {
  className?: string
  flipped?: boolean
  overlayClassName?: string
}

const POSTER = `https://image.mux.com/${MUX_PLAYBACK_ID}/thumbnail.jpg?time=0&width=1920`

export function BackgroundVideo({
  className = "",
  flipped = false,
  overlayClassName = "bg-black/20",
}: BackgroundVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = wrapRef.current
    if (!root) return

    const video = root.querySelector("video")
    if (!video) return

    // React historically misses applying `muted` for autoplay policies —
    // force it on the DOM node before every play attempt.
    const armMute = () => {
      video.defaultMuted = true
      video.muted = true
      video.volume = 0
      video.setAttribute("muted", "")
      video.setAttribute("playsinline", "")
      video.setAttribute("webkit-playsinline", "")
    }

    const tryPlay = () => {
      armMute()
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Still blocked (rare: Low Power Mode). Keep trying on resume/gesture.
        })
      }
    }

    armMute()
    tryPlay()

    const onReady = () => tryPlay()
    video.addEventListener("loadedmetadata", onReady)
    video.addEventListener("canplay", onReady)
    video.addEventListener("loadeddata", onReady)

    const onAppReady = () => tryPlay()
    window.addEventListener("portfolio:ready", onAppReady)

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay()
    }
    document.addEventListener("visibilitychange", onVisibility)

    // Low Power Mode / strict policies: unlock on first interaction with page
    const unlock = () => tryPlay()
    document.addEventListener("touchstart", unlock, { once: true, passive: true })
    document.addEventListener("pointerdown", unlock, { once: true })

    const retries = [200, 600, 1200, 2500, 4000].map((ms) =>
      window.setTimeout(tryPlay, ms),
    )

    return () => {
      retries.forEach(clearTimeout)
      video.removeEventListener("loadedmetadata", onReady)
      video.removeEventListener("canplay", onReady)
      video.removeEventListener("loadeddata", onReady)
      window.removeEventListener("portfolio:ready", onAppReady)
      document.removeEventListener("visibilitychange", onVisibility)
      document.removeEventListener("touchstart", unlock)
      document.removeEventListener("pointerdown", unlock)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      <MuxBackgroundVideo
        src={HLS_SRC}
        audio={false}
        preload="auto"
        maxResolution="720p"
        className={`absolute inset-0 h-full w-full ${
          flipped ? "scale-y-[-1]" : ""
        }`}
        style={{ objectFit: "cover" }}
      >
        <img
          src={POSTER}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </MuxBackgroundVideo>
      <div className={`pointer-events-none absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}
