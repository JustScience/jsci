import React from 'react'
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import LinkTree from './../components/LinkTree'
import SearchEngine from "../components/SEO/SearchEngine"

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
