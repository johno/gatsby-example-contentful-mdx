require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Hello!'
  },
  plugins: [
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      }
    }
  ]
}
