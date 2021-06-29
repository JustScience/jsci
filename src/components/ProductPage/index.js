import React from 'react'
import { ProductWrap } from './style'

export default function ProductPage({ children }) {
    return (
        <ProductWrap>
            { children }
        </ProductWrap>
    )
}
