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
        <Topper headerText="Corporate Events" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>
            The celebration of important milestones for a company cannot be ignored; it helps shape the company’s corporate image, solidify employee loyalty, establish industry credibility, and most importantly, give you and excuse to boast and party. Our tents can help your company display its grandness and success with elegance and awe. Big or small, it will make a lasting impression.
            </p>
            <p>
            Company picnics and golf tournaments are a great way to show staff your appreciation for all their hard work. Tents allow you to choose a local park, a luxury golf and country club or the company’s front lawn to create a venue just about anywhere.
            </p>
            <p>
            Parking lot ‘Tent Sales’ are also very popular these days with car dealerships, sporting outlets, furniture stores, and home improvement superstores. Tents get people’s attention and shout Sale! If you are considering a sale this year, inquire about our ‘Tent Sale for Tent Sales’ promotion.
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
      filter: { relativeDirectory: { eq: "corporate-events" } }
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
