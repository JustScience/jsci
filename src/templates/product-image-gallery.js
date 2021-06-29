import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ImageThumbnail from '../components/ImageThumbnail'

const ProductImageGalleryWrap = styled.section`
    margin-bottom: 24px;
    height: 100%;
    width: 100%;
`
const ThumbnailGalleryWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`
const ProductImage = styled.div`
    width: 100%;
`
const MainImage = styled(GatsbyImage)`
    max-height: 100%;
    max-width: 100%;
`

export default function ProductImageGallery({selectedVariantImageId, images}) {
    const [activeImageThumbnail, setActiveImageThumbnail] = React.useState(
        images.find(({id}) => id === selectedVariantImageId) || images[0]
    )

    React.useEffect(() => {
        setActiveImageThumbnail(
            images.find(({id}) => id === selectedVariantImageId) || images[0]
        )
    }, [selectedVariantImageId, setActiveImageThumbnail, images])

    const mainImage = getImage(activeImageThumbnail)

    const handleClick = image => {
        setActiveImageThumbnail(image)
    }

    return (
        <ProductImageGalleryWrap>
            <ProductImage><MainImage image={mainImage} alt="Product Feature" /></ProductImage>
            {images?.length > 1 && 
                <ThumbnailGalleryWrap>
                    {images.map(image => {
                        return (
                            <ImageThumbnail 
                                key={image.id} 
                                image={image}
                                alt="Product Thumbnail"
                                isActive={activeImageThumbnail.id === image.id}
                                onClick={handleClick}
                            />
                        )
                    })}
                </ThumbnailGalleryWrap>
            }
        </ProductImageGalleryWrap>
    )
}
