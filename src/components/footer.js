import React from 'react'
import styled from 'styled-components'

import { theme, media } from '@styles'

const StyledFooter = styled.footer`
  text-align: center;
  /* margin-bottom: 7rem; */
  color: ${theme.colors.light};
  padding: 1em;
  a {
    color: ${theme.colors.yellow}
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      © {new Date().getFullYear()} Dan Sack, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>.
    </StyledFooter>
  )
}

export default Footer