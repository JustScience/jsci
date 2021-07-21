import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Gallery from '../../components/3-sections/Gallery'
import LinkCard from '../../components/2-blocks/LinkCard'
import { CardImage } from './style'

export default function VideosGrid({videos}) {
    return (
        <Gallery>
            {videos.map(video => (
                <LinkCard to={`/video/${video.node.videoId}`} ghost='true'>
                    <CardImage>
                        <GatsbyImage image={getImage(video.node.localThumbnail)} />
                    </CardImage>
                    <span>{video.node.title}</span>
                </LinkCard>
            ))}
        </Gallery>
    )
}
