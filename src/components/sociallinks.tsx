import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import useSiteMetadata from "../hooks/sitemetadata"
import Container from "./container"
import ExtLink from "./extlink"
import Row from "./row"

const SocialLinks = () => {
  const { siteTitle, social } = useSiteMetadata()

  return (
    <Container className="py-32">
      <Row isCentered={true} className="text-white">
        <div className="mx-4">
          <ExtLink
            href={`https://www.youtube.com/channel/UCDPLBbiILB21j0ckS5-iAuQ`}
          >
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className="text-white text-5xl"
            />
          </ExtLink>
        </div>
        <div className="mx-4">
          <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="text-white text-5xl"
            />
          </ExtLink>
        </div>
      </Row>
    </Container>
  )
}

export default SocialLinks
