import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Items = styled.div`
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`

const Section = ({children, title}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Items>
        {children}
      </Items>
    </Container>
  )
}

export default Section