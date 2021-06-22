import React from 'react'
import { FormWrap, FormTitle, FormInstruction } from './style'

export default function Form({ title, instruction, children }) {
    return (
        <FormWrap>
            <FormTitle>{title}</FormTitle>
            <FormInstruction>{instruction}</FormInstruction>
            { children }
        </FormWrap>
    )
}
