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
      <SearchEngine />
      <Layout>
        <Hero />
        <LinksGallery />
      </Layout>
    </>
  )
}

export default IndexPage
