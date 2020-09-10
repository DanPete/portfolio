import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


import Hero from '../components/hero'
import Projects from '../components/projects'
import Experience from '../components/experience'
import Contact from '../components/contact'

import SEO from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero data={data.hero}/>
    <Projects data={data.mdProjects.edges} />
    <Experience experiences={data.experience.edges} skills={data.skills.edges}/>
    <Contact />
    

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {

    hero: heroJson {
      intro
      name
      company
      companyURL
      subtitle
      copy
      subCopy
    }

    projects: allProjectsJson {
      edges {
        node {
          title
          description
          techList
          img
          siteLink
        }
      }
    }

    mdProjects: allMarkdownRemark (
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      limit: 6
    ) {
      ...MarkdownProjects
    }

    experience: allExperienceJson {
      edges {
        node {
          company
          dates
          position
          copy
          skills
          open
        }
      }
    }

    skills: allSkillsJson {
      edges {
        node {
          title
          skills {
            name
            icon
          }
          open
        }
      }
    }

  }
  `
    // insta: allInstaNode(
    //   sort: {fields: timestamp, order: DESC},
    //   limit: 9
    // ) {
    //   edges {
    //     node {
    //       username
    //       localFile {
    //         childImageSharp {
    //           fixed( width: 125, height: 125) {
    //             ...GatsbyImageSharpFixed
    //           }
    //         }
    //       }
    //     }
    //   }
    // }




//   < PageWidth >
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <Section title="About">

//   </Section>
//       {/* <Section name="test1" title="Projects">
//         <Element  name="projects"/>
//         {data.mdProjects.edges.map(project => {
//           const {title, excerpt, skills, featuredImage } = project.node.frontmatter
//           const { slug } = project.node.fields
//           return <ProjectCard key={project.node.id} title={title} excerpt={excerpt} skills={skills} slug={slug} image={featuredImage}/>
//         })}
//         <Link to="/project">All Projects</Link>
//       </Section> */}
// {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//       <Link to="/page-2/">Go to page 2</Link> */}
//     </ >