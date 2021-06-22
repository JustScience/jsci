import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import KitCard from '../../components/KitCard'
import { KitList } from '../../components/KitCard/style'

export const query = graphql`
    query MusicKitList {
        allAirtable(filter: {table: {eq: "Kit"}, data: {Task: {eq: "Music"}}}) {
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
export default function MusicKit({data}) {
    const items = data.allAirtable.edges
     
    return (
        <Layout>
            <Hero />
            <h2>Music Hardware</h2>
            <KitList>
                {items.map(item => {
                    if (item.node.data.Type === "Hardware")
                    {
                        return (
                            <KitCard 
                                key={item.node.id}
                                href={item.node.data.URL}>
                                <h4>{item.node.data.Name}</h4>
                                <p>{item.node.data.Brand}</p>
                            </KitCard>
                        )
                    }
                })}
            </KitList>
            <h2>Music Software</h2>
            <KitList>
                {items.map(item => {
                    if (item.node.data.Type === "Software"){
                        return (
                            <KitCard 
                                key={item.node.id}
                                href={item.node.data.URL}>
                                <h4>{item.node.data.Name}</h4>
                                <p>{item.node.data.Brand}</p>
                            </KitCard>
                        )
                    }
                })}
            </KitList>            
        </Layout>
    )
}
