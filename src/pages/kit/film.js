import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import KitCard from '../../components/KitCard'
import { KitList } from '../../components/KitCard/style'

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
            <KitList>
                {items.map(item => (
                    <KitCard 
                        key={item.node.id}
                        href={item.node.data.URL}>
                        <h4>{item.node.data.Name}</h4>
                        <p>{item.node.data.Brand}</p>
                    </KitCard>
                ))}
            </KitList>
        </Layout>
    )
}
