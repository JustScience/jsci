import React from 'react'
import { KitCardWrap } from './style'

export default function KitCard({href, children}) {
    return (
        <KitCardWrap href={href}>
            {children}
        </KitCardWrap>
    )
}
