import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  margin-bottom: 7rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Dan Sack, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

export default Footer