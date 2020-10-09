import React from "react"

type AltView = {
  size?: string
  className?: string
  style?: any
}

const AltView: React.FC<AltView> = React.forwardRef(
  ({ size, className, style, children }, ref: any) => {
    return (
      <div className={`${className}`} style={style} ref={ref}>
        <div className={`${size}:hidden`}>{children[0]}</div>
        <div className={`hidden ${size}:block`}>{children[1]}</div>
      </div>
    )
  }
)

AltView.defaultProps = {
  className: "",
  style: {},
  size: "sm",
}

export default AltView
