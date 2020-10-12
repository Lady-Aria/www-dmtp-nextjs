import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSiteMetadata from "../hooks/sitemetadata"

const NotFoundPage: React.FC = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
