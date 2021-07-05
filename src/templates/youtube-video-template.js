/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { graphql } from 'gatsby'

import SearchEngine from '../components/SEO/SearchEngine'
import Layout from '../components/5-layout/Layout'
import VideoPage from '../components/4-pages/VideoPage'

export const query = graphql`
    query youtubeVideo($id: String) {
        video: youtubeVideo(id: {eq: $id}) {
            title
            videoId
            description
            thumbnail {
                url
            }
        }
    }
`;

export default function YouTubeVideo({data, location}) {
    const { title, description, videoId, thumbnail } = data.video
    const shareImage = thumbnail.url

    return (
        <>
            <SearchEngine 
                title={title}
                description={description}
                image={shareImage}
            />
            <Layout location={location} crumbLabel={title} >
                <VideoPage
                    title={title}
                    description={description}
                    videoId={videoId}
                />
            </Layout>
        </>
    )
}
