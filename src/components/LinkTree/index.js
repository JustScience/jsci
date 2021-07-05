import React from 'react'
import Contain from '../1-elements/Contain'
import Icon from '../1-elements/Icon'
import { LinkTreeWrap, SocialCard } from './style'

export default function LinkTree() {
    return (
        <Contain>
            <LinkTreeWrap>
                <SocialCard href="https://twitch.tv/jsci_">
                    <Icon shape="twitch" color="#6441a5" size="48px" />
                    <span>Follow on Twitch</span>
                </SocialCard>
                <SocialCard href="https://youtube.tv/thejustscience">
                    <Icon shape="youtube" color="#FF0000" size="48px" />
                    <span>Subscribe on YouTube</span>
                </SocialCard>
                <SocialCard href="https://twitter.com/jscibeats">
                    <Icon shape="twitter" color="#00acee" size="48px" />
                    <span>Follow on Twitter</span>
                </SocialCard>
            </LinkTreeWrap>
        </Contain>
    )
}
