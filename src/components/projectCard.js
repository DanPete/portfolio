import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Card = styled.div`
  border: 1px solid black;
  margin: 20px 0;
  box-shadow: 3px 5px 3px rgba(0,0,0,0.4);
  transition: transform 0.2s;
  &:hover {
    transform: translate(0, -10px);
  }
  
`

const CardInfo = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 20px;
  h3, p {
    margin: 0;
    color: #000;
  }
`

const ProjectCard = ({title, excerpt, skills, slug, image}) => {
  return (
    <Link to={`/project/${slug}`} style={{textDecoration: 'none'}}>
      <Card>
        <Img fluid={image.childImageSharp.fluid}/>
        <CardInfo>
          <h3>{title}</h3>
          <p>{skills}</p>
          <p>{excerpt}</p>
        </CardInfo>
      </Card>
    </Link>
  )
}

export default ProjectCard

