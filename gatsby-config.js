module.exports = {
  siteMetadata: {
    title: "Interview Book",
    description: "Interview Book - Carefully curated content to help you ace your next technical interview.",
    author: "ivan.khanevich@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{ family: `Noto Sans` }],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          // This entry template will switch the page template based on
          // a frontmatter value provided in the CMS, allowing users to
          // choose different template layouts.
          default: require.resolve(
            "./src/page-templates/cms-entry.template.js"
          ),
        },
        rehypePlugins: [require("rehype-slug")],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Interview Book",
        short_name: "InBook",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    "gatsby-plugin-offline",
    `gatsby-plugin-sass`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // for custom preview in the Netlify CMS
      },
    },
  ],
}
