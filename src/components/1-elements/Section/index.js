import React from 'react'
import SectionWrap from './style'

export default function Section({ children }) {
    return (
        <SectionWrap>
            { children }
        </SectionWrap>
    )
}
