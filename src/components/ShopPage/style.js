import styled from 'styled-components'
import media from '../Responsive/media'

const ShopPageWrap = styled.section`
    display: grid;
    grid-template-columns: 1fr;

    ${media.tabletSM`
        grid-template-columns: 1fr 2fr;
    `}
    ${media.tablet`
        grid-template-columns: 1fr 4fr;
    `}
`

export default ShopPageWrap