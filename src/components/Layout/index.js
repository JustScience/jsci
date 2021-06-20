import React from 'react'
// import GlobalStyle from '../Theme/Global'
import Header from '../Header'
// import Footer from '../Footer'
import Responsive from '../Responsive'
import LayoutWrap from './style'

export default function Layout({ children }) {
    return (
        <>
            <LayoutWrap>
                <Header />
                { children }
                {/* <Footer /> */}
            </LayoutWrap>
            <Responsive /> 
        </>
    )
}
