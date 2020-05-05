import React, {useState} from 'react' 
import styled from 'styled-components'

import { theme, media } from '../styles'

import arrow from '../images/icons/arrow.svg'
import rewind from '../images/icons/rewind.svg'

const ExperienceContainer = styled.div`
  background-color: ${theme.colors.darkBlueLighter};
  border: 1px solid ${theme.colors.gray};
  padding: 1em 2em;
  border-radius: ${theme.borderRadius};
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  &.open {
    .description {
      display: block;
    }
    .first-row {
      &::after {
        transform: rotate(90deg);
      }
    }
  }

`

const FirstRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after{
    content: '';
    position: absolute;
    color: ${theme.colors.light};
    right: -20px;
    height: 20px;
    width: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('${arrow}');
    background-size: 20px;
    background-repeat: no-repeat;
    transition: ${theme.transition};
  }
  ${media.small} {
    flex-direction: column;
  }
`

const SecondRow = styled.div`
  padding-top: 1em;
  display: none;
`

const Position = styled.h4`
  max-width: 100%;
  text-align: left;
  margin-bottom: 0;
  margin-right: 1em;
  color: ${theme.colors.lightGray};
`

const Company = styled.h5`
  color: ${theme.colors.yellow};
`

const Dates = styled.p`
  margin-bottom: 1em;
  color: ${theme.colors.lightGray};
`

const Copy = styled.p`
  color: ${theme.colors.light};
`

const Tech = styled.ul`
  columns: 2;
  max-width: 500px;
  list-style: none;

  li {
    color: ${theme.colors.light};
    margin-bottom: 0.2em;
    position: relative;
    padding-left: 1em;
    &::before {
      content: '';
      color: ${theme.colors.light};
      position: absolute;
      left: 0;
      height: 12px;
      width: 12px;
      top: 0;
      bottom: 0;
      margin: auto;
      background-image: url('${rewind}');
      background-size: 12px;
      background-repeat: no-repeat;
    }
  }

  ${media.small} {
    padding-left: 0;
  }

`

const JobItem = ({company, dates, position, copy, skills, open}) => {

  const [isOpen, updateIsOpen] = useState(open);

  return (
    <ExperienceContainer className={isOpen ? 'open' : ''}>
      <FirstRow className='first-row' onClick={() => updateIsOpen(!isOpen)}>
        <Position>{position}</Position>
        <Company>{company}</Company>
      </FirstRow>
      <SecondRow className='description'>
        <Dates>{dates}</Dates>
        <Copy>{copy}</Copy>
        <Tech>
          {skills.map(skill => <li key={skill}>{skill}</li>)}
        </Tech>
      </SecondRow>
    </ExperienceContainer>
  )
}

export default JobItem