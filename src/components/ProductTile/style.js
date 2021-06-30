import styled from 'styled-components'

const ProductTileWrap = styled.div`
    height: 100%;
    position: relative;
    width: 100%;  
`
const ProductTileInfo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    align-items: center;
    background-color: rgba(0,0,0,0);
    backdrop-filter: none;
    display: flex;
    justify-content: space-between;
    padding: 24px;
    transition: all 240ms ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,0.75);
        backdrop-filter: blur(5px);

        h3,p {
            color: rgba(255,255,255,0.6);
            span {color: rgba(255,150,0,1);}
        }
    }
`
const ProductTileTitle = styled.h3`
    color: rgba(255,255,255,0);
    transition: color 360ms ease-in-out;
`
const ProductTileDescription = styled.p`
    color: rgba(255,255,255,0);
    font-size: 0.75em;
    font-weight: 300;
    line-height: 1.5em;
    transition: color 360ms ease-in-out;
    overflow-y: scroll;
`
const ProductTilePrice = styled.p`
    color: rgba(255,255,255,0);
    font-size: 0.6em;
    font-weight: 300;
    margin: 0;
    text-align: right;
    transition: color 360ms ease-in-out;
    width: 100%;
    
    span {
        color: rgba(255,150,0,0);
        font-size: 2.4em;
        font-weight: 600;
        transition: color 360ms ease-in-out;
    }
`

export { ProductTileWrap, ProductTileInfo, ProductTileTitle, ProductTileDescription, ProductTilePrice }