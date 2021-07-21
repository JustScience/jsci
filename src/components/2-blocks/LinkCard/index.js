import React from 'react'
import LinkCardWrap from './style'

export default function LinkCard({ children, to, ghost }) {
    return (
        <LinkCardWrap to={to} ghost={ghost}>
            { children }
        </LinkCardWrap>
    )
}
