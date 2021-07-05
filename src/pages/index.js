import * as React from "react"
import ProductContext from '../context/ProductContext'

import Layout from '../components/5-environments/Layout'
// import HomepageCollectionsGrid from '../components/HomepageCollectionsGrid'
import FeaturedProducts from "../components/FeaturedProducts"
import Hero from '../components/Hero'
// import Banner from '../components/Banner'
import Section from '../components/Section'
// import Button from '../components/Button'
import SearchEngine from "../components/SEO/SearchEngine"

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
