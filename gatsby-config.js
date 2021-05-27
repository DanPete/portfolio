require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dan Sack | Web Dev`,
    description: `Web developer portfolio - JavaScript, HTML, SCSS with Shopify and React`,
    author: `Dan Sack`,
    image: `https://dansack.dev/DS.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Sack Web Dev Portfolio`,
        short_name: `Dan Sack Portfolio`,
        start_url: `/`,
        background_color: `#1E2749`,
        theme_color: `#1E2749`,
        display: `minimal-ui`,
        icon: `src/images/DScrop.png`, // This path is relative to the root of the site.
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json/`,
      },
    },
    "gatsby-plugin-sass",
    // "gatsby-plugin-theme-ui",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/src/images/svgs`
        }
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1,
      }
    },
  ],
}
