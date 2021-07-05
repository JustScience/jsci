import React from 'react'
import Container from './style'

export default function Contain({ children }) {
    return (
        <Container>
            { children }
        </Container>
    )
}
