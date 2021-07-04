/* eslint-disable jsx-a11y/no-onchange */
import React from 'react'
import { graphql } from 'gatsby'

import SearchEngine from '../components/SEO/SearchEngine'
import Layout from '../components/Layout'
import AffiliatePage from '../components/AffiliatePage'

export const query = graphql`
    query affiliateQuery($id: String) {
        affiliate: airtable(id: {eq: $id}) {
            data {
                Brand
                Name
                Description
                URL
                Image {
                    url
                }
            }
        }
    }
 `;

export default function AffiliateLinkPage({data, location}) {
    const { Name, Brand, Description, Image, URL } = data.affiliate.data
    const shareImage = Image[0].url

    return (
        <>
            <SearchEngine 
                title={Name}
                description={Description}
                // image={shareImage}
            />
            <Layout location={location} crumbLabel={Name} >
                <AffiliatePage
                    name={Name}
                    brand={Brand}
                    description={Description}
                    image={shareImage}
                    url={URL}
                    // affiliateId={affiliateId}
                />
            </Layout>
        </>
    )
}
