import React from 'react'
import Layout from '../components/Layout'
import SearchEngine from '../components/SEO/SearchEngine'
import {HeaderSpacer} from '../components/Layout/style'
import Section from '../components/Section'
import CartContents from '../components/CartContents'

export default function cart() {
    return (
        <>
            <SearchEngine title="Shopping Cart" />
            <Layout>
                <HeaderSpacer />
                <Section>
                    <CartContents />
                </Section>
            </Layout>
        </>
    )
}
