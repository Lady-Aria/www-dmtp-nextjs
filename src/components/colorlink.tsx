import React from "react"
import Link from "next/link"

type ColorLinkProps = {
  href: string
  color: string
  className?: string
  activeClassName?: string
}

const ColorLink: React.FC<ColorLinkProps> = ({
  href,
  color,
  className,
  activeClassName,
  children,
}) => (
  <Link href={href}>
    <a className={`${color}-link ${className}`}>{children}</a>
  </Link>
)

ColorLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default ColorLink
