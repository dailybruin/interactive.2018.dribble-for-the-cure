module.exports = {
  pathPrefix: `/2018/dribble-for-the-cure`,
  siteMetadata: {
    title: 'Dribble for the Cure',
    description: 'bouncing one step closer to a cure for pediatric cancer',
    url: 'https://features.dailybruin.com/2018/dribble-for-the-cure/',
    twitter: '@dailybruin',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
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
