import React from "react"

export const CONTAINER_MARGIN_LEFT =
  "pl-2 md:pl-16 lg:pl-40 xl:pl-65 2xl:pl-80 3xl:pl-112"
export const CONTAINER_MARGIN_RIGHT =
  "pr-2 md:pr-16 lg:pr-40 xl:pr-65 2xl:pr-80 3xl:pr-112"
export const CONTAINER_MARGIN = `${CONTAINER_MARGIN_LEFT} ${CONTAINER_MARGIN_RIGHT}`

type ContainerProps = {
  className?: string
  style?: any
}

const SmallContainer: React.FC<ContainerProps> = ({
  className,
  style,
  children,
}) => (
  // <div className={`container px-4 mx-auto ${className}`} style={style}>
  //   {children}
  // </div>
  <div className={`${CONTAINER_MARGIN} ${className}`} style={style}>
    {children}
  </div>
)

SmallContainer.defaultProps = {
  className: "",
  style: {},
}

export default SmallContainer
