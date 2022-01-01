module.exports = {
  siteMetadata: {
    title: `Shiladitya Bose`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Personal Blog`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/s-bose`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/shiladitya-bose/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        authorsPage: true,
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        // display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },
  ],
};
