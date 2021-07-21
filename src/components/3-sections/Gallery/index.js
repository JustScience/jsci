import React from 'react'
import GalleryWrap from './style'

export default function Gallery({children, small, product}) {
    return (
        <GalleryWrap 
            small={small}
            product={product}
        >
            { children }
        </GalleryWrap>
    )
}
