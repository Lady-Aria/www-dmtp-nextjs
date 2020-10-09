import React from "react"

type ImgProps = {
  fluid: any
  alt?: string
  className?: string
  style?: any
}

const Img: React.FC<ImgProps> = ({ fluid, alt, className, style }) => (
  <img src={fluid} alt={alt} className={className} style={style} />
)

export default Img

Img.defaultProps = {
  alt: "",
  className: "",
  style: {},
}
