import React from 'react'
import {navigate} from 'gatsby'
import { CartItem, CartFooter, CartNav, CartNavButton } from './style'
import CartContext from '../../../context/CartContext'
import QuantityAdjuster from './QuantityAdjuster'
import RemoveLineItem from './RemoveLineItem'

export default function CartContents() {
    const {checkout, updateLineItem} = React.useContext(CartContext)

    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId})
    }

    return (
        <section>
            <h1>Shopping Cart</h1>
            {checkout?.lineItems?.map(item => (
                <CartItem key={item.variant.id}>
                    {/* Add Audio Preview */}
                    <div>
                        {item.title}
                    </div>
                    <div>
                        {item.variant.title === 'Default Title' ? '' : item.variant.title}
                    </div>
                    <div>
                        $ {item.variant.price}
                    </div>
                    <div>
                        <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
                    </div>
                    <div>
                        $ {(item.quantity * item.variant.price).toFixed(2)}
                    </div>
                    <div>
                        <RemoveLineItem lineItemId={item.id} />
                    </div>
                </CartItem>
            ))}
            {!!checkout?.lineItems && (
                <CartFooter><strong>Total: </strong><span>$ {checkout?.totalPrice}</span></CartFooter>
            )}
            {!checkout?.lineItems && (
                <h4>Your cart is empty</h4>
            )}
            <CartNav>
                <CartNavButton onClick={() => navigate(-1)}>Continue Shopping</CartNavButton>
                {!!checkout?.webUrl && (
                    <CartNavButton onClick={() => {
                        window.location.href = checkout.webUrl
                    }}>Checkout</CartNavButton>
                )}
            </CartNav>
        </section>
    )
}
