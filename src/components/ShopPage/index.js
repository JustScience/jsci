import React from 'react'
import ShopPageWrap from './style'
import Contain from '../Contain'

export default function ShopPage({ children }) {
    return (
        <Contain>
            <ShopPageWrap>
                { children }
            </ShopPageWrap>
        </Contain>
    )
}
