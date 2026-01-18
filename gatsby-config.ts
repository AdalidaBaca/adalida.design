import path from 'node:path'
import GatsbyAdapterNetlify from 'gatsby-adapter-netlify'

module.exports = {
  adapter: GatsbyAdapterNetlify({ excludeDatastoreFromEngineFunction: false }),
  siteMetadata: {
    title: 'Adalida',
    description: 'Rubber Duck cosplaying as a Product Designer',
    authors: ['@adalidabaca', '@rickpr']
  },
  plugins: [
    'gatsby-plugin-preload-fonts',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: path.join(__dirname, 'src', 'files')
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Adalida Page',
        short_name: 'timeline',
        start_url: '/',
        background_color: '#090B0B',
        theme_color: '#090B0B',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N4VW9HFG',
        enableWebVitalsTracking: true
      }
    }
  ]
}
