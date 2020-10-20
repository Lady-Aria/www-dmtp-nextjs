import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/sitemetadata"
import Row from "../components/row"
import ZoomImage from "../components/zoomimage"
import Container from "../components/container"
import ExtLink from "../components/extlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../components/header"
import title2img from "../assets/images/title2.png"
import SocialLinks from "../components/sociallinks"

const Index: React.FC = () => {
  const { siteTitle, social } = useSiteMetadata()

  return (
    <Layout path="/" title={siteTitle}>
      <SEO title="Home" />

      <Header />

      {/* <AltView size="md"> */}
      {/* <div>
            <Img
              fluid={data.casting1.childImageSharp.fluid}
              alt="Casting 1"
              className="w-full"
            />
            <Img
              fluid={data.casting2.childImageSharp.fluid}
              alt="Casting 2"
              className="w-full"
            />
            <Img
              fluid={data.casting3.childImageSharp.fluid}
              alt="Casting 3"
              className="w-full"
            />
          </div> */}

      <Container className="mt-4">
        {/* <Row wrap={true} className="justify-between">
          <div className="w-full lg:w-12/50 shadow-md mt-4">
            <ZoomImage
              fluid={data.casting1.childImageSharp.fluid}
              alt="Casting 1"
            />
          </div>
          <div className="w-full lg:w-12/50 shadow-md mt-4">
            <ZoomImage
              fluid={data.casting3.childImageSharp.fluid}
              alt="Casting 3"
            />
          </div>
          <div className="w-full lg:w-12/50 shadow-md mt-4">
            <ZoomImage
              fluid={data.casting4.childImageSharp.fluid}
              alt="Casting 4"
            />
          </div>
          <div className="w-full lg:w-12/50 shadow-md mt-4">
            <ZoomImage
              fluid={data.casting5.childImageSharp.fluid}
              alt="Casting 5"
            />
          </div>
        </Row> */}

        {/* <Row isCentered={true}>
          <div className="w-full lg:w-4/12 shadow-md mt-4">
            <ZoomImage
              fluid={data.title1.childImageSharp.fluid}
              alt="Title 1"
            />
          </div>
        </Row> */}
        <Row isCentered={true}>
          <div className="w-full lg:w-4/10 mt-4">
            <ZoomImage fluid={title2img} alt="Title 2" />
          </div>
        </Row>
      </Container>

      <Container className="text-center text-white py-32">
        <div className="lg:px-96">
          <div className="text-xl">
            {/* <ExtLink href={`mailto:casting@deadmanstoeproductions.com`}>
            casting@deadmanstoeproductions.com
          </ExtLink> */}
            Sisters! Tis time! Dead Man's Toe Productions is pleased to announce
            that Bring Us to Life, A Hocus Pocus Parody will premiere October
            28th at 7pm (viewing link TBD)! Be sure to follow us on Instagram at{" "}
            <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
              @dmt.prod
            </ExtLink>{" "}
            for the most current updates, behind the scenes looks, and general
            Sanderson Sisters shenanigans!
          </div>
        </div>
      </Container>
      <SocialLinks />
      {/* </AltView> */}
    </Layout>
  )
}

export default Index
