import React from 'react'
import styled from 'styled-components'
import Sal from '../sal'

import { theme, media } from '../../styles'
// import Image from './image'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Skills from './skills'
import ProjectButton from './button'

const ProjectContainer = styled.div`
  transition: ${theme.transition};
  position: relative;
  height: 100%;

  ${media.largeUp} {
    /* &:hover {
      transform: translateY(-20px)
    } */
  }
`

const ProjectInner = styled.div`
  background-color: ${theme.colors.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1em;
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};
`

const Content = styled.div`

`

const ImageContainer = styled.div`
  /* width: 50px; */
  /* height: 50px; */
`
const Title = styled.h3`
  max-width: 100%;
  color: ${theme.colors.dark};
  text-align: left;
  margin: 0.5em 0;
`

const Description = styled.div`
  margin-bottom: 1em;
  color: ${theme.colors.dark};
  p {
    margin: 1em;
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`



const ProjectCard = ({title, excerpt, skills, link, html, featuredImage: img}) => {
  return (
    <Sal>
      <ProjectContainer>
        <ProjectInner>
          <Content>
            <ImageContainer>
              <Img fluid={img.childImageSharp.fluid} />
            </ImageContainer>
            <Title>{title}</Title>
            <Description dangerouslySetInnerHTML={{ __html: html }}></Description>
          </Content>
          <Footer>
            <Skills items={skills}/>
            <ProjectButton text="Visit Site" to={link} />
          </Footer>
        </ProjectInner>
      </ProjectContainer>
    </Sal>
  )
}

  export default ProjectCard

  // return (
  //   <Link to={`/project/${slug}`} style={{textDecoration: 'none'}}>
  //     <Card>
  //       <Img fluid={image.childImageSharp.fluid}/>
  //       <CardInfo>
  //         <h3>{title}</h3>
  //         <p>{skills}</p>
  //         <p>{excerpt}</p>
  //       </CardInfo>
  //     </Card>
  //   </Link>
  // )


// const Card = styled.div`
//   border: 1px solid black;
//   margin: 20px 0;
//   box-shadow: 3px 5px 3px rgba(0,0,0,0.4);
//   transition: transform 0.2s;
//   &:hover {
//     transform: translate(0, -10px);
//   }

// `

// const CardInfo = styled.div`
//   display: flex;
//   flex-flow: column;
//   align-items: center;
//   margin: 20px;
//   h3, p {
//     margin: 0;
//     color: #000;
//   }
// `
