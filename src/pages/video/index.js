import React from 'react'
import { graphql } from 'gatsby'

import SearchEngine from "../../components/0-theme/SEO/SearchEngine"
import Layout from '../../components/5-layout/Layout'
import Section from '../../components/1-elements/Section'
import PageTitle from '../../components/1-elements/PageTitle'
import Hero from '../../components/3-sections/Hero'
import VideosGrid from '../../components/3-sections/VideosGrid'

export default function YouTubePage({data, location}) {
    const videos = data.allYoutubeVideo.edges

    return (
        <>
            <SearchEngine 
                url="video"
                title="YouTube Videos by JustScience" 
                description="Learn Music Production and Marketing with tutorials and demo videos by JustScience"
            />
                <Layout location={location} crumbLabel="YouTube Videos" >
                <Hero />
                <Section>
                    <PageTitle 
                        title="Latest YouTube Videos"
                        subtitle="Watching my latest videos is just better here!"
                        image=""
                    />
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
                        gatsbyImageData(width:240)
                    }
                }
            }
        }
    }
}`;
