import React, {useStaticQuery, graphql} from 'react'

import BackgroundSlider from 'gatsby-image-background-slider'

export default function Carousel () {
    return (
  <>
    <BackgroundSlider 
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "carousel"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 4000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]} 

      // pass down standard element props
      style={{
        transform: "rotate(-2deg) scale(.9)",
      }}           
    > 
    </BackgroundSlider>
  </>
)  
    }
