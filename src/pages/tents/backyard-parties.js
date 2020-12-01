import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Topper from "../../components/topper"
import CallToAction from "../../components/cta"

import Gallery from "@browniebroke/gatsby-image-gallery"
import "@browniebroke/gatsby-image-gallery/dist/style.css"

const MyPage = ({ data }) => {
  const images = data.images.edges.map(({ node }) => ({
    ...node.childImageSharp,
    // Use original name as caption.
    // The `originalName` is queried inside the `thumb` field,
    // but the `Gallery` component expects `caption` at the top level.
    caption: node.childImageSharp.thumb.originalName,
  }))
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rebel Tents - Tent rentals for backyard parties</title>
        <meta
          name="description"
          content="Rebel Tents will help you transform your backyard into best place to party."
        />
      </Helmet>
      <Layout>
        <Topper headerText="Backyard Parties" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>Backyard parties come in all different shapes and sizes.</p>
            <p>
              If you weren’t able to keep it small and simple (word got out?!),
              no problem! we have tents in every size. 10 people, 50 people, 500
              people, we can cover them all.
            </p>
          </div>
          <div className="mt-8">
            <Gallery images={images} />
          </div>
        </div>
        <CallToAction />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ImagesForBackyard {
    images: allFile(
      filter: { relativeDirectory: { eq: "backyard" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            thumb: fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
              originalName
            }
            full: fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default MyPage
