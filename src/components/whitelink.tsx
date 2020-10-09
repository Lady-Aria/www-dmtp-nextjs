import React from "react"
import ColorLink from "./colorlink"

type WhiteLinkProps = {
  href: string
}

const WhiteLink: React.FC<WhiteLinkProps> = ({ href, children }) => (
  <ColorLink color="white" href={href}>
    {children}
  </ColorLink>
)

export default WhiteLink
