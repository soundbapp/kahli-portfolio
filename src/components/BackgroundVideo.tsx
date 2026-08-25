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

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SRC
    }

    return () => {
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
        className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover ${
          flipped ? "scale-y-[-1]" : ""
        }`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  )
}
