import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/sitemetadata"

import Row from "../components/row"
import Container from "../components/container"
import ExtLink from "../components/extlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../components/header"
import BWImage from "../components/bwimage"
import WhiteExtLink from "../components/whiteextlink"

import ariannaimg from "../assets/images/arianna.jpg"
import amandaimg from "../assets/images/amanda.jpg"
import laurenimg from "../assets/images/lauren.jpg"
import chrisimg from "../assets/images/chris.jpg"
import sierraimg from "../assets/images/sierra.jpg"

const Cast: React.FC = () => {
  const { siteTitle, social } = useSiteMetadata()

  return (
    <Layout path="/cast" title={siteTitle}>
      <SEO title="Cast & Crew" />

      <Header />

      <Container className="mt-8">
        <Row wrap={true} className="w-full">
          <div className="w-full lg:w-3/12 mb-8">
            <BWImage
              fluid={ariannaimg}
              alt="Arianna"
              className="rounded-full"
            />
          </div>
          <div className="w-full lg:w-9/12 text-white-99 lg:pl-16">
            Bel Canto and Can Belto diva, Arianna Armon (Winifred
            Sanderson/Co-producer) is thrilled to be bringing Winifred Sanderson
            back for the third year in a row. Outside of her Halloween
            shenanigans, she has appeared in productions of Pirates of Penzance
            (Mabel), Sound of Music (Maria), A Little Night Music (Anne
            Eggerman), Into the Woods (the Witch), been a featured performer in
            the Second Act Series at 54 Below, created the character of Lady
            Aria Phantasy, and performed in multiple concert and cabaret shows
            all over the world. You can follow her creative adventures, life
            with the Englishman, and see all the pictures of her cats on
            Instagram via{" "}
            <WhiteExtLink href="https://www.instagram.com/ladyaria_/">
              @ladyaria_
            </WhiteExtLink>
            .
          </div>
        </Row>
      </Container>

      <Container className="mt-8">
        <Row wrap={true}>
          <div className="w-full lg:w-3/12 mb-8">
            <BWImage fluid={amandaimg} alt="Amanda" className="rounded-full" />
          </div>
          <div className="w-full lg:w-9/12 text-white-99 lg:pl-16">
            Amanda Lee Myers (Sarah Sanderson): Amanda is thrilled to return to
            her role as Sarah Sanderson in this special virtual edition of the
            Hocus Pocus characters. Amanda is a singer, dancer, actor and comedy
            writer, usually seen regionally in musical theater productions as
            well as front manning event bands, but unfortunately, all shows were
            cancelled this year due to Covid. Last year she performed as Zelda
            (understudying Cathy) in Singing in the Rain as well as A Chorus
            Line at The Cape Playhouse and Shrek and Oklahoma at Broadway at
            Sacramento Music Circus. Other favorite performances include Gypsy
            of the Year (Broadway), Much Ado About Nothing (Beatrice), Pride and
            Prejudice (Lydia), Annie Get Your Gun (Winnie Tate), Little Women
            (Amy), You’re a Good Man, Charlie Brown (Sally), The Music Man
            (Zaneeta), Cats (Jellylorum), Carousel (Louise), and Curtains
            (Bambi). Amanda is a former professional dancer with Philadanco II
            and earned Bachelor degrees in Vocal Performance and Biblical
            Studies. This year she trained at the prestigious Second City
            Theater and has been working on several projects (safely from home)
            pursuing a career in comedy writing. She is proud mother to two
            wonderful rescue dogs. Soli Deo Gloria.
          </div>
        </Row>
      </Container>

      <Container className="mt-8">
        <Row wrap={true}>
          <div className="w-full lg:w-3/12 mb-8">
            <BWImage fluid={laurenimg} alt="Lauren" className="rounded-full" />
          </div>
          <div className="w-full lg:w-9/12 text-white-99 lg:pl-16">
            Lauren Gismondi (Mary Sanderson and Screenwriter) is a native NYer
            and a maven to the digital ways of making art. She is a founding
            member of Divas On Tap NYC, a band that consists of her roommates.
            Favorite productions: La Farranucci, Grease, Assassins, The Ballad
            of Baby Doe, and The Sound of Music. She has co-starred in several
            new productions and workshops of new musicals in the last few years,
            one of which was half way through its run at the Hudson Guild
            Theatre before being interrupted by the Coronavirus. Thanks to
            Arianna for including her in this project! BFA SUNY Fredonia. Much
            love and mad respect for her team: Beth, Ben, and Mimi.{" "}
            <WhiteExtLink href="www.laurengismondi.com">
              laurengismondi.com
            </WhiteExtLink>
            .
          </div>
        </Row>
      </Container>

      <Container className="mt-8">
        <Row wrap={true}>
          <div className="w-full lg:w-3/12 mb-8">
            <BWImage fluid={chrisimg} alt="Chris" className="rounded-full" />
          </div>
          <div className="w-full lg:w-9/12 text-white-99 lg:pl-16">
            Christopher Robert Prozeller (Anita Lyft) is a New York based actor
            who has performed off Broadway and with opera companies around the
            city. Like most people, he loves Halloween and is no Hocus Pocus
            virgin, either! He is so excited to help bring this fan based spooky
            Sanderson Sister story to LIFE! Find him at{" "}
            <WhiteExtLink href="christopherrobertprozeller.com">
              christopherrobertprozeller.com
            </WhiteExtLink>{" "}
            or on any social media,{" "}
            <WhiteExtLink href="https://www.instagram.com/cprozeller">
              @cprozeller
            </WhiteExtLink>
            !
          </div>
        </Row>
      </Container>

      <Container className="mt-8">
        <Row wrap={true}>
          <div className="w-full lg:w-3/12 mb-8">
            <BWImage fluid={sierraimg} alt="Sierra" className="rounded-full" />
          </div>
          <div className="w-full lg:w-9/12 text-white-99 lg:pl-16">
            Sierra Rein (Producer, Editor, Props) has produced a "Christmas in
            July" video celebration for Manhattan Holiday Carolers and is now
            excited to be a part of her other favorite
            Holiday...Hallowe'en!...and to work with new and old friends. She’s
            a regional musical theater performer (Ogunquit, Goodspeed Opera,
            Fullerton CLO), who has also waved tentacles, swords, and wands for
            Disney Cruise Line on the high seas. In the New York City area,
            Sierra has been an actor-singer, puppeteer, winner of MAC and Bistro
            Cabaret awards, and posts a lot of cat and sci-fi-themed photos
            online via{" "}
            <WhiteExtLink href="https://twitter.com/sierrarein">
              @sierrarein
            </WhiteExtLink>
            .
          </div>
        </Row>
      </Container>

      <Container className="text-center text-white py-32">
        <div className="mt-16">
          <ExtLink href={`https://www.instagram.com/${social.instagram}`}>
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              className="text-white text-5xl"
            />
          </ExtLink>
        </div>
      </Container>
      {/* </AltView> */}
    </Layout>
  )
}

export default Cast
