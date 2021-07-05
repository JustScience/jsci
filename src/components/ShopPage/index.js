import React from 'react'
import ShopPageWrap from './style'
import Section from '../1-atoms/Section'

export default function ShopPage({ children }) {
    return (
        <Section>
            <ShopPageWrap>
                { children }
            </ShopPageWrap>
        </Section>
    )
}
