/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Joshua Kabo`,
    siteUrl: `https://joshuakabo.github.io`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "500", "600", "700"],
              // Other properties as per https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
            },
          ],
        },
      },
    },
  ],
};
