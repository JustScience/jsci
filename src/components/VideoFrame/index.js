import React from 'react'
import VideoFrameWrap from './style'

export default function VideoFrame({ title, url }) {
    return (
        <VideoFrameWrap>
            <iframe 
                title={title}
                width="560" 
                height="315"
                src={url}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
            />
        </VideoFrameWrap>
    )
}