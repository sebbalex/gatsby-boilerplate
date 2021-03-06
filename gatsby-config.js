module.exports = {
  // Please use intl translation for texts
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Please use intl translation for texts',
    twitterAccount: '@Gatsby',
  },
  plugins: [
    'gatsby-plugin-jss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `it`],
        // language file path
        defaultLanguage: `it`,
        // option to redirect to `/it` when connecting `/`
        redirect: true,
      },
    },
  ],
};
