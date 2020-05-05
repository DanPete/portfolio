import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll'

import { theme, media, mixins } from '../styles'
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
  ${media.small} {
    display: none;
  }
`

const NavButton = styled.div`
  ${mixins.navButton}
`

const MobileNavContainer = styled.div`
  position: fixed;
  z-index: 1;

  &.closed {
    visibility: hidden;
  }
` 

const MobileNavOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: rgba(0,0,0,0.3);
  opacity: 0;
  z-index: -1;
  transition: ${theme.transition};
  transition-delay: .3s;
  &.open {
    opacity: 1;
    transition-delay: 0s;
  }
`
const MobileNav = styled.div`
  max-height: 500px;
  width: 100vw;
  transform: translateY(-100vh);
  background-color: ${theme.colors.light};
  padding: 2em 4em;
  opacity: 1;
  z-index: 100;
  transition: ${theme.transition};
  box-shadow: ${theme.boxShadow};
  transition-delay: .4s;
  &.open {
    transform: translateY(0);
    transition-delay: 0s;
    a {
      opacity: 1
    }
  }
` 
const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const MobileNavLink = styled(ScrollLink)`
  color: ${theme.colors.dark};
  font-size: 3rem;
  margin-top: 1em;
  font-weight: 600;
  opacity: 0;
  transition: opacity 1.5s
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
      <MobileNavContainer className={`${openNav ? 'open' : 'closed'}`}>
        <MobileNav className={`${openNav ? 'open' : 'closed'}`}>
          <MobileNavLinks>
            <MobileNavLink href="#projects" offset={-30} to="projects" {...scrollOptions}>Project</MobileNavLink>
            <MobileNavLink href="#experience" offset={-30} to="experience" {...scrollOptions}>Experience</MobileNavLink>
            <MobileNavLink href="#contact" offset={-30} to="contact" {...scrollOptions}>Contact</MobileNavLink>
          </MobileNavLinks>
        </MobileNav>
        <MobileNavOverlay onClick={() => updateOpenNav(false)} className={`${openNav ? 'open' : 'closed'}`} />
      </MobileNavContainer>
      <Nav className={ scrolledTop ? 'top' : 'scrolled'}>
        <a href="#hero" onClick={() => scroll.scrollToTop()}>
          <NavLogo className={`${scrolledTop ? 'top' : 'scrolled'} ${openNav ? 'open' : 'closed'}`} src={Logo} alt="Dan Sack Web Dev" />
        </a>
        <NavRight className={scrolledTop ? 'top' : 'scrolled'}>
          <NavLink href="#projects" offset={-30} to="projects" {...scrollOptions}>Projects</NavLink>
          <NavLink href="#experience" offset={-30} to="experience" {...scrollOptions}>Experience</NavLink>
          <NavLink href="#contact" offset={-120} to="contact" {...scrollOptions}>Contact</NavLink>
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