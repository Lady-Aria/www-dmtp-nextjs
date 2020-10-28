import React from "react"
import Layout from "../src/components/layout"
import SEO from "../src/components/seo"
import useSiteMetadata from "../src/hooks/sitemetadata"

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
