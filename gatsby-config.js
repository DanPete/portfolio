require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dan Sack | Web Dev`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Dan Sack`,
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
        name: `Dan Sack Portfolio`,
        short_name: `Dan Sack`,
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`300`, `500`, `600`]
          },
          {
            family: `Roboto`,
            variants: [`400`, `700`]
          },
        ],
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
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'projectsJson',
        imagePath: 'nodes[].img'
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `dan_pete_`,
      },
    },
  ],
}
