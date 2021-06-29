import styled from 'styled-components'

const CartWrap = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.15);
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 8px;
    padding: 8px 16px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`

export default CartWrap