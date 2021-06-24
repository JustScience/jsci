import { graphql } from 'gatsby'
import React, { useRef, useEffect } from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import GearCard from '../../components/GearCard'
import { GearList } from '../../components/GearCard/style'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function MusicKit({data}) {
    const hardware = data.hardware.edges
    const software = data.software.edges

    const revealRefs = useRef([])
    revealRefs.current = []

    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el,{
                autoAlpha: 0,
                scale: 0.9,
            },{
                duration: 0.36,
                autoAlpha: 1,
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse',
                    markers: true
                }
            })
        })
    }, [])

    const addToRefs = (el) => {
        console.log(el)
        if(el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el)
        }
        console.log(revealRefs.current)
    }
     
    return (
        <Layout>
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
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}
                        description={item.node.data.Description}
                        image={item.node.data.Image[0].url}
                        ref={addToRefs}>
                    </GearCard>
                ))}
            </GearList>
            <SectionTitle 
                title="Music Production Software"
            />
            <GearList>
                {software.map(item => (
                    <GearCard 
                        key={item.node.id}
                        href={item.node.data.URL}
                        title={item.node.data.Name}
                        brand={item.node.data.Brand}
                        category={item.node.data.Category}
                        description={item.node.data.Description}
                        image={item.node.data.Image[0].url}
                        ref={addToRefs}>
                    </GearCard>
                ))}
            </GearList>            
        </Layout>
    )
}


export const query = graphql`
    query MusicKitList {
        hardware: allAirtable(
            filter: {table: {eq: "Kit"}, data: {Task: {eq: "Music"}, Type: {eq: "Hardware"}}}
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
            filter: {table: {eq: "Kit"}, data: {Task: {eq: "Music"}, Type: {eq: "Software"}}}
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
