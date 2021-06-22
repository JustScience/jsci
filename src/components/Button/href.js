import React from 'react'
import { HrefWrap } from './style'

export default function Href({ href, children }) {
    return (
        <HrefWrap href={href}>
            { children }
        </HrefWrap>
    )
}
