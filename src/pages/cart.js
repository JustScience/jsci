import React from 'react'
import Layout from '../components/Layout'
import {HeaderSpacer} from '../components/Layout/style'
import Section from '../components/Section'
import CartContents from '../components/CartContents'

export default function cart() {
    return (
        <Layout>
            <HeaderSpacer />
            <Section>
                <CartContents />
            </Section>
        </Layout>
    )
}
