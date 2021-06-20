import * as React from "react"
import Layout from './../components/Layout'
import Hero from './../components/Hero'
import Banner from './../components/Banner'
import Button from './../components/Button'
import './../styles/global.css'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Banner imageBG="BannerBG1">
        <Button to="/free-melody-loops">Free Melody Loops</Button>
        <Button to="/free-trap-beats">Free Trap Beats</Button>
        <Button to="/free-background-music">Free Background Music</Button>
      </Banner>
    </Layout>
  )
}

export default IndexPage
