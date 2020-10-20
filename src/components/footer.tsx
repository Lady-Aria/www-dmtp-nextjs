import React from "react"
import useCopyright from "../hooks/copyright"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "./container"

const Footer = () => {
  const { social } = useSiteMetadata()

  return (
    <footer className="w-full pb-8 bg-black">
      <Container>
        <div className="text-xs pt-8 text-center text-white-80">
          {useCopyright()}
        </div>
      </Container>
    </footer>
  )
}

Footer.defaultProps = {
  crumbs: [],
}

export default Footer
