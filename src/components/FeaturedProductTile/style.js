import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const FeaturedProductTileWrap = styled.div`
    height: 100%;
    position: relative;
    width: 100%;  
`
const FeaturedProductTileInfo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    align-items: center;
    background-color: rgba(0,0,0,0);
    backdrop-filter: none;
    display: flex;
    justify-content: center;
    padding: 24px;
    transition: all 240ms ease-in-out;

    &:hover {
        background-color: rgba(0,0,0,0.75);
        backdrop-filter: blur(5px);

        h2 {
            color: rgba(255,255,255,0.6);
        }
    }
`
const FeaturedProductTileTitle = styled.h2`
    color: rgba(255,255,255,0);
    font-size: 0.75em;
    font-weight: 600;
    margin-top: 12px;
    text-align: center;
    transition: color 360ms ease-in-out;
`
const FeaturedProductImage = styled(GatsbyImage)`
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export { FeaturedProductTileWrap, FeaturedProductTileInfo, FeaturedProductTileTitle, FeaturedProductImage }