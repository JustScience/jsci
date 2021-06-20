import React from 'react'
import { FormCTAWrap, FormCTAImage } from './style'

export default function FormCTA({ children }) {
    return (
        <FormCTAWrap>
            <FormCTAImage />
            { children }
        </FormCTAWrap>
    )
}
