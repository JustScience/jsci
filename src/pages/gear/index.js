import React from 'react'

import SearchEngine from "../../components/0-theme/SEO/SearchEngine"
import Layout from '../../components/5-layout/Layout'
import Contain from '../../components/1-elements/Contain'
import Hero from '../../components/3-sections/Hero'
import Icon from '../../components/1-elements/Icon'
import LinkCard from '../../components/2-blocks/LinkCard'
import Gallery from '../../components/3-sections/Gallery'


export default function GearPage({location}) {
    return (
        <>
            <SearchEngine title="Best Studio Gear Wish Lists" />
            <Layout location={location} crumbLabel="My Studio" >
                <Hero />
                <Contain>
                    <Gallery small='true'>
                        <LinkCard to="/gear/music">
                            <Icon shape="piano" color="white" size="48px" />
                            <span>Music Studio Gear</span>
                        </LinkCard>
                        <LinkCard to="/gear/film">
                            <Icon shape="filmSticks" color="white" size="48px" />
                            <span>Film Studio Gear</span>
                        </LinkCard>
                        <LinkCard to="/gear/streaming">
                            <Icon shape="gamer" color="white" size="48px" />
                            <span>Live Stream Gear</span>
                        </LinkCard>
                    </Gallery>
                </Contain>
            </Layout>
        </>
    )
}
