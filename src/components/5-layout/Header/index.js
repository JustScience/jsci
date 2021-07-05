import React from 'react'
import { HeaderWrap } from './style.js'
import HeaderLogo from './logo.js'
import HeaderNav from './nav.js'
import Search from '../../2-blocks/Search'

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderLogo />
            <Search />
            <HeaderNav />
        </HeaderWrap>
    )
}
