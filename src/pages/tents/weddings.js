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
        <Topper headerText="Weddings" />
        <div className="container mb-8 pr-8 pl-8">
          <div className="lg:pr-6 lg:mt-0">
            <p>
              Tents are a great way to create a venue just about anywhere. With
              the help of our expert staff, we will ensure you have the perfect
              setting to celebrate your wedding day. But Mother Nature is the
              ultimate wedding crasher, so if she gets a little rowdy, we
              guarantee our tents will keep her under wraps (we can’t vouch for
              the groomsmen, though).
            </p>
            <p>
              Our tents always include sidewalls, but if the weather turns fair
              they can be removed in a matter of minutes. You always get a
              combination of window and solid walls, but unique to Rebel Tents
              are mesh walls; they keep the elements out but you hardly know
              they’re there. We also have tent liners available for an
              extra-chic effect.
            </p>
            <p>
              Flooring is always a consideration but not always necessary in a
              tent. We have basic options available, but hardwood finishes and
              carpet can help create that perfect look. Beautiful hardwood dance
              floors are the most popular, with grass between your toes
              everywhere else.
            </p>
            <p>
              Most wedding receptions will carry on late into the night, so
              lighting is an important consideration. Rebel Tents has very
              affordable lighting packages with dimmer switches always included.
              If you want more elegance, ask about our chandeliers. For a nice
              twinkle, we offer string-lighting. Whatever your vision, lighting
              can help tie it all together.
            </p>
            <p>
              Tent liners, pole wraps, and string lighting are all great ways to
              decorate just about any tent, no matter the size. Let us know your
              vision and we will do our best to make your dreams come true.
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
      filter: { relativeDirectory: { eq: "weddings" } }
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
