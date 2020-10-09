import React from "react"

type HideSmallProps = {
  size?: string
  show?: boolean
  className?: string
  style?: any
}

const HideSmall: React.FC<HideSmallProps> = React.forwardRef(
  ({ size, show, className, style, children }, ref: any) => {
    if (show) {
      return (
        <div className={`${size}:hidden ${className}`} style={style} ref={ref}>
          {children}
        </div>
      )
    } else {
      return (
        <div
          className={`hidden ${size}:block ${className}`}
          style={style}
          ref={ref}
        >
          {children}
        </div>
      )
    }
  }
)

HideSmall.defaultProps = {
  className: "",
  style: {},
  size: "md",
  show: false,
}

export default HideSmall
