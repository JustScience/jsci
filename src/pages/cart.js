import React from 'react'
import Layout from '../components/Layout'
import SearchEngine from '../components/SEO/SearchEngine'
import Section from '../components/Section'
import CartContents from '../components/CartContents'

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
