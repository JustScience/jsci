import React, { useState } from 'react'
import color from '../Theme/Color.js'

import { MobileNavItem, MobileNavWrap, MobileNavTrigger, MobileNavHeaderWrap } from './style.js'
import Icon from '../Icon'
import Cart from '../Cart'

const activeStyle = {
    background: "rgba(0,0,0,0.3)", 
    boxShadow: "0 4px 9px -6px " + color.shadow.base,
}

export default function MobileNav() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <MobileNavHeaderWrap>
                <Cart />
                <MobileNavTrigger 
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {!showMenu &&
                        <Icon shape="menu" size="32px" />
                    }
                    {!!showMenu &&
                        <Icon shape="close" size="32px" />
                    }
                </MobileNavTrigger>
            </MobileNavHeaderWrap>
            {!!showMenu && 
                <MobileNavWrap>
                    <MobileNavItem to="/gear" activeStyle={activeStyle}>Gear</MobileNavItem>
                    <MobileNavItem to="/links" activeStyle={activeStyle}>Links</MobileNavItem>
                    <MobileNavItem to="/free" activeStyle={activeStyle}>Freebies</MobileNavItem>
                    <MobileNavItem to="/shop" activeStyle={activeStyle}>Shop</MobileNavItem>
                    {/* <MobileNavItem to="/contact" activeStyle={activeStyle}>Contact</MobileNavItem> */}
                </MobileNavWrap>
            }
        </div>
    )
}
