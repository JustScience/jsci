import React from 'react'
import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { FeaturedProductTileWrap, FeaturedProductTileInfo, FeaturedProductTileTitle, FeaturedProductImage } from './style'

export default function FeaturedProductTile({title, image, handle}) {
    const productImage = getImage(image)
    const productLink = '/shop/' + handle

    return (
        <Link to={productLink}>
            <FeaturedProductTileWrap>
                <FeaturedProductImage image={productImage} alt={title} />
                <FeaturedProductTileInfo>
                    <FeaturedProductTileTitle>{title}</FeaturedProductTileTitle>
                </FeaturedProductTileInfo>
            </FeaturedProductTileWrap>
        </Link>
    )
}
