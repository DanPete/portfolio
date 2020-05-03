import React from 'react'
import styled from 'styled-components'

import { theme, media } from '../../styles'


const Link = styled.a`
  padding: 1em;
  background: ${theme.colors.blueGray};
  color: ${theme.colors.light};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  white-space: nowrap;
  transition: all 0.1s;

  &:hover {
    box-shadow: none;
    /* background-color: ${theme.colors.mayerPurple} */
  }

  ${media.small} {
    align-self: center;
    margin-top: 1em;
  }
 
`

const Button = ({text, to}) => {
  console.log(to)
  return (
    <Link href={to} target="_blank" rel="noopener noreferrer">
      {text}
    </Link>
  )
}

export default Button