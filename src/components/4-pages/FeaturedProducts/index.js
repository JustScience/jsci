import React from 'react'
import ProductContext from '../../../context/ProductContext'
import FeaturedProductsGrid from '../../3-sections/FeaturedProductsGrid'

export default function FeaturedProducts() {
    const {collections} = React.useContext(ProductContext)

    const featuredCollection = collections.find(collection => collection.title === 'Featured')

    return (
        <section>
            <h1>Latest Sample Packs</h1>
            <FeaturedProductsGrid products={featuredCollection.products} />
        </section>
    )
}