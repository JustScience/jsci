import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { HeroWrap } from './style'

export default function Hero() {
    const data = useStaticQuery(graphql`
        query HeaderQuery {
            file(relativePath: {eq: "hero-bg.jpg"}) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `)
    const bgImage = getImage(data.file.childImageSharp)

    return (
        <HeroWrap>
            <GatsbyImage image={bgImage} alt="Featured Image" />
        </HeroWrap>
    )
}
