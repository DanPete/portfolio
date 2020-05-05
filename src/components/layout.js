import React from "react"
import PropTypes from "prop-types"

// import Header from "./header"
// import Banner from './banner'

import Navigation from './navigation'
import Footer from './footer'

import { GlobalStyles } from '../styles'

const Layout = ({ children }) => {

  return (
    <main>
      {/* <Banner siteTitle={data.site.siteMetadata.title}/> */}
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
