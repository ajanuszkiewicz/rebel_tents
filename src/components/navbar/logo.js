import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import logo from "../../images/rebel-logo.png"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 140px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
        file(name: { eq: "rebel-logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fixed(width: 140, pngQuality: 80) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return (
    <LogoWrap as={Link} to="/">
    {/* <Img fixed={data.file.childImageSharp.fixed} alt="logo" /> */}
    <img src={logo} alt="Logo" className="m-0" />
  </LogoWrap>
  )
}

export default Logo