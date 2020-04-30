import React from "react"
import styled from 'styled-components'
import { media, theme} from '../styles'

import HomeIcon from '../images/svgs/user-male.svg'
import Logo from '../images/DSsm.png'
import WorkIcon from '../images/svgs/briefcase.svg'
import AboutIcon from '../images/svgs/about.svg'
import ContactIcon from '../images/svgs/mailbox.svg'

import NavLink from './navlink'
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  padding: 0.25em 0;
  box-shadow: 0 -1px 4px 0px rgba(0,0,0,0.3);
  z-index: 1;

  ${media.mediumUp} {
    display: none;
  }

`

const StyledLogo = styled.img`
  width: 50px;
  filter: grayscale(100%);
  /* padding: 2px; */
  margin-top: 6px;
  &:hover {
    filter: grayscale(0)
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    > */}
      {/* <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <NavLink to="/">
        <StyledLogo src={Logo} alt=""/>
        {/* Top */}
      </NavLink>
      <NavLink to="projects">
        <WorkIcon />
        Portfolio
      </NavLink>
      <NavLink to="/about">
        <AboutIcon />
        About
      </NavLink>
      <NavLink to="/contact">
        <ContactIcon />
        Contact
      </NavLink>
    {/* </div> */}
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
