import React from 'react'
import Contain from './../Contain'
import Icon from './../Icon'
import { LinkGalleryWrap, LinkCard } from './style'

export default function LinksGallery() {
    return (
        <Contain>
            <LinkGalleryWrap>
                <LinkCard to="/free/loops">
                    <Icon shape="piano" color="white" size="48px" />
                    <span>Free Melody Loops</span>
                </LinkCard>
                <LinkCard to="/free/beats">
                    <Icon shape="microphone" color="white" size="48px" />
                    <span>Free Instrumental Beats</span>
                </LinkCard>
                <LinkCard to="/free/music">
                    <Icon shape="music" color="white" size="48px" />
                    <span>Free Background Music</span>
                </LinkCard>
            </LinkGalleryWrap>
        </Contain>
    )
}
