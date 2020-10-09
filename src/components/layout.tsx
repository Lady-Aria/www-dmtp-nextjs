import React from "react"
import Head from "next/head"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import Footer from "./footer"

library.add(fab)

type LayoutProps = {
  title?: string
  path?: string
  index?: boolean
}

const Layout: React.FC<LayoutProps> = ({ title, path, children }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-screen-h bg-dark-gray shadow-card">{children}</main>

      <Footer />
    </>
  )
}

export default Layout
