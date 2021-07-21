import React from 'react'
import Contain from '../../1-elements/Contain'
import Icon from '../../1-elements/Icon'
import Gallery from '../Gallery'
import LinkCard from '../../2-blocks/LinkCard'

export default function LinkTree() {
    return (
        <Contain>
            <Gallery small='true'>
                <LinkCard to="https://twitch.tv/jsci_">
                    <Icon shape="twitch" color="#6441a5" size="48px" />
                    <span>Follow on Twitch</span>
                </LinkCard>
                <LinkCard to="https://youtube.com/thejustscience">
                    <Icon shape="youtube" color="#FF0000" size="48px" />
                    <span>Subscribe on YouTube</span>
                </LinkCard>
                <LinkCard to="https://twitter.com/jscibeats">
                    <Icon shape="twitter" color="#00acee" size="48px" />
                    <span>Follow on Twitter</span>
                </LinkCard>
            </Gallery>
        </Contain>
    )
}
