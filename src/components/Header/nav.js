import React from 'react'
import Cart from '../Cart'
import { NavWrap, NavItem } from './style.js'
import color from './../Theme/Color'

const activeStyle = {
    background: "rgba(0,0,0,0.3)", 
    boxShadow: "0 4px 9px -6px " + color.shadow.base,
}

export default function HeaderNav() {
    return (
        <NavWrap>
            <NavItem to="/gear" activeStyle={activeStyle}>Gear</NavItem>
            <NavItem to="/links" activeStyle={activeStyle}>Links</NavItem>
            <NavItem to="/free" activeStyle={activeStyle}>Freebies</NavItem>
            <NavItem to="/shop" activeStyle={activeStyle}>Shop</NavItem>
            {/* <NavItem to="/contact" activeStyle={activeStyle}>Contact</NavItem> */}
            <Cart />
        </NavWrap>
    )
}
