import React from 'react'
import styled from 'styled-components'

const QuantityAdjusterWrap = styled.div`

`
const QuantityAdjusterButton = styled.span`
    cursor: pointer;
    height: 18px;
    padding: 12px;
    width: 18px;
`

export default function QuantityAdjuster({item, onAdjust}) {
    const {quantity} = item

    const handleDecrementQuantity = () => {
        onAdjust({variantId: item.variant.id, quantity: -1})
    }
    const handleIncrementQuantity = () => {
        onAdjust({variantId: item.variant.id, quantity: 1})
    }

    return (
        <QuantityAdjusterWrap>
            <QuantityAdjusterButton onClick={handleDecrementQuantity} onKeyDown={handleDecrementQuantity} role="button" tabindex="0">-</QuantityAdjusterButton>
            {quantity}
            <QuantityAdjusterButton onClick={handleIncrementQuantity} onKeyDown={handleIncrementQuantity} role="button" tabindex="0">+</QuantityAdjusterButton>
        </QuantityAdjusterWrap>
    )
}
