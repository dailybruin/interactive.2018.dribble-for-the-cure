module.exports = {
  pathPrefix: `/2018/dribble-for-the-cure`,
  siteMetadata: {
    title: 'Dribble for the Cure',
    description: 'bouncing one step closer to a cure for pediatric cancer',
    twitter: '@dailybruin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
}
