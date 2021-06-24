import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { Helmet } from 'react-helmet'
import defaultMetaImage from '../../images/hero-bg-med.jpg'

export default function SearchEngine({title, description, metaImage, url}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
            keywords
            siteUrl
          }
        }
      }
    `
  )

  return (
    <Helmet>
      {/* General tags */}
      <title>{title || site.siteMetadata.title}</title>
      <meta name="description" content={description || site.siteMetadata.description} />
      <meta name="image" content={metaImage || defaultMetaImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url || site.siteMetadata.siteUrl} />
      <meta property="og:title" content={title || site.siteMetadata.title} />
      <meta property="og:description" content={description || site.siteMetadata.description} />
      <meta property="og:image" content={metaImage || defaultMetaImage} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={title || site.siteMetadata.title} />
      <meta name="twitter:description" content={description || site.siteMetadata.description} />
      <meta name="twitter:image" content={metaImage || defaultMetaImage} />
    </Helmet>
  )
}
