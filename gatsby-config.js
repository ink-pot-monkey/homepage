module.exports = {
  siteMetadata: {
    title: `Thomas Sean Dominic Portfolio Site`,
    description: `A portfolio homepage for Thomas Sean Dominic Kelly.`,
    author: `Thomas Sean Dominic Kelly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
