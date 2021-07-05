import React from 'react'

import SearchEngine from '../components/0-theme/SEO/SearchEngine'
import PageTitle from '../components/PageTitle'
import Layout from '../components/5-environments/Layout'

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
