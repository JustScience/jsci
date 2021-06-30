import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoIcon, LogoText } from './style.js'
// import icon from '../../images/icon.png'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon>
                    JS
                    {/* <img src={icon} alt="Just Science LOL Icon" /> */}
                </LogoIcon>
                <LogoText>
                    it's JustScience
                </LogoText>
            </LogoWrap>
        </Link>
    )
}
