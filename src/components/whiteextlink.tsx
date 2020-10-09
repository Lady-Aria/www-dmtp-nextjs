import React from "react"
import ColorExtLink from "./colorextlink"

type LinkProps = {
  href: string
  target?: string
}

const WhiteExtLink: React.FC<LinkProps> = ({ href, target, children }) => (
  <ColorExtLink color="white" href={href} target={target}>
    {children}
  </ColorExtLink>
)

WhiteExtLink.defaultProps = {
  target: "_blank",
}

export default WhiteExtLink
