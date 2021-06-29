import styled from 'styled-components'
import media from '../Responsive/media'

const ShopPageWrap = styled.section`
    display: grid;
    grid-template-columns: 1fr;

    ${media.tabletSM`
        grid-template-columns: 1fr 2fr;
    `}
    ${media.tablet`
        grid-template-columns: 1fr 3fr;
    `}
    ${media.tabletLG`
        grid-template-columns: 1fr 4fr;
    `}
    ${media.laptopSM`
        grid-template-columns: 1fr 6fr;
    `}
    ${media.desktop`
        grid-template-columns: 1fr 8fr;
    `}
`

export default ShopPageWrap