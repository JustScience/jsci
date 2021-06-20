import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SearchEngine({ description, lang, meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
        htmlAttributes={{
            lang,
        }}
        meta={[
        {
            name: `title`,
            content: metaTitle,
        },
        {
            name: `description`,
            content: metaDescription,
        },
        {
            name: "keywords",
            content: site.siteMetadata.keywords.join(","),
        },
      ]}
    />
  )
}

SearchEngine.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SearchEngine