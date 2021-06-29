import React from 'react'
import ProductTile from '../ProductTile'
import ProductsGridWrap from './style'

export default function ProductsGrid({products}) {
    
    return (
        <ProductsGridWrap>
            {products.map(product => {
                return(
                    <ProductTile 
                        key={product.shopifyId}
                        image={product.images[0]}
                        title={product.title}
                        description={product.description}
                        minPrice={product.priceRangeV2.minVariantPrice.amount}
                        handle={product.handle} 
                    />
                )
            })}
        </ProductsGridWrap>
    )
}
