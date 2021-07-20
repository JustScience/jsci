import React from 'react'
import styled from 'styled-components'
import CartContext from '../../../context/CartContext'

const Input = styled.input`
    /* border: 2px solid red; */
`
const Button = styled.button`
    background-color: darkslateblue;
    border: none;
    border-radius: 24px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 12px 24px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: slateblue;
    }
`

export default function ProductQuantityAdder({shopifyId,variantId, available}) {
    const [quantity, setQuantity] = React.useState(1)
    const {updateLineItem} = React.useContext(CartContext)

    const handleQuantityChange = (e) => {
        setQuantity(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateLineItem({shopifyId,variantId, quantity: parseInt(quantity, 10)})
    }
    return (
        <div>
            {/* <span>Quantity</span> */}
            <form onSubmit={handleSubmit}>
                <Input 
                    disabled={!available}
                    type="number" 
                    min="1"
                    step="1"
                    value={quantity} 
                    onChange={handleQuantityChange} 
                    hidden
                />
                <Button 
                    type="submit" 
                    disabled={!available}
                >
                    Add to Cart
                </Button>
            </form>
        </div>
    )
}
