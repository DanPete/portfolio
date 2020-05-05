import React, { useEffect, useState } from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Container, theme, media } from '../styles'
import { Element } from 'react-scroll'

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   top: -3rem;
//   position: relative;
//   background: rgb(204,204,204);
//   background: linear-gradient(0deg, rgba(187,187,187,1) , rgba(255,255,255,1));
//   @media (min-width: 1200px) {
//     grid-template-columns: 1fr 2fr;
//     top: 5px;
//   } 

// `
const HeroWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.bgColor ? props.bgColor : theme.colors.darkBlue};
  padding: 0 1rem;
  ${media.largeUp} {
    padding: 0 5rem;
  }
`

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.small} {
    display: block;
    margin-top: 2em;
  }
`
const HeroImg = styled.div`
  /* display: none; */
  /* top: 2rem; */
  /* position: relative */
  margin: 0 auto;
  width: 65%;
  ${media.mediumUp} {
    width: 40%;
  }
  ${media.largeUp} {
    width: 30%;
    margin-left: auto;
    margin-right: 5em;
  }
  img {
    border-radius: 50%;
  }
`

const HeroContent = styled.div`
  ${media.small} {
    margin-top: 1rem;
    text-align: center;
  }
  ${media.mediumUp} {
    width: 45%;
  }
`


const HeroText = styled.h1`
  margin-bottom: 0.5rem;
  max-width: 900px;
  ${media.medium} {
    max-width: 700px;
  }
  ${media.small} {
    max-width: 500px;
    text-align: center;
  }
  z-index: 1;
`

const HeroCopy = styled.h3`
  max-width: 900px;
  margin-bottom: 1rem;

  ${media.medium} {
    font-size: 2rem;
  }
`

const HeroSubCopy = styled.h5`
  font-size: 1.125rem;
  color: ${theme.colors.gray};
  max-width: 480px;
  margin-bottom: 0.7rem;

  ${media.medium} {
    font-size: 1rem;
  }
`

const HeroLink = styled.a`
  color: ${theme.colors.yellow};
  line-height: 2.5rem;

  ${media.medium} {
    font-size: 2rem;
  }

  &:hover {
    color: ${theme.colors.darkBlue};
    text-shadow: -1px -1px 0 ${theme.colors.yellow}, 1px -1px 0 ${theme.colors.yellow}, -1px 1px 0 ${theme.colors.yellow}, 1px 1px 0 ${theme.colors.yellow};
    cursor:pointer;
  }
`

const HeroCTA = styled.a`
  margin-top: 2rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: ${theme.colors.light};
  background-color: ${theme.colors.darkBlue};
  border: 1px solid ${theme.colors.clearlinkBlue};
  box-shadow: ${theme.boxShadow};
  display: inline-block;

  &:hover {
    box-shadow: none;
    background-color: ${theme.colors.darkBlueLighter};
    /* color: ${theme.colors.clearlinkBlue}; */
    transition-delay: unset;
  }

  ${media.small} {
    margin-top: 1em;
  }

`

const Hero = ({ data, bgColor }) => {
  const {file} = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "ds-photo-sq.jpeg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 1000)
  }, [])

  const one = () => <HeroSubCopy style={{ transitionDelay: '200ms', color: 'white'}}>{data.intro}</HeroSubCopy>
  const two = () => <HeroText style={{ transitionDelay: '300ms'}}>{data.name}</HeroText>
  const three = () => (<HeroCopy style={{ transitionDelay: '400ms'}}>
    {data.copy}
    <HeroLink href={data.companyURL} target="_blank"> {data.company}</HeroLink>
  </HeroCopy>)
  const four = () => <HeroSubCopy style={{ transitionDelay: '500ms'}}>{data.subCopy}</HeroSubCopy>
  const five = () => <div style={{ transitionDelay: '600ms' }}><HeroCTA href="mailto:dsack7@gmail.com" >Contact Me</HeroCTA></div>
  
  const items = [one, two, three, four, five]
  return (
    <HeroWrapper bgColor={bgColor}>
      <Element name="hero" />
      <Container>
        <HeroContainer>
          <TransitionGroup component={null}>
            {isMounted && <CSSTransition classNames="fadeup" timeout={500} >
              <HeroImg>
                <Img fluid={file.childImageSharp.fluid}/>
              </HeroImg>
            </CSSTransition>}
          </TransitionGroup>
          <HeroContent>
            <TransitionGroup>
              {isMounted &&
                items.map((item, i) => (
                  <CSSTransition key={i} classNames="fadeup" timeout={6000}>
                    {item}
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
          </HeroContent>
        </HeroContainer>
      </Container>
    </HeroWrapper>
  )
}

export default Hero