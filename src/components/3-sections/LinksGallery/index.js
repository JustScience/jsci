import React from 'react'
import Contain from '../../1-elements/Contain'
import Icon from '../../1-elements/Icon'
import Gallery from '../Gallery'
import LinkCard from '../../2-blocks/LinkCard'

export default function LinksGallery() {
    return (
        <Contain>
            <Gallery small='true'>
                <LinkCard to="/free/loops">
                    <Icon shape="piano" color="white" size="48px" />
                    <span>Free Melody Loops</span>
                </LinkCard>
                <LinkCard to="/free/beats">
                    <Icon shape="microphone" color="white" size="48px" />
                    <span>Free Hip Hop Beats</span>
                </LinkCard>
                <LinkCard to="/free/music">
                    <Icon shape="music" color="white" size="48px" />
                    <span>Free Sync Music</span>
                </LinkCard>
            </Gallery>
        </Contain>
    )
}
