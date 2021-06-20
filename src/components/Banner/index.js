import React from 'react'
import BannerWrap from './style'

export default function Banner({ children }) {
    return (
        <BannerWrap>
            { children }
        </BannerWrap>
    )
}
