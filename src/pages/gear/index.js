import React from 'react'

import Layout from './../../components/Layout'
import Contain from './../../components/Contain'
import Hero from './../../components/Hero'
import Icon from './../../components/Icon'
import { LinkGalleryWrap, LinkCard } from './../../components/LinksGallery/style'

export default function GearPage() {
    return (
        <Layout>
            <Hero />
            <Contain>
                <LinkGalleryWrap>
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
                        <span>Live Streaming Gear</span>
                    </LinkCard>
                </LinkGalleryWrap>
            </Contain>
        </Layout>
    )
}
