import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'

export const query = graphql`
    query FilmKitList {
        allAirtable(filter: {table: {eq: "Kit"}, data: {Task: {eq: "Film"}}}) {
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
export default function FilmKit({data}) {
    const items = data.allAirtable.edges
     
    return (
        <Layout>
            <Hero />
            <GearList>
                {items.map(item => (
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
