import styled from 'styled-components'
import media from '../Responsive/media'

const FeaturedProductsGridWrap = styled.section`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr 1fr;
    justify-items: stretch;
    width: 100%;

    ${media.tabletSM`
        grid-template-columns: 1fr 1fr 1fr;
    `};
    ${media.tablet`
        grid-template-columns: 1fr 1fr 1fr 1fr;
    `};
    ${media.tabletLG`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    `};
    ${media.laptop`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    `};
    ${media.desktop`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    `};
    ${media.tv`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    `};
`

export default FeaturedProductsGridWrap