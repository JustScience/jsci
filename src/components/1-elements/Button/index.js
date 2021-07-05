import React from 'react'
import { ButtonWrap } from './style'

export default function Button({to, children}) {
    return (
        <ButtonWrap to={to}>
            { children }
        </ButtonWrap>
    )
}
