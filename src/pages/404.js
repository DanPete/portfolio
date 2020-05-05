import React from "react"
import { Link } from 'gatsby';
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Container, mixins } from '../styles'

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 93vh;

  h4 {
    margin: 2em;
    color: white;
  }
`

const StyledLink = styled(Link)`
  ${mixins.bigButton}
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <StyledContainer>
      <h1>Page Not Found</h1>
      <h4>This page doesn't exist</h4>
      <StyledLink to="/">Go Home</StyledLink>

    </StyledContainer>
  </Layout>
)

export default NotFoundPage
