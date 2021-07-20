import React, { useState } from 'react'
import ProductContext from '../../../context/ProductContext'
import CategoryFilterItem from '../../2-blocks/FilterItem'
import Icon from '../../1-elements/Icon'
import { FiltersWrap, FilterMenuTrigger } from './style'

export default function Filters() {
    const {collections} = React.useContext(ProductContext)
    const [showFilters, setShowFilters] = useState(true)

    return (
        <FiltersWrap>
            <FilterMenuTrigger
                onClick={() => setShowFilters(!showFilters)}
            >
                <Icon shape="filter" size="24px" />
                <h4>&nbsp;Categories</h4>
            </FilterMenuTrigger>
            {!!showFilters &&
                <div>
                    {collections.map(collection => (
                        <CategoryFilterItem 
                            key={collection.storefrontId} 
                            title={collection.title} 
                            id={collection.storefrontId}
                        />
                    ))}
                </div>
            }
        </FiltersWrap>
    )
}
