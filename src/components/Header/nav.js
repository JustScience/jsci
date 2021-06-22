import React from 'react'
import { NavWrap, NavItem } from './style.js'
import color from './../Theme/Color'

const activeStyle = {
    background: "rgba(0,0,0,0.3)", 
    boxShadow: "0 4px 9px -6px " + color.shadow.base,
}

export default function HeaderNav() {
    return (
        <NavWrap>
            <NavItem to="/kit" activeStyle={activeStyle}>Kits</NavItem>
            <NavItem to="/links" activeStyle={activeStyle}>Links</NavItem>
            <NavItem to="/free" activeStyle={activeStyle}>Freebies</NavItem>
            {/* <NavItem to="/contact" activeStyle={activeStyle}>Contact</NavItem> */}
        </NavWrap>
    )
}
