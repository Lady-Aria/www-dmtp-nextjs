import React from "react"
import styled from "styled-components"
import Container from "./container"
import Row from "./row"
import WhiteLink from "./whitelink"
import logosvg from "../assets/svg/logo.svg"
import Link from "next/link"
import AltView from "./altview"
import ZoomImage from "./zoomimage"
import title1img from "../assets/images/title1.png"

type ImgProps = {
  className?: string
}

const BgImage: React.FC<ImgProps> = ({ className, children }) => (
  <div className={`bg ${className}`}>{children}</div>
)

const BgSection = styled(BgImage)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repear;
  background-size: cover;
  overflow: hidden;
`

const Header: React.FC = () => (
  <div className="relative h-96">
    <BgSection className="absolute left-0 top-0 w-full h-full z-0" />

    <div
      className="absolute left-0 top-0 w-full h-full z-10"
      style={{
        background:
          "linear-gradient(180deg, rgb(10, 10, 10, 0) 0%, rgb(10, 10, 10, 1) 80%, rgb(10, 10, 10, 1) 100%)",
      }}
    />

    <div className="absolute left-0 top-0 w-full h-full z-20 py-4">
      <Container>
        <AltView size="lg">
          <div className="my-8">
            <Row isCentered={true} className="w-full">
              <div className="w-6/10">
                <Link href="/">
                  <a>
                    <ZoomImage fluid={title1img} alt="Title" />
                  </a>
                </Link>
              </div>
            </Row>
            <Row isCentered={true} className="mt-4">
              <Row className="uppercase text-sm">
                <div className="px-8">
                  <WhiteLink href="/about">About</WhiteLink>
                </div>
                <div className="px-8">
                  <WhiteLink href="/cast">Cast & Crew</WhiteLink>
                </div>
              </Row>
            </Row>
          </div>
          <div className="mt-4">
            <Row className="justify-between">
              <div className="w-3/10"></div>
              <div className="w-4/10">
                <Link href="/">
                  <a>
                    <ZoomImage fluid={title1img} alt="Title" />
                  </a>
                </Link>
              </div>

              <Row className="w-3/10 justify-end">
                <Row className="uppercase text-sm">
                  <div>
                    <WhiteLink href="/about">About</WhiteLink>
                  </div>
                  <div className="pl-8">
                    <WhiteLink href="/cast">Cast & Crew</WhiteLink>
                  </div>
                </Row>
              </Row>
            </Row>
          </div>
        </AltView>
      </Container>
    </div>
  </div>
)

export default Header
