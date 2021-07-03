import React from 'react'
import { BtnWrap } from './style'

export default function aBtn({ href, children }) {
    return (
        <BtnWrap href={href}>
            { children }
        </BtnWrap>
    )
}
