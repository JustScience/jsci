import styled from 'styled-components'

const CartItem = styled.div`
    align-items: center;
    border-bottom: 1px solid #999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
`
const CartFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
`
const CartNav = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 36px;
`
const CartNavButton = styled.div`
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    border-radius: 24px;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`

export { CartItem, CartFooter, CartNav, CartNavButton }