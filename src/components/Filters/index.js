import React from 'react'
import ProductContext from '../../context/ProductContext'
import CategoryFilterItem from '../FilterItem'
import FiltersWrap from './style'

export default function Filters() {
    const {collections} = React.useContext(ProductContext)

    return (
        <FiltersWrap>
            <h4>Categories</h4>
            {collections.map(collection => (
                <CategoryFilterItem 
                    key={collection.storefrontId} 
                    title={collection.title} 
                    id={collection.storefrontId}
                />
            ))}
        </FiltersWrap>
    )
}
