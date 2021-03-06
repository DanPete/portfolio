import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Sal from '../sal'

import ProjectCard from './projectCard'

import { Container, Section, theme, media } from '../../styles'

const Title = styled.h2`
  color: ${theme.colors.dark};
  margin-bottom: 1.5em;
`

const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 30px;

  ${media.mediumUp} {
    grid-template-columns: repeat(2, 1fr);
  }

  /* ${media.largeUp} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
  } */
`

const Projects = ({ data }) => {
  return (
    <Section bgColor={theme.colors.light} id="projects">
      <Element name="projects"/>
      <Container>
        <Sal>
          <Title>Projects</Title>
        </Sal>
        <ProjectGrid>
          {data.map(({ node }, i) => {
            const project = node.frontmatter
            return <ProjectCard key={i} {...project} html={node.html}/>
          })}
        </ProjectGrid>
      </Container>
    </Section>
  )
}

export default Projects