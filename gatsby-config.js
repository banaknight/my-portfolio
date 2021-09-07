module.exports = {
  siteMetadata: {
    title: `Junya M Portfolio`,
    description: `もちづき じゅんやのポートフォリオサイト`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/src/contents/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+JP:400;700`,
          `Oswald:700`,
          `Quattrocento:700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
