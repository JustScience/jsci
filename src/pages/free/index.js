import * as React from "react"

import SearchEngine from "../../components/SEO/SearchEngine"
import Layout from '../../components/5-environments/Layout'
import Hero from '../../components/Hero'
import LinksGallery from '../../components/LinksGallery'

// markup
const IndexPage = ({location}) => {
  return (
    <>
      <SearchEngine
        url="free"
        title="Free Tools for Musicians and Content Creators" 
        description="Download free tools for music producers, recording artists, and content creators."
      />
      <Layout location={location} crumbLabel="Freebies" >
        <Hero />
        <LinksGallery />
      </Layout>
    </>
  )
}

export default IndexPage
