import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Sal from './sal'

import { Container, Section, theme, media } from '../styles'

import JobItem from './jobItem.js'
import SkillItem from './skillItem'

const Title = styled.h2`
  color: ${theme.colors.light};
  margin-bottom: 1.5em;
`

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 50px;
  ${media.small} {
    grid-template-columns: 1fr;
  }
`

const JobsContainer = styled.div`

`

const SkillsContainer = styled.div`
  position: relative;
  top: -4em;

`

const Experience = ({experiences, skills}) => {
  
  return (
    <Section bgColor={theme.colors.darkBlue}>
      <Element name="experience"/>
      <Container>
        <Sal>
          <Title>Experience</Title>
        </Sal>
        <ExperienceContainer>
        <Sal>
          <JobsContainer>
            {experiences.map((experienceNode, i) => {
              const experience = experienceNode.node
              return <JobItem key={i} {...experience}/>
            })}
          </JobsContainer>
        </Sal>
        <Sal>
          <SkillItem skills={skills} />
        </Sal>
        </ExperienceContainer>
      </Container>
    </Section>
  )
}

export default Experience