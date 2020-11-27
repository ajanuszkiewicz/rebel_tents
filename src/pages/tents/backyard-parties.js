import React from "react"
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import Topper from "../../components/topper"
import CallToAction from "../../components/cta"


import Gallery from '@browniebroke/gatsby-image-gallery'
import '@browniebroke/gatsby-image-gallery/dist/style.css'

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
    <Topper headerText="Backyard Parties"/>
      <div className="container mb-8 pr-8 pl-8">
        <div className="lg:pr-6 lg:mt-0">
          <p>
          Backyard parties come in all different shapes and sizes.
          </p>
          <p>
          If you weren’t able to keep it small and simple (word got out?!), no problem! we have tents in every size. 10 people, 50 people, 500 people, we can cover them all.
          </p>
        </div>
        <div className="mt-8">

        <Gallery images={images} />


        </div>
      </div>
      <CallToAction/>
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