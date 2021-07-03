import * as React from "react"

import SearchEngine from "../../components/SEO/SearchEngine"
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import LinksGallery from '../../components/LinksGallery'

import '../../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <>
      <SearchEngine
        url="free"
        title="Free Tools for Musicians and Content Creators" 
        description="Download free tools for music producers, recording artists, and content creators."
      />
      <Layout>
        <Hero />
        <LinksGallery />
      </Layout>
    </>
  )
}

export default IndexPage
