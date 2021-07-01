import React from 'react'
import { graphql } from 'gatsby'

import SearchEngine from "../../components/SEO/SearchEngine"
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import Hero from '../../components/Hero'
import VideosGrid from '../../components/VideosGrid'

export default function YouTubePage({data}) {
    const videos = data.allYoutubeVideo.edges

    return (
        <>
            <SearchEngine title="YouTube Videos by JustScience" />
            <Layout>
                <Hero />
                <Section>
                    <h1>YouTube Videos</h1>
                    <VideosGrid videos={videos} />
                </Section>
            </Layout>
        </>
    )
}

export const query = graphql`
query MyQuery {
    allYoutubeVideo(
        filter: {channelId: {eq: "UCecJMZiU33IQMawV4kqujxA"}}
        sort: {fields: publishedAt, order: DESC}
    ) {
        edges {
            node {
                title
                videoId
                localThumbnail {
                    childImageSharp {
                        gatsbyImageData(width:180)
                    }
                }
            }
        }
    }
}`;
