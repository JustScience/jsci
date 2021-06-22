import React from 'react'
import PageTitleWrap from './style'

export default function PageTitle({ title, subtitle }) {
    return (
        <PageTitleWrap>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </PageTitleWrap>
    )
}
