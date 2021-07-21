import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Gallery from '../Gallery'
import LinkCard from '../../2-blocks/LinkCard'
import CardImage from './style'

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
