import React from 'react'
import ShopPageWrap from './style'
import Section from '../Section'

export default function ShopPage({ children }) {
    return (
        <Section>
            <ShopPageWrap>
                { children }
            </ShopPageWrap>
        </Section>
    )
}
