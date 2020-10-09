import React from "react"

type ExtLinkProps = {
  href: string
  target?: string
  className?: string
}

const ExtLink: React.FC<ExtLinkProps> = ({
  href,
  target,
  className,
  children,
}) => (
  <a className={`${className}`} href={href} target={target}>
    {children}
  </a>
)

ExtLink.defaultProps = {
  target: "_blank",
  className: "",
}

export default ExtLink
