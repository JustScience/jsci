import styled from 'styled-components'

const ProductTileWrap = styled.div`
    background-color: rgba(255,255,255,0.15);
    border-radius: 12px;
`
const ProductTileInfo = styled.div`
    padding: 24px;
`
const ProductTileTitle = styled.h3`
`
const ProductTileDescription = styled.p`
    color: rgba(255,255,255,0.6);
    font-size: 0.75em;
    font-weight: 300;
    line-height: 1.5em;
`
const ProductTilePrice = styled.p`
    color: orange;
    font-size: 1.5em;
    font-weight: 600;
    margin: 0;
    text-align: right;
    width: 100%;

    span {
        color: rgba(255,255,255,0.6);
        font-size: 0.6em;
        font-weight: 300;
    }
`

export { ProductTileWrap, ProductTileInfo, ProductTileTitle, ProductTileDescription, ProductTilePrice }