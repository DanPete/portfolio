import { graphql } from 'gatsby'

export const MarkdownFragment = graphql`
  fragment MarkdownProjects on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          excerpt
          skills
          link
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        fields {
          slug
        }
        html
      }
    }
  }
`