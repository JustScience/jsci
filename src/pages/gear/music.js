import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import PageTitle from '../../components/PageTitle'
import KitCard from '../../components/KitCard'
import { KitList } from '../../components/KitCard/style'

export default function MusicKit({data}) {
    const hardware = data.hardware.edges
    const software = data.software.edges
     
    return (
        <Layout>
            <Hero />
            <PageTitle title="Music Studio Hardware"/>
            <KitList>
                {hardware.map(item => (
                    <KitCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}>
                    </KitCard>
                ))}
            </KitList>
            <PageTitle title="Music Studio Software"/>
            <KitList>
                {software.map(item => (
                    <KitCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}>
                    </KitCard>
                ))}
            </KitList>            
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
