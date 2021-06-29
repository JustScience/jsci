import styled from 'styled-components'
import media from '../Responsive/media'

const ProductWrap = styled.section`
    display: grid;
    gap: 36px;
    grid-template-columns: 1fr;
    padding: 24px;

    ${media.tablet`    
        grid-template-columns: 2fr 2fr;
    `}
`
const ProductInfo = styled.div`
    height: 100%;
    
    p {
        color:rgba(255,255,255,0.6);
        font-size:0.75em;
        font-weight:300;
    }
`
const ProductPurchase = styled.div`
    align-items: center;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    left: 0;
    padding: 12px;
    position: fixed;
    right: 0;

    ${media.tablet`
        padding: 0;
        position: relative;
        background-color: transparent;
        backdrop-filter: none;
    `}

    select {
        display: flex;
        flex: 1;
        margin-right: 24px;
        padding: 4px 8px;
    }
`
const ProductPrice = styled.span`
    font-size: 1.2em;
    margin-right: 24px;

    span {
        color:rgba(255,255,255,0.6);
        font-weight:300;
        margin-right:2px;
    }
`

export { ProductWrap, ProductInfo, ProductPurchase, ProductPrice }