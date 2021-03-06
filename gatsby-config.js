module.exports = {
  siteMetadata: {
    description: 'Personal page of Jun Young Kang',
    locale: 'kr',
    showThemeLogo: true,
    title: 'JunYoung Kang',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('tailwindcss')(require('./tailwind.config')('classic')),
          require('postcss-input-range'),
          require('autoprefixer'),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: 'content/',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  pathPrefix: '/portfolio',
};
