import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import PageWidth from '../components/layouts/pagewidth'

const Project = ({data, pageContext}) => {
  const { title, skills, featuredImage} = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <Img fluid={featuredImage.childImageSharp.fluid} />
      <Link to="/project">All Projects</Link>
      {console.log(pageContext)}
      {previous && <Link to={`/project/${previous.fields.slug}`}>Previous</Link>}
      {next && <Link to={`/project/${next.fields.slug}`}>Next</Link>}
      <PageWidth>
        <h1>{title}</h1>
        <h3>{skills}</h3>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </PageWidth>
    </Layout>
  )
}

export default Project

export const query = graphql`
  query ($slug: String!) {
    markdownRemark ( fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        skills
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`