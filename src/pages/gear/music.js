import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import PageTitle from '../../components/PageTitle'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'

export default function MusicKit({data}) {
    const hardware = data.hardware.edges
    const software = data.software.edges
     
    return (
        <Layout>
            <Hero />
            <PageTitle title="Music Studio Hardware"/>
            <GearList>
                {hardware.map(item => (
                    <GearCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}>
                    </GearCard>
                ))}
            </GearList>
            <PageTitle title="Music Studio Software"/>
            <GearList>
                {software.map(item => (
                    <GearCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}>
                    </GearCard>
                ))}
            </GearList>            
        </Layout>
    )
}


export const query = graphql`
    query MusicKitList {
        hardware: allAirtable(filter: {table: {eq: "Kit"}, data: {Task: {eq: "Music"}, Type: {eq: "Hardware"}}}) {
            edges {
                node {
                    data {
                        Name
                        Brand
                        Category
                        Task
                        Type
                        URL
                    }
                    id
                }
            }
        },
        software: allAirtable(filter: {table: {eq: "Kit"}, data: {Task: {eq: "Music"}, Type: {eq: "Software"}}}) {
            edges {
                node {
                    data {
                        Name
                        Brand
                        Category
                        Task
                        Type
                        URL
                    }
                    id
                }
            }
        },
    }
`
