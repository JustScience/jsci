import * as React from "react"

import Layout from './../../components/Layout'
import Hero from './../../components/Hero'
import LinksGallery from './../../components/LinksGallery'

import './../../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <LinksGallery />
    </Layout>
  )
}

export default IndexPage
