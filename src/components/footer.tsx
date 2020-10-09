import React from "react"
import useCopyright from "../hooks/copyright"
import useSiteMetadata from "../hooks/sitemetadata"
import ExtLink from "./extlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Container from "./container"

const Footer = () => {
  const { title, social } = useSiteMetadata()

  return (
    <footer className="w-full pb-8">
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
