require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Melody Loops, VST Presets & DAW Templates | Music Production Tools & Training",
    titleTemplate: ' | JustScience',
    description: "Melody Loops, VST Presets & DAW Templates. Music Production Tools & Training.",
    keywords: "Melody Loop Samples Tutorials",
    copyright: "Copyright 2021, Galenti Consulting, LLC. All rights reserved.",
    author: "J Galenti",
    contact: "jscibeats@gmail.com",
    siteUrl: "https://jsci.io", // No trailing slash allowed!
    twitter: "@jscibeats",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: process.env.FACEBOOK_PIXEL_ID,
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: process.env.GA_TRACKING_ID,
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {}
        }
      }
    },   
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default-page-layout.js"),
        },
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `./src/pages/products/`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "freebies",
        path: "./src/freebies/",
      },
      __key: "freebies",
    },
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
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_DB,
            tableName: `Kit`,
          },
          {
            baseId: process.env.AIRTABLE_DB,
            tableName: `Freebies`,
          }
        ]
      }
    },    
  ],
};
