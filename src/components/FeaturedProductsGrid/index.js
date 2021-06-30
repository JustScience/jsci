import React from 'react'
import FeaturedProductTile from '../FeaturedProductTile'
import FeaturedProductsGridWrap from './style'

export default function FeaturedProductsGrid({products}) {
    return (
        <FeaturedProductsGridWrap>
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
        </FeaturedProductsGridWrap>
    )
}
