import styled from 'styled-components'
import media from '../../Responsive/media'

const ShopPageWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${media.tabletSM`
        flex-direction: row;
    `};
`

export default ShopPageWrap