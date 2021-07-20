import React from 'react'
import { Link } from 'gatsby'
import CartContext from '../../../context/CartContext'
import CartWrap from './style'
import Icon from '../../1-elements/Icon'

export default function Cart() {
    const {checkout} = React.useContext(CartContext)

    let totalQuantity = 0
    if(checkout){
        checkout.lineItems.forEach(lineItem => {
            totalQuantity = totalQuantity + lineItem.quantity
        });
    }

    return (
        <Link to="/cart"> 
            <CartWrap>
                <Icon shape="cart" size="20px" /> &nbsp;
                {/* {totalQuantity} |   */}
                ${checkout?.totalPrice || '0.00'}
            </CartWrap>
        </Link>
    )
}
