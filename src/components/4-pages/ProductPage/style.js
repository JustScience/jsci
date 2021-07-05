import styled from 'styled-components'
import media from '../../0-theme/Responsive/media'

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
`
const ProductTitle = styled.h1`
    color: orange;
    margin-bottom: 0;
`
const ProductSubTitle = styled.p`
    color: white;
    font-size: 0.9em;
`
const ProductDescription = styled.p`
    color: rgba(255,255,255,0.6);
    font-size: 0.75em;
    font-weight: 300;
`
const ProductStats = styled.ul`
`
const ProductStat = styled.li`
    border: 1px solid rgba(255,255,255,0.24);
    border-radius: 12px;
    color: rgba(255,255,255,0.48);
    display: inline-block;
    font-size: 0.75em;;
    margin: 0 4px 4px 0;
    padding: 2px 12px 0 12px;
`
const ProductPurchaseWrap = styled.div`
    background-color: rgba(0,0,0,0.15);
    backdrop-filter: blur(5px);
    bottom: 0;
    display: flex;
    flex-direction: column;
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
`
const ProductPurchase = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
    select {
        display: flex;
        flex: 1;
        margin-right: 24px;
        padding: 4px 8px;
    }    
`
const ProductPrice = styled.span`
    color: orange;
    font-size: 1.5em;
    font-weight: 600;
    margin-right: 24px;

    span {
        font-weight:300;
        margin-right:2px;
    }
`

export { ProductWrap, ProductInfo, ProductTitle, ProductSubTitle, ProductDescription, ProductStats, ProductStat, ProductPurchaseWrap, ProductPurchase, ProductPrice }