import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"


import PageWidth from '../components/layouts/pagewidth'
import Section from '../components/layouts/section'
import ProjectCard from '../components/projectCard'
import Hero from '../components/hero'
import SEO from "../components/seo"

import { Element } from 'react-scroll'
import ScrollReveal from 'scrollreveal'

const IndexPage = ({ data }) => (
  <Layout>
    {/* {console.log(data)} */}
    <SEO title="Home" />
    <Hero data={data.hero}/>
    <PageWidth>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Section title="About">

      </Section>
      <Section name="test1" title="Projects">
        <Element  name="projects"/>
        {data.projects.edges.map(project => {
          const {title, excerpt, skills, featuredImage } = project.node.frontmatter
          const { slug } = project.node.fields
          return <ProjectCard key={project.node.id} title={title} excerpt={excerpt} skills={skills} slug={slug} image={featuredImage}/>
        })}
        <Link to="/project">All Projects</Link>
      </Section>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
    </PageWidth>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {

    hero: heroJson {
      intro,
      name,
      company,
      companyURL,
      subtitle,
      copy,
      subCopy
    }

    projects: allMarkdownRemark (
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      limit: 4
    ) {
      ...MarkdownProjects
    }
  }
`