import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ImageThumbnailWrap from './style'

export default function ImageThumbnail({isActive, onClick, image}) {
    const thumbnail = getImage(image)
    const handleClick = () => {
        onClick(image);
    }

    return (
        <ImageThumbnailWrap 
            onClick={handleClick}
            isActive={isActive}
        >
            <GatsbyImage image={thumbnail} alt="product thumbnail" />
        </ImageThumbnailWrap>
    )
}
