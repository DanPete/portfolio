import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll'

import { theme, media } from '../styles'
import Logo from '../images/DScrop.png'
// TODO: Add social links?

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: ${theme.transition};
  box-shadow: ${theme.boxShadow};

  &.not-mounted {
    transform: translateY(-70px);
  }

  &.scrolled {
    background-color: ${theme.colors.light}
  }

  &.top {
    background-color: transparent;
    box-shadow: none;
  }
`

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  padding: 0 40px;
  top: 0px;

  ${media.medium} {
    padding: 0 1em;
  }
`
const NavLogo = styled.img`
  width: 50px;
  cursor: pointer;
`

const NavRight = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 30%; */
  a + a {
    margin-left: 3em;
  }

  &.scrolled a {
    color: ${theme.colors.darkBlue}
  }
`

const NavLink = styled(ScrollLink)`
  color: ${theme.colors.light};
  font-size: 1.125rem;
  
  &:hover {
    color: ${theme.colors.lightGray}
  }
`

const NavButton = styled.div`
`

const Navigation = () => {

  const [scrolledTop, updateScrolledTop] = useState(true)
  const [scrollHeight, updateScrollHeight] = useState(0)
  const [openNav, updateOpenNav] = useState(false)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    Events.scrollEvent.register('begin', () => {
      updateOpenNav(false)
    });
    setTimeout(() => setIsMounted(true), 400);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset < 100) {
      updateScrollHeight(window.pageYOffset);
    }
    updateScrolledTop(window.pageYOffset < 100);
  }

  const scrollOptions = {
    spy: true,
    smooth: true,
    delay: 100,
    duration: 900,
  }

  return (
    <NavContainer className={`
      ${scrolledTop ? 'top' : 'scrolled'} 
      ${openNav ? 'open' : 'closed'}
      ${isMounted ? 'mounted' : 'not-mounted' } 
    `} scrollHeight={scrollHeight}>
      <Nav className={ scrolledTop ? 'top' : 'scrolled'}>
        <a onClick={() => scroll.scrollToTop()}>
          <NavLogo className={scrolledTop ? 'top' : 'scrolled'} src={Logo} alt="Dan Sack Web Dev" />
        </a>
        <NavRight className={scrolledTop ? 'top' : 'scrolled'}>
          <NavLink href="#projects" offset={-120} to="projects" {...scrollOptions}>Projects</NavLink>
          <NavLink href="#projects" offset={-120} to="projects" {...scrollOptions}>Experience</NavLink>
          <NavLink href="#projects" offset={-120} to="projects" {...scrollOptions}>Contact</NavLink>
          <NavButton
            onClick={() => updateOpenNav(!openNav)}
            className={`${openNav ? 'open' : 'closed'} ${scrolledTop ? 'top' : 'scrolled'}`}
          >
            <div></div>
            <div></div>
          </NavButton>
        </NavRight>
      </Nav>
    </NavContainer>
  )
}

export default Navigation