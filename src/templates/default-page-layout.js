import React from 'react'

import SearchEngine from '../components/SEO/SearchEngine'
import PageTitle from '../components/PageTitle'
import Layout from '../components/Layout'

export default function defaultPageLayout() {
    return (
        <>
            <SearchEngine
                url="/page-title"
                title="Page Title"
                description="SEO Page Description"
            />
            <Layout>
                <PageTitle 
                    title="Page Title"
                    subbtitle="Add a subtitle here"
                />
            </Layout>
        </>
    )
}
