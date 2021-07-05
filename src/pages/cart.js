import React from 'react'
import Layout from '../components/5-layout/Layout'
import SearchEngine from '../components/0-theme/SEO/SearchEngine'
import Section from '../components/1-elements/Section'
import CartContents from '../components/4-pages/CartPage'

export default function cart({location}) {
    return (
        <>
            <SearchEngine title="Shopping Cart" />
            <Layout location={location} crumbLabel="Cart" >
                <Section>
                    <CartContents />
                </Section>
            </Layout>
        </>
    )
}
