import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { VideosGridWrap, VideoCard, CardImage } from './style'

export default function VideosGrid({videos}) {
    return (
        <VideosGridWrap>
            {videos.map(video => (
                <Link to={`/video/${video.node.videoId}`}>
                    <VideoCard>
                        <CardImage>
                            <GatsbyImage image={getImage(video.node.localThumbnail)} />
                        </CardImage>
                        <p>{video.node.title}</p>
                    </VideoCard>
                </Link>
            ))}
        </VideosGridWrap>
    )
}
