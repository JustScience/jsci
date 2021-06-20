import React from 'react'
import { NavWrap, NavItem } from './style.js'
import color from './../Theme/Color'

const activeStyle = {
    background: color.grey.offWhite, 
    boxShadow: "0 4px 9px -6px" + color.shadow.base,
}

export default function HeaderNav() {
    return (
        <NavWrap>
            <NavItem to="/contact" activeStyle={activeStyle}>Contact</NavItem>
        </NavWrap>
    )
}
