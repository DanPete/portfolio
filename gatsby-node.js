/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
 

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = path.resolve('./src/templates/project.js')

  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark( sort: { fields: frontmatter___date, order: DESC }){
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //         next {
  //           fields {
  //             slug
  //           }
  //         }
  //         previous {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // res.data.allMarkdownRemark.edges.forEach((edge) => {
  //   const { slug } = edge.node.fields
  //   const { next, previous } = edge
  //   createPage({
  //     component: template,
  //     path: `/project/${slug}`,
  //     context: {
  //       slug: slug,
  //       next,
  //       previous,
  //     }
  //   })
  // })
}

module.exports.onCreatePage = async({ page, actions: { deletePage }}) => {
  const { NODE_ENV } = process.env
  temporaryHiddenPages = ['/project/', '/contact/', '/about/']
  if (temporaryHiddenPages.includes(page.path)) {
    deletePage(page)
  }
}

module.exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // if (stage === 'build-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /scrollreveal/,
  //           use: loaders.null(),
  //         },
  //       ],
  //     },
  //   });
  // }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    }
  })
};