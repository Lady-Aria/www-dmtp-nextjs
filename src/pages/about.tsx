import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/sitemetadata"
import Header from "../components/header"
import SmallContainer from "../components/smallcontainer"
import Container from "../components/container"
import ExtLink from "../components/extlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About: React.FC = () => {
  const { siteTitle, social } = useSiteMetadata()

  return (
    <Layout path="/about" title={siteTitle}>
      <SEO title="About" />

      <Header />

      <SmallContainer className="py-16 text-white-99">
        <p>
          In 2018, Arianna Armon decided to perform as Winifred Sanderson on
          Halloween as part of Petti Cash's Whip It Wednesdays drag show at Icon
          in Astoria, New York. What started out as just popping in to sing "I
          Put a Spell on You" turned into a full 10-minute scripted performance
          with friends Amanda Lee Myers and Stephanie Helfgott as Sarah and Mary
          respectively. That first venture was so much fun that Arianna decided
          to make it an annual event, with plans of building a bigger and better
          show to be booked in various venues throughout the Halloween season,
          with Lindsey Rose and Lauren Gismondi taking over as Sarah and Mary in
          2019. With the events of 2020, it was looking like Winnie and her
          Sisters wouldn't be making an appearance in October. However, after
          finding there was online fandom interest, Arianna reached out to
          Amanda and Lauren, took Sierra Rein onboard as Producer/Editor, and
          the Sisters decided to go virtual! While 2020 has been a difficult
          year for everyone, it has given this group of wicked women the
          opportunity to level up skills, establish Dead Man's Toe Productions,
          and create a new online "Hocus Pocus" experience. Dead Man's Toe
          Productions looks forward to bringing audiences some virtual magic
          this Halloween. Be sure to follow{" "}
          <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
            @dmt.prod
          </ExtLink>{" "}
          on Instagram for project updates, behind the scenes shenanigans, and
          general Sanderson Sister silliness.
        </p>
        <p className="mt-4">
          Images courtesy of Christopher Michaels{" "}
          <ExtLink href={`https://www.instagram.com/itscmikes`}>
            @itscmikes
          </ExtLink>
          .
        </p>
      </SmallContainer>

      <Container className="text-center text-white py-32">
        <div>
          <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="text-white text-5xl"
            />
          </ExtLink>
        </div>
      </Container>
    </Layout>
  )
}

export default About
