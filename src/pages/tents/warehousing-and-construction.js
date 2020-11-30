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
        <Topper headerText="Warehousing & Construction" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
<p>
We can cover just about any worksite that needs to be sheltered from the elements; Clearspan fabric structures can reach over 100 feet wide and can extend to over 400 feet. There are no support columns or crossbars to get in the way either, which translates into a safe and efficient environment for vehicles and heavy equipment.
</p>
<p>
We also have the ideal solution for your short or long term storage needs.
</p>
<ul className="list-disc list-inside">
    <li>Integrated side wall options (including hard walls and double doors) allow for efficient climate control and creates a weather-proof structure</li>
    <li>Flooring systems are designed to channel water away from the tent, or carry the weight of a forklift</li>
    <li>Perimeter heights over 4m, and ridge heights over 8m (we can cover a two storey house) are available</li>
    <li>Box beam construction is engineered to exceed all provincial building code requirements</li>
</ul>
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
      filter: { relativeDirectory: { eq: "warehousing" } }
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
