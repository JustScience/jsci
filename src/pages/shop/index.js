import React from 'react'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import ProductContext from '../../context/ProductContext'

import Filters from '../../components/Filters'
import Layout from '../../components/Layout'
import { HeaderSpacer } from '../../components/Layout/style'
import ProductsGrid from '../../components/ProductsGrid'

export default function ShopIndex() {
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
        <Layout>
            <HeaderSpacer />
            {!!searchTerm && !!filteredProducts.length && (
                <h3>
                    Search Term: <strong>'{searchTerm}'</strong>
                </h3>
            )}
            {!!filteredProducts.length &&
                <h4>{filteredProducts.length} products</h4>
            }
            <div>
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
                        <ProductsGrid products={filteredProducts} />
                    </div>
                }
            </div>
        </Layout>
    )
}