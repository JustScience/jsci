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
    <Helmet htmlAttributes={{ lang: 'en' }}>
      {/* General tags */}
      <meta charSet="utf-8" />
      <link rel="canonical" href="http://galenti.io" />
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
