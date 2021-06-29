import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Button from './Button'

const CollectionTileWrap = styled.div`
`

export default function CollectionTile({title, description, image, destination}) {
    const collectionImage = getImage(image)

    return (
        <CollectionTileWrap>
            <GatsbyImage image={collectionImage} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
            <Button to={destination}>Shop Now</Button>
        </CollectionTileWrap>
    )
}
