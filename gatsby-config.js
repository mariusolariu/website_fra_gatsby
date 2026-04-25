module.exports = {
  siteMetadata: {
    title: `Cabinet Cardiologie Dr. Olariu Ioan`,
    author: `Marius Olariu`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ro'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cabinet Cardiologie dr. Olariu Ioan`,
        short_name: `Dr. Olariu`,
        start_url: `/`,
        background_color: `#2c5e7a`,
        theme_color: `#2c5e7a`,
        display: `standalone`,
        icon: `src/images/icon.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
