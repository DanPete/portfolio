import React from 'react'
import styled from 'styled-components'

import { theme, media } from '@styles'

import { FormattedIcon } from '@components/icons'

const Container = styled.a`
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: ${theme.colors.darkBlueLighter};
  background-color: ${theme.colors.light};
  border: 1px solid ${theme.colors.clearlinkBlue};
  box-shadow: ${theme.boxShadow};
  display: inline-block;
  transition: all 0.2s;
  &:hover {
    box-shadow: none;
    background-color: ${theme.colors.darkBlueLighter};
    color: ${theme.colors.light};
  }
  &:hover svg {
    fill: white;
  }
  ${media.small} {
    flex-basis: 40%;
    padding: 0.7em;
    margin-top: 1em;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 1em;
    width: 25px;
    height: 25px;
  }
`

const Text = styled.div``

const ContactLink = ({ text, icon, url }) => {
  return (
    <Container href={url} target="_blank" rel="nofollow noopener noreferrer">
      <Wrapper>
        <FormattedIcon icon={icon}/>
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  )
}

export default ContactLink