import React from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import queryString from 'query-string'
import { SearchWrap, SearchButton } from './style'
import Icon from '../Icon'
import Input from '../Input'

export default function Search() {
    const [searchTerm, setSearchTerm] = React.useState('')
    const {search} = useLocation()
    const c = queryString.parse(search)?.c || ''

    const handleSubmit = e => {
        e.preventDefault()

        if (c) {
            navigate(`/shop?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)
        } else {
            navigate(`/shop?s=${encodeURIComponent(searchTerm)}`)
        }
    }

    return (
        <SearchWrap onSubmit={handleSubmit} >
            <Input 
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.currentTarget.value)} 
            />
            <SearchButton>
                <Icon shape="search" size="20px" />
            </SearchButton>
        </SearchWrap>
    )
}
