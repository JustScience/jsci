import React from 'react'
import FeaturedProductTile from '../../FeaturedProductTile'
import Gallery from '../Gallery'

export default function FeaturedProductsGrid({products}) {
    return (
        <Gallery>
            {products.map(product => {
                return(
                    <FeaturedProductTile 
                        key={product.shopifyId}
                        image={product.images[0]}
                        title={product.title}
                        handle={product.handle} 
                    />
                )
            })}
        </Gallery>
    )
}
