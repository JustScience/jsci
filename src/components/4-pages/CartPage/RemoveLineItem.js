import React from 'react'
import CartContext from '../../../context/CartContext'
import Icon from '../../1-elements/Icon'
import styled from 'styled-components'

const DeleteButton = styled.div`
    border-radius: 12px;
    cursor: pointer;
    padding: 8px;
    padding-bottom: 2px;
    transition: background-color 240ms ease-in-out;

    &:hover {background-color:rgba(255,255,255,0.15);}
`

export default function RemoveLineItem({lineItemId}) {
    const {removeLineItem} = React.useContext(CartContext)

    const handleClick = () => {
        removeLineItem(lineItemId)
    }

    return (
        <DeleteButton onClick={handleClick} onKeyDown={handleClick} role="button" tabindex="0">
            <Icon shape="trash" size="20px" color="red" />
        </DeleteButton>
    )
}
