import React from 'react'
import styled from 'styled-components'

import { theme } from '../../styles'

const SkillsContainer = styled.div`
  li {
    list-style: none;
    display: inline-block;
    margin-right: 1em;
    font-size: 0.8rem;
  }
`


const Skills = ({ items }) => {

  return (
    <SkillsContainer>
      {items.map(item => <li key={item}>{item}</li>)}
    </SkillsContainer>
  )
}

export default Skills