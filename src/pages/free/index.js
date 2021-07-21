import * as React from "react"

import SearchEngine from "../../components/0-theme/SEO/SearchEngine"
import Layout from '../../components/5-layout/Layout'
import Hero from '../../components/3-sections/Hero'
import LinksGallery from '../../components/3-sections/LinksGallery'

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
