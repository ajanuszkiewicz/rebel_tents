import React from "react"
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
      <Layout>
        <Topper headerText="Festivals & Fairs" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>
              Festivals and fairs bring communities together, provide education
              and professional development opportunities, offer a public forum
              for artistic and cultural expression, help charities meet annual
              fundraising goals, and allow sport enthusiasts to face new
              challenges. But most importantly, they’re the perfect place to
              have a good time.
            </p>
            <p>
              The logistics required to organize a festival or fair can be
              overwhelming at the best of times and Rebel Tents would like to
              help bear some of the load. If you are organizing a festival or
              fair we can work with you every step of the way; we offer free
              site evaluations, free 3D layouts, free permit acquisition
              consultation, help establishing electrical requirements, or
              coordinating with water closet and sanitation providers. But if
              you have all those things covered (and kudos to you!), then we are
              happy to just set up the tents.
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

// export default function Home() {
//   return (
//     <div>
//       <Layout>
//       <Topper headerText="Party Rentals"/>
//         <div className="container mb-8 pr-8 pl-8">
//           <div className="lg:pr-6 lg:mt-0">
//             <p>
//             Meet + eat + relax is a great formula for any party, so we’ve got you covered (literally). We have everything from flooring, lighting, interior draping, tent liners, pole covers, fans, heating and cooling systems.
//             </p>
//             <p>
//             So what don’t we do? Well… we are first and foremost a tent rental company, so our ancillary services are only available with the rental of one or more tents. Though we don’t mind if it’s a big tent or a small tent.
//             </p>
//           </div>
//           <div className="mt-8">

//           <Gallery images={images} />

//           </div>
//         </div>
//         <CallToAction/>
//       </Layout>
//     </div>
//   )
// }

export const query = graphql`
  query {
    images: allFile(
      filter: { relativeDirectory: { eq: "festivals-and-fairs" } }
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
