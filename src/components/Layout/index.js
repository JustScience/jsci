import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Responsive from '../Responsive'
import LayoutWrap from './style'

import '../../styles/global.css'

export default function Layout({ children }) {
    return (
        <>
            <LayoutWrap>
                <Header />
                { children }
                <Footer />
            </LayoutWrap>
            <Responsive /> 
        </>
    )
}
