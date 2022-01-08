module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "online-portfolio",
    intro: 'I’m 27 years old engineer , who is working from home right now and working with a company called Innovaccer Analytics Pvt. Ltd.  I’ve also worked with various startup like Dailyhunt and Blackbuck. I love web development and I’ve provided my help as a consultant to various startups. I’ve good hands on JavaScript, ReactJS, NodeJS, ExpressJS, GraphQL , Apollo Client, Redux, etc.'
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
