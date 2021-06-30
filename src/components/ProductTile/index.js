import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { ProductTileWrap, ProductTileInfo, ProductTileTitle, ProductTileDescription, ProductTilePrice } from './style'
import { Link } from 'gatsby'

export default function ProductTile({title, description, image, minPrice, handle}) {
    const productImage = getImage(image)
    const productLink = '/shop/' + handle

    return (
        <Link to={productLink}>
            <ProductTileWrap>
                <GatsbyImage image={productImage} alt={title} />
                <ProductTileInfo>
                    <div>
                        <ProductTileTitle>{title}</ProductTileTitle>
                        <ProductTileDescription>{description}</ProductTileDescription>
                        <ProductTilePrice>from &nbsp;<span>${parseFloat(minPrice).toFixed(2)}</span></ProductTilePrice>
                    </div>
                </ProductTileInfo>
            </ProductTileWrap>
        </Link>
    )
}
