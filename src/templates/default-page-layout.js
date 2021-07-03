import React from 'react'

import SearchEngine from '../components/SEO/SearchEngine'
import PageTitle from '../components/PageTitle'
import Layout from '../components/Layout'
import { HeaderSpacer } from '../components/Layout/style'

export default function defaultPageLayout() {
    return (
        <>
            <SearchEngine
                url="/page-title"
                title="Page Title"
                description="SEO Page Description"
            />
            <Layout>
                <HeaderSpacer />
                <PageTitle 
                    title="Page Title"
                    subbtitle="Add a subtitle here"
                />
            </Layout>
        </>
    )
}
