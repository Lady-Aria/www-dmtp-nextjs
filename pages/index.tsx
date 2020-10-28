import React from "react"
import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import useSiteMetadata from "../src/hooks/sitemetadata"
import Row from "../src/components/row"
import ZoomImage from "../src/components/zoomimage"
import Container from "../src/components/container"
import ExtLink from "../src/components/extlink"
import Header from "../src/components/header"
import title2img from "../public/images/title2.png"
import SocialLinks from "../src/components/sociallinks"

const Index: React.FC = () => {
  const { siteTitle, social } = useSiteMetadata()

  return (
    <Layout path="/" title={siteTitle}>
      <SEO title="Home" />

      <Header />

      <Container className="py-4">
        <Row isCentered={true}>
          <div>
            <iframe
              className="block"
              src="https://embed.restream.io/player/index.html?token=5819895f61778f3f1d12b3b18d6a1967"
              width="960"
              height="576"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </Row>
      </Container>

      <Container className="text-center text-white py-8">
        <div className="lg:px-72 xl:px-96">
          <div className="text-xl">
            {/* <ExtLink href={`mailto:casting@deadmanstoeproductions.com`}>
            casting@deadmanstoeproductions.com
          </ExtLink> */}
            Sisters! Tis time! Dead Man's Toe Productions is pleased to announce
            that Bring Us to Life, A Hocus Pocus Parody will premiere October
            28th at 7pm! Watch it here and be sure to follow us on Instagram at{" "}
            <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
              @dmt.prod
            </ExtLink>{" "}
            for the most current updates, behind the scenes looks, and general
            Sanderson Sisters shenanigans!
          </div>
        </div>
      </Container>

      <Container className="py-8">
        <Row isCentered={true}>
          <div className="w-full lg:w-4/10 mt-4">
            <ZoomImage fluid={title2img} alt="Secondary Title" />
          </div>
        </Row>
      </Container>

      <SocialLinks />
      {/* </AltView> */}
    </Layout>
  )
}

export default Index
