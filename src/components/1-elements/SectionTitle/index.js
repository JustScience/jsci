import React from 'react'
import SectionTitleWrap from './style'

export default function SectionTitle({ title, subtitle }) {
    return (
        <SectionTitleWrap>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </SectionTitleWrap>
    )
}
