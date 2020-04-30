import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageWidth from '../components/layouts/pagewidth'
import ProjectCard from '../components/projectCard'
import SEO from "../components/seo"

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi people</h1>
    <PageWidth>
      {data.projects.edges.map(project => {
        const { title, excerpt, skills, featuredImage } = project.node.frontmatter
        const { slug } = project.node.fields
        return <ProjectCard key={project.node.id} title={title} excerpt={excerpt} skills={skills} slug={slug} image={featuredImage}/>
      })}
    </PageWidth>
  </Layout>
)

export default ProjectsPage

export const query = graphql`
  query {
    projects: allMarkdownRemark (
      sort: {
        fields: frontmatter___date,
        order: DESC
      }
    ) {
      ...MarkdownProjects
    }
  }
`