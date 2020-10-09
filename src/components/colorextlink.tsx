import React from "react"
import ExtLink from "./extlink"

type ColorExtLinkProps = {
  href: string
  target?: string
  color?: string
}

const ColorExtLink: React.FC<ColorExtLinkProps> = ({
  href,
  target,
  color,
  children,
}) =>
  href !== "" ? (
    <ExtLink className={`${color}-link`} href={href} target={target}>
      {children}
    </ExtLink>
  ) : (
    <>{children}</>
  )

ColorExtLink.defaultProps = {
  target: "_blank",
  color: "black",
}

export default ColorExtLink
