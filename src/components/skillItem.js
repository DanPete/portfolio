import React, { useState } from 'react'
import styled from 'styled-components'

import { theme, media } from '../styles'

import { FormattedIcon } from './icons'


const SkillContainer = styled.div`
  ${media.mediumUp} {
    position: relative;
    top: -3.5em;
  }
`

const Tabs = styled.div``

const TabList = styled.div`
  display: flex;
  justify-content: space-around;
`

const Tab = styled.h4`
  cursor: pointer;
  color: ${theme.colors.gray};
  width: 100%;
  border-bottom: 1px solid;
  line-height: 1.7;
  text-align: center;
  transition: ${theme.transition};
  &.active {
    color: ${theme.colors.yellow}
  }
`

const ContentContainer = styled.div``

const Content = styled.div`
  background-color: ${theme.colors.darkBlueLighter};
  border: 1px solid ${theme.colors.gray};
  padding: 1em 2em;
  border-radius: ${theme.borderRadius};
  margin: 1em 0;
  opacity: 0;
  display: none;
  transition: ${theme.transition};
  &.active {
    display: flex;
    opacity: 1;
  }
  ${media.small} {
    padding: 1em;
  }
`

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content: space-around;
  width: 100%;
  ${media.small} {
    grid-column-gap: 10px;
  }
`
const SkillWrapper = styled.div`
  display: flex;
  align-content: center;
  svg {
    margin-right: 1em;
    width: 30px;
  }
  ${media.xsmall} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    svg {
      margin-right: 0;
    }
  }
`

const Skill = styled.div`
  color: ${theme.colors.light};
  font-size: 1.25rem;
  align-self: center;
  ${media.small} {
    font-size: 1.125rem;
  }
  ${media.xsmall} {
    margin-top: 0.5em;
  }
`

const SkillItem = ({skills}) => {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <SkillContainer>
      <Tabs>
        <TabList>
          {skills.map((skillNode, i) => {
            const { title } = skillNode.node
            return (
              
              <Tab key={i} className={activeTab === i ? 'active' : ''} onClick={() => setActiveTab(i)}>{title}</Tab>
            )
          })}
        </TabList>
      </Tabs>
      <ContentContainer>
        {skills.map((skillNode, i) =>{
          const { skills } = skillNode.node
          return (
            <Content key={i} className={activeTab === i ? 'active' : ''} > 
              <SkillList>
                {skills.map((skill, i) =>{
                  return (
                    <SkillWrapper> 
                      <FormattedIcon icon={skill.icon} />
                      <Skill key={i}>{skill.name}</Skill>
                    </SkillWrapper>
                  ) 
                })}
              </SkillList>
            </Content>
          )
        })}
      </ContentContainer>
    </SkillContainer>
  )
}

export default SkillItem