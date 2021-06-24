import * as React from "react"

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Button from '../components/Button'
import SearchEngine from "../components/SEO/SearchEngine"

// markup
const IndexPage = () => {
  return (
    <>
    <SearchEngine />
    <Layout>
      <Hero />
      <Banner imageBG="BannerBG1">
        <Button to="/free/loops">Get Free Loops</Button>
        {/* <Button to="/free/beats">Free Beats</Button> */}
        {/* <Button to="/free/music">Free Music</Button> */}
      </Banner>
    </Layout>
    </>
  )
}

export default IndexPage
