import React from 'react'
import { VideoPageWrap, VideoInfo } from './style'
import VideoFrame from '../VideoFrame'

export default function VideoPage({ title, description, videoId }) {
    return (
        <VideoPageWrap>
            <VideoFrame
                title={title}
                url={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            />
            <VideoInfo>
                <h1>{title}</h1>
                <p>{description}</p>
            </VideoInfo>
        </VideoPageWrap>
    )
}
