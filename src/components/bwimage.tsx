import React, { useState } from "react"
import Image from "next/image"

type BWImageProps = {
  fluid: string
  extZoom?: any
  alt?: string
  className?: string
  size?: [number, number]
}

export const BWImage: React.FC<BWImageProps> = ({
  fluid,
  extZoom,
  alt,
  className,
  size,
}) => {
  const [hover, setHover] = useState(false)

  //const photoEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0,
  //       { opacity: extZoom ? 1 : 0.9, ease: Power3.easeInOut },
  //       0
  //     )
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       {
  //         filter: extZoom ? "grayscale(0)" : "grayscale(1)",
  //         ease: Power3.easeInOut,
  //       },
  //       0
  //     )
  // }, [extZoom])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <div
      className={`ani-t transition-filter w-full h-full`}
      style={{ filter: `grayscale(${extZoom || hover ? "0" : "1"})` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={fluid}
        className={`trans-ani w-full h-full ${className}`}
        alt={alt}
        width={size[0]}
        height={size[1]}
      />
    </div>
  )
}

BWImage.defaultProps = {
  className: "",
  extZoom: null,
  alt: "",
  size: [1000, 1000],
}

export default BWImage
