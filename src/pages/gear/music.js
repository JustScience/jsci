import { graphql } from 'gatsby'
import React from 'react'

import SearchEngine from "../../components/0-theme/SEO/SearchEngine"
import Layout from '../../components/5-layout/Layout'
import Hero from '../../components/3-sections/Hero'
import PageTitle from '../../components/1-elements/PageTitle'
import SectionTitle from '../../components/1-elements/SectionTitle'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'

export default function MusicGear({data, location}) {
    const hardware = data.hardware.edges
    const software = data.software.edges
     
    return (
        <>
            <SearchEngine title="Best Music Studio Gear Wish Lists" />
            <Layout location={location} crumbLabel="Music Gear" >
                <Hero />
                <PageTitle 
                    title="Music Studio Gear"
                    subtitle="Here's a list of my favorite music recording gear and mixing plugins. Many links are affiliated, so using this page to shop for music gear helps to continue content production."
                />
                <SectionTitle title="Music Production Hardware" />
                <GearList>
                    {hardware.map(item => (
                        <GearCard 
                            key={item.node.id}
                            to={`${encodeURIComponent(item.node.data.Type.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(item.node.data.Name.replace(/\s+/g, '-').toLowerCase())}-${encodeURIComponent(item.node.data.Brand.replace(/\s+/g, '-').toLowerCase())}`}
                            title={item.node.data.Name}
                            brand={item.node.data.Brand}
                            category={item.node.data.Category}
                            description={item.node.data.Description}
                            image={item.node.data.Image[0].url}
                        />
                    ))}
                </GearList>
                <SectionTitle 
                    title="Music Production Software"
                />
                <GearList>
                    {software.map(item => (
                        <GearCard 
                            key={item.node.id}
                            to={`${encodeURIComponent(item.node.data.Type.replace(/\s+/g, '-').toLowerCase())}/${encodeURIComponent(item.node.data.Name.replace(/\s+/g, '-').toLowerCase())}-${encodeURIComponent(item.node.data.Brand.replace(/\s+/g, '-').toLowerCase())}`}
                            title={item.node.data.Name}
                            brand={item.node.data.Brand}
                            category={item.node.data.Category}
                            description={item.node.data.Description}
                            image={item.node.data.Image[0].url}
                        />
                    ))}
                </GearList>            
            </Layout>
        </>
    )
}


export const query = graphql`
    query MusicGearList {
        hardware: allAirtable(
            filter: {table: {eq: "Gear"}, data: {Task: {eq: "Music"}, Type: {eq: "Hardware"}}}
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
                        Description
                        URL
                        Image {
                            url
                        }
                    }
                    id
                }
            }
        },
        software: allAirtable(
            filter: {table: {eq: "Gear"}, data: {Task: {eq: "Music"}, Type: {eq: "Software"}}}
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
                        Description
                        URL
                        Image {
                            url
                        }
                    }
                    id
                }
            }
        },
    }
`
