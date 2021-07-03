import { graphql } from 'gatsby'
import React from 'react'

import SearchEngine from "../../components/SEO/SearchEngine"
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'

export default function StreamGear({data}) {
    const items = data.allAirtable.edges
     
    return (
        <>
            <SearchEngine title="Best Live Streamer Gear Wish Lists" />
            <Layout>
                <Hero />
                <PageTitle 
                    title="Live Streaming Gear"
                    subtitle="Here's a list of my favorite livestream gear and accessories. Many links are affiliated, so using this page to shop for streaming gear helps to continue content production."
                />
                <SectionTitle title="Livestream Hardware" />
                <GearList>
                    {items.map(item => (
                        <GearCard 
                            key={item.node.id}
                            to={`${encodeURIComponent(item.node.data.Type.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(item.node.data.Name.replace(/\s+/g, '-').toLowerCase())}-${encodeURIComponent(item.node.data.Brand.replace(/\s+/g, '-').toLowerCase())}`}
                            title={item.node.data.Name}
                            brand={item.node.data.Brand}
                            category={item.node.data.Category}
                            image={item.node.data.Image[0].url}>
                        </GearCard>
                    ))}
                </GearList>
            </Layout>
        </>
    )
}

export const query = graphql`
    query StreamGearList {
        allAirtable(
            filter: {table: {eq: "Gear"}, data: {Task: {eq: "Streaming"}}}
            sort: {order: ASC, fields: data___Category}
        ) {
            edges {
                node {
                    data {
                        Name
                        Brand
                        Category
                        Task
                        Type
                        URL
                        Image {
                            url
                        }
                    }
                    id
                }
            }
        }
    }
`