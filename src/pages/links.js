import React from 'react'
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import LinkTree from './../components/LinkTree'
import SearchEngine from "../components/SEO/SearchEngine"

export default function LinksPage() {
    return (
        <>
            <SearchEngine title="JustScience Linktree | JSci" />
            <Layout>
                <Hero />
                <LinkTree /> 
            </Layout>
        </>
    )
}
