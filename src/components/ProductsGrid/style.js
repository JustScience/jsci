import styled from 'styled-components'
import media from '../Responsive/media'

const ProductsGridWrap = styled.section`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    justify-items: stretch;
    width: 100%;

    ${media.tablet`
        grid-template-columns: 2fr 2fr;
    `};
    ${media.laptopSM`
        grid-template-columns: 3fr 3fr 3fr;
    `};
`

export default ProductsGridWrap