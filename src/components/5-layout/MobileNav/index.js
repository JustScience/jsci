import React, { useState } from 'react'
import color from '../../0-theme/Color.js'

import { MobileNavItem, MobileNavWrap, MobileNavTrigger, MobileNavHeaderWrap } from './style.js'
import Icon from '../../1-elements/Icon'
import Cart from '../../3-sections/Cart'

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
                    <MobileNavItem to="/shop" activeStyle={activeStyle}>Shop</MobileNavItem>
                    <MobileNavItem to="/gear" activeStyle={activeStyle}>Gear</MobileNavItem>
                    <MobileNavItem to="/free" activeStyle={activeStyle}>Freebies</MobileNavItem>
                    <MobileNavItem to="/video" activeStyle={activeStyle}>Videos</MobileNavItem>
                    <MobileNavItem to="/links" activeStyle={activeStyle}>Links</MobileNavItem>
                    <MobileNavItem to="/contact" activeStyle={activeStyle}>Contact</MobileNavItem>
                </MobileNavWrap>
            }
        </div>
    )
}
