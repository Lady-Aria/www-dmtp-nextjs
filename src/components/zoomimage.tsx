import React, { useState, useRef } from "react"
import Image from "next/image"

type ZoomImageProps = {
  fluid: any
  extZoom?: any
  zoom?: number
  alt?: string
  className?: string
  size?: [number, number]
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  fluid,
  extZoom,
  size,
  alt,
  className,
}) => {
  const [hover, setHover] = useState(false)

  const photoEl = useRef(null)

  // useEffect(() => {
  //   if (!extZoom) {
  //     gsap.timeline().to(photoEl.current, 0.5, { scale: hover ? 1.15: 1, ease:Power3.easeInOut}, 0)
  //   }
  // }, [hover])

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       { scale: extZoom ? zoom : 1,  },
  //       0
  //     )
  // }, [extZoom])

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true)
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(false)
  }

  return (
    <div
      className={`overflow-hidden trans-ani transform w-full h-full ${
        extZoom || hover ? "scale-105" : "scale-100"
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={photoEl}
    >
      <img
        src={fluid}
        className={`trans-ani w-full h-full ${className}`}
        alt={alt}
      />
    </div>
  )
}

ZoomImage.defaultProps = {
  className: "",
  extZoom: null,
  zoom: 1.05,
  alt: "",
  size: [1000, 1000],
}

export default ZoomImage
