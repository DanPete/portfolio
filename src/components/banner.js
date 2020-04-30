import React from 'react'
import styled from 'styled-components'

import NavLink from './navlink'

import logo from '../images/DSsm.png'
import Chevron from '../images/svgs/chevron-left.svg'

console.log(logo)


const StyledBanner = styled.div`
  position: relative;
  z-index: 1;
  a {
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    svg {
      width: 30px;
    }
    &.active svg {
      display: none;
    }
    img {
      margin: 0.5rem;
      width: 50px;
      filter: grayscale(100%);
      transition: width 0.5s;
    }
    &.active img {
      margin: 0.5rem auto;
      filter: grayscale(0);
      width: 150px;
    }
    &:hover img {
      filter: grayscale(0);
    }
  }
`

const Banner = ({ siteTitle }) => {
  return (
    <StyledBanner>
      <NavLink to="/">
        <Chevron />
        <img src={logo} alt="Dan Sack - Web Dev"/>
      </NavLink>
    </StyledBanner>
  )
}

export default Banner