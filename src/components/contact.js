import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Element } from 'react-scroll'
import Sal from './sal'

import { Container, Section, theme, media } from '@styles'
import { contactLinks, contactCopy } from '@config'

import ContactLink from './contactLink'


const ContactContainer = styled(Container)`
  ${media.largeUp} {
    display: flex;
    justify-content: space-between;
    margin-right: 8em;
  }
`

const LeftSide = styled.div`
  /* width: 60%; */
  ${media.largeUp} {
    margin-right: 8em;
  }
`

const RightSide = styled.div`
  /* width: 30%; */
`

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 1em;
`

const Copy = styled.h5`
  color: ${theme.colors.dark};
  max-width: 900px;
  font-size: 1.4rem;
  margin: 1em 0;
  ${media.small} {
    margin-bottom: 1em;
  }
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
const Insta = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-content: flex-start;
  grid-template-columns: repeat(9, 1fr);
  overflow-x: scroll;
  margin: 3em 2em 0 2em;
  ${media.largeUp} {
    grid-template-columns: repeat(3, 125px);
    overflow-x: hidden;
    margin: 0;
  }
  a:hover {
    filter: grayscale(100%)
  }
`

const Contact = () => {
  return (
    <Section bgColor={theme.colors.light} id="contact">
      <Element name="contact" />
      <ContactContainer>
        <LeftSide>
        <Sal>
          <Title>Contact</Title>
        </Sal>
        <Sal>
          {contactCopy.map((text, i) => <Copy key={i}>{text}</Copy>)}
          {/* <Copy>{contactCopy}</Copy> */}
        </Sal>
        <Sal>
          <Content>
            {contactLinks.map(link => <ContactLink key={link.name} {...link} />)}
          </Content>
        </Sal>
        </LeftSide>
        {/* <RightSide>
        <Sal>
          <Insta>
            {insta.map((gram, i) => (
              <a href="https://instagram.com/dan_pete_" target="_blank" rel="noopener noreferrer">
                <Img fixed={gram.node.localFile.childImageSharp.fixed} />
              </a>
              )
            )}
          </Insta>
        </Sal>
        </RightSide> */}
      </ContactContainer>
    </Section>
  )
}

export default Contact