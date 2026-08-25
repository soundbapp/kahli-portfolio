import { useEffect, useRef } from "react"
import Hls from "hls.js"
import { HLS_SRC } from "../data"

type BackgroundVideoProps = {
  className?: string
  flipped?: boolean
  overlayClassName?: string
}

export function BackgroundVideo({
  className = "",
  flipped = false,
  overlayClassName = "bg-black/20",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // iOS / mobile autoplay requirements
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.setAttribute("muted", "")
    video.setAttribute("playsinline", "")
    video.setAttribute("webkit-playsinline", "")
    video.setAttribute("x5-playsinline", "true")

    const tryPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked (e.g. Low Power Mode) — retry on next gesture
        })
      }
    }

    let hls: Hls | null = null
    const prefersNativeHls =
      video.canPlayType("application/vnd.apple.mpegurl") !== ""

    // Prefer native HLS on iOS/Safari — more reliable for autoplay
    if (prefersNativeHls) {
      video.src = HLS_SRC
    } else if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        startLevel: -1,
        capLevelToPlayerSize: true,
      })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay)
    } else {
      video.src = HLS_SRC
    }

    const onReady = () => tryPlay()
    video.addEventListener("loadedmetadata", onReady)
    video.addEventListener("canplay", onReady)
    video.addEventListener("loadeddata", onReady)

    // Unlock after first gesture (Low Power Mode / strict autoplay policies)
    const unlock = () => tryPlay()
    document.addEventListener("touchstart", unlock, { once: true, passive: true })
    document.addEventListener("touchend", unlock, { once: true, passive: true })
    document.addEventListener("click", unlock, { once: true })

    const onVisibility = () => {
      if (document.visibilityState === "visible") tryPlay()
    }
    document.addEventListener("visibilitychange", onVisibility)

    // After loading screen dismisses
    const onAppReady = () => tryPlay()
    window.addEventListener("portfolio:ready", onAppReady)

    tryPlay()
    const retryTimers = [300, 800, 1500, 3000].map((ms) =>
      window.setTimeout(tryPlay, ms),
    )

    return () => {
      retryTimers.forEach(clearTimeout)
      video.removeEventListener("loadedmetadata", onReady)
      video.removeEventListener("canplay", onReady)
      video.removeEventListener("loadeddata", onReady)
      document.removeEventListener("touchstart", unlock)
      document.removeEventListener("touchend", unlock)
      document.removeEventListener("click", unlock)
      document.removeEventListener("visibilitychange", onVisibility)
      window.removeEventListener("portfolio:ready", onAppReady)
      hls?.destroy()
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className={`absolute left-1/2 top-1/2 h-full w-full min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${
          flipped ? "scale-y-[-1]" : ""
        }`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}
