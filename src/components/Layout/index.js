import React from 'react'
import Header from '../Header'
import MobileNav from '../MobileNav'
import Breadcrumbs from '../Breadcrumbs'
// import Footer from '../Footer'
// import Responsive from '../Responsive'
import { LayoutWrap, HeaderSpacer } from './style'

import '../../styles/global.css'

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
