/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Rebel Tents',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `rebeltents.com`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `carousel`,
        path: `${__dirname}/src/images/carousel/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-BGWK1QY6X6", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.rebeltents.com",
        sitemap: "https://rebeltents.com/sitemap",
        policy: [
          {
            userAgent: "*",
            allow: ["/"],
            disallow: [],
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
        failOn: `warning`,
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-fontawesome-css',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-recaptcha`,
  ],
}
