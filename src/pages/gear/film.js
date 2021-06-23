import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'

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
                        category={item.node.data.Category}
                        image={item.node.data.Image[0].url}>
                    </GearCard>
                ))}
            </GearList>
        </Layout>
    )
}

export const query = graphql`
    query FilmKitList {
        allAirtable(
            filter: {table: {eq: "Kit"}, data: {Task: {eq: "Film"}}}
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
