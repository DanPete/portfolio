import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Sal from './sal'

import { Container, Section, theme, media } from '@styles'
import { contactLinks, contactCopy } from '@config'

import ContactLink from './contactLink'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 1em;
`

const Copy = styled.h5`
  color: ${theme.colors.dark}
`

const Content = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 800px;
  ${media.small} {
    flex-wrap: wrap;
  }
`

const Contact = () => {
  return (
    <Section bgColor={theme.colors.light} id="contact">
      <Element name="contact" />
      <Container>
        <Sal>
          <Title>Contact</Title>
        </Sal>
        <Sal>
          <Copy>{contactCopy}</Copy>
        </Sal>
        <Sal>
          <Content>
            {contactLinks.map(link => <ContactLink key={link.name} {...link} />)}
          </Content>
        </Sal>
      </Container>
    </Section>
  )
}

export default Contact