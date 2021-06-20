import styled from 'styled-components'
import media from '../Responsive/media'

const BannerWrap = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    width: 100%;

    ${media.tablet`
        align-items: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `};
`

export default BannerWrap