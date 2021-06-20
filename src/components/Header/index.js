import React from 'react'
import { HeaderWrap } from './style.js'
import HeaderLogo from './logo.js'
import HeaderNav from './nav.js'

export default function Header() {
    return (
        <HeaderWrap>
            <HeaderLogo />
            <HeaderNav />
        </HeaderWrap>
    )
}
