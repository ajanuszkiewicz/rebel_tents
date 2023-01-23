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

const NavButton = styled(Link)`
background-color: #4f9a1b;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 9999px;
  width:85%;

  :hover {
    background-color: #62c021;
  }

  @media (max-width: 768px) {
    color: white;
    padding: 20px 0;
    margin-top: 20px;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/tents/">Tents</NavItem>
      <NavItem to="/party-rentals">Party Rentals</NavItem>
      <NavItem to="/work-for-rebel-tents">Work For Rebel Tents</NavItem>
      <NavButton to="/get-a-quote">Get A Quote</NavButton>
    </>
  )
}

export default NavbarLinks