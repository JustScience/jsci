import React from 'react'
import Header from '../../3-organisms/Header'
import MobileNav from '../../3-organisms/MobileNav'
import Breadcrumbs from '../../1-atoms/Breadcrumbs'
// import Footer from '../Footer'
// import Responsive from '../Responsive'
import { LayoutWrap, HeaderSpacer } from './style'

import '../../0-particles/global.css'

export default function Layout({ children, location, crumbLabel }) {
    return (
        <>
            <LayoutWrap>
                <Header />
                <HeaderSpacer />
                <Breadcrumbs location={location} crumbLabel={crumbLabel} />
                <MobileNav />
                { children }
                {/* <Footer /> */}
            </LayoutWrap>
            {/* <Responsive />  */}
        </>
    )
}
