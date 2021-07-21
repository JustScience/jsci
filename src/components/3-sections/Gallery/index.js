import React from 'react'
import GalleryWrap from './style'

export default function Gallery({children, small}) {
    return (
        <GalleryWrap small={small}>
            { children }
        </GalleryWrap>
    )
}
