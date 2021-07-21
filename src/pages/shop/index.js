import React from 'react'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import ProductContext from '../../context/ProductContext'
import SearchEngine from "../../components/0-theme/SEO/SearchEngine"

import Filters from '../../components/3-sections/Filters'
import Layout from '../../components/5-layout/Layout'
import ShopPage from '../../components/4-pages/ShopPage'
import ProductsGrid from '../../components/3-sections/ProductsGrid'

export default function ShopIndex({location}) {
    const { products, collections } = React.useContext(ProductContext)
    const collectionProductMap = {}
    const { search } = useLocation()
    const qs = queryString.parse(search)
    const selectedCollectionIds = qs.c?.split(',').filter(c => !!c) || []
    const selectedCollectionIdsMap = {}
    const searchTerm = qs.s

    selectedCollectionIds.forEach(collectionId => {
        selectedCollectionIdsMap[collectionId] = true
    })
    
    if(collections){
        collections.forEach(collection => {
            collectionProductMap[collection.storefrontId] = {}

            collection.products.forEach(product => {
                collectionProductMap[collection.storefrontId][product.storefrontId] = true
            })
        })
    }

    console.log(collectionProductMap)

    const filterByCategory = (product) => {
        if(Object.keys(selectedCollectionIdsMap).length){
            for(let key in selectedCollectionIdsMap){
                if(collectionProductMap[key]?.[product.storefrontId]){
                    return true
                }
            }
            return false
        }
        return true
    }

    const filterBySearchTerm = product => {
        if (searchTerm) {
            return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        }
        return true
    }

    const filteredProducts = products.filter(filterByCategory).filter(filterBySearchTerm)

    return (
        <>
            <SearchEngine 
                title="Melody Loops Shop" 
                description="Melody Loops and Composition Samples, Tools for Music Producers" 
            />
            <Layout location={location} crumbLabel="Shop" >
            <ShopPage>
                    <Filters />
                    {!filteredProducts.length &&
                        <div>
                            <h3>
                                <span>
                                    Oh No! Nothing matches 
                                </span>
                                &nbsp;
                                <strong>
                                    '{searchTerm}'
                                </strong>
                            </h3>
                            <div>
                                To help with your search, why not try:
                                <br />
                                <ul>
                                    <li>- Checking for spelling mistakes</li>
                                    <li>- Using fewer words</li>
                                    <li>- Searching for a different term</li>
                                </ul>
                            </div>
                        </div>
                    }
                    {!!filteredProducts.length &&
                        <div>
                            {!!searchTerm && !!filteredProducts.length && (
                                <h4>
                                    Search Term: <strong>'{searchTerm}'</strong>
                                </h4>
                            )}
                            {/* {!!filteredProducts.length &&
                                <p>&nbsp;&nbsp;&nbsp;{filteredProducts.length} products</p>
                            } */}
                            <ProductsGrid products={filteredProducts} />
                        </div>
                    }
                </ShopPage>
            </Layout>
        </>
    )
}