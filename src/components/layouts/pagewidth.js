import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem 1.5rem;
`

const PageWidth = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageWidth