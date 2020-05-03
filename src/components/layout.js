import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navigation from './navigation'
import Banner from './banner'
import Footer from './footer'
// import "./layout.css"


import { GlobalStyles } from '../styles'

const Container = styled.div`
  margin: 0 auto;
  /* max-width: 1200px;
  padding: 0 1rem 1.5rem; */
`

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>
        {/* <Banner siteTitle={data.site.siteMetadata.title}/> */}
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <GlobalStyles />
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
