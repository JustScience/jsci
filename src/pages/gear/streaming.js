import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import KitCard from '../../components/KitCard'
import { KitList } from '../../components/KitCard/style'

export const query = graphql`
    query StreamKitList {
        allAirtable(filter: {table: {eq: "Kit"}, data: {Task: {eq: "Streaming"}}}) {
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
        }
    }
`
export default function StreamKit({data}) {
    const items = data.allAirtable.edges
     
    return (
        <Layout>
            <Hero />
            <KitList>
                {items.map(item => (
                    <KitCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}>
                    </KitCard>
                ))}
            </KitList>
        </Layout>
    )
}
