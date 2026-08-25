import { useState } from "react"

type SafeImageProps = {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

/** Local-first image with optional fallback and no-referrer for hotlink-sensitive CDNs. */
export function SafeImage({
  src,
  alt,
  className = "",
  fallbackSrc,
}: SafeImageProps) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (fallbackSrc && current !== fallbackSrc) {
          setCurrent(fallbackSrc)
        }
      }}
    />
  )
}
