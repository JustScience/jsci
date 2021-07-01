import { useStaticQuery, graphql } from "gatsby"
import React from 'react'
import { Helmet } from 'react-helmet'
import defaultMetaImage from '../../images/hero-bg-med.jpg'

export default function SearchEngine({ title, description, image, url }) {
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

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultMetaImage

  return (
    <Helmet 
      htmlAttributes={{ 
        lang: 'en' 
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}  
    >
      {/* General tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={url || site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.twitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://jsci.io",
            "name": "JSci Beats",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "jscibeats@gmail.com",
              "contactType": "Business Inquiries"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Melody Loop Samples",
              "itemListElement": [
                {
                  "@type": "OfferCatalog",
                  "name": "Music Composition Licenses",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "24 bit, 44.1k Stereo WAV Audio"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Full Quality Instrument Mix Stems"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Original MIDI Compositions"
                      }
                    }
                  ]
                },
                {
                  "@type": "OfferCatalog",
                  "name": "Music Sync Licenses",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Web Content Creator Music"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Film, TV & Video Game Music"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Advertising Music for Commercials"
                      }
                    }
                  ]
                }
              ]
            }
          }
        `}
      </script>
    </Helmet> 
  )
}
