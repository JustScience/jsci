import React from 'react'
import Header from '../../5-layout/Header'
import MobileNav from '../../5-layout/MobileNav'
import Breadcrumbs from '../../1-elements/Breadcrumbs'
// import Footer from '../Footer'
// import Responsive from '../Responsive'
import { LayoutWrap, HeaderSpacer } from './style'

import '../../0-theme/global.css'

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
