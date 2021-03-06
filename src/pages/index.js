import * as React from "react"
import ProductContext from '../context/ProductContext'

import Layout from '../components/5-layout/Layout'
// import HomepageCollectionsGrid from '../components/HomepageCollectionsGrid'
import FeaturedProducts from "../components/4-pages/FeaturedProducts"
import Hero from '../components/3-sections/Hero'
import Section from '../components/1-elements/Section'
// import Button from '../components/Button'
import SearchEngine from "../components/0-theme/SEO/SearchEngine"

// markup
const IndexPage = ({location}) => {
  const {collections} = React.useContext(ProductContext)

  return (
    <>
    <SearchEngine />
    <Layout location={location} crumbLabel="Home" >
      <Hero imageName="hero-bg.jpg" />
      <Section>
        {/* <HomepageCollectionsGrid collections={collections} /> */}
        {!!collections.find(collection => collection.title === "Featured" ) &&
          <FeaturedProducts />      
        }
      </Section>
  </Layout>
    </>
  )
}

export default IndexPage
