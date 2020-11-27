import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #4F9A1B;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #4F9A1B;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    color: #000000;
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/404">Tents</NavItem>
      <NavItem to="/party-rentals">Party Rentals</NavItem>
      <NavItem to="/404">Get A Quote</NavItem>
    </>
  )
}

export default NavbarLinks