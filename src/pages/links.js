import React from 'react'
import Layout from '../components/5-layout/Layout'
import Hero from '../components/3-sections/Hero'
import LinkTree from '../components/3-sections/LinkTree'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"

export default function LinksPage({location}) {
    return (
        <>
            <SearchEngine title="JustScience Linktree | JSci" />
            <Layout location={location} crumbLabel="Social Links" >
                <Hero />
                <LinkTree /> 
            </Layout>
        </>
    )
}
