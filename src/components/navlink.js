import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import { Link as ScrollLink, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { globalHistory } from '@reach/router'

const StyledLink = styled(ScrollLink)`
  color: #999;
  font-size: .7rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: #666;
    svg {
      filter: grayscale(0%)
    }
  }
  &.active {
    color: #333;
    svg {
      filter: grayscale(0%)
    }
  }
  svg {
    transition: filter 0.2s;
    filter: grayscale(100%);
    width: 50px;
    height: 50px;
  }
`

const NavLink = ({children, to, svg}) => {

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
      scrollSpy.update()
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
    <StyledLink {...scrollOptions}
      // activeClassName={to === '/' && globalHistory.location.pathname !== '/' ? '' : 'active'} 
      activeClass="active"
      to={to} 
      // partiallyActive={true}
    >
      {children}
    </StyledLink>
  )
}

export default NavLink