import styled from "styled-components";
import media from '../../0-theme/Responsive/media'

const GalleryWrap = styled.section`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 24px;
    width: 100%;
    
    ${media.tabletSM`
        grid-template-columns: 1fr 1fr;
    `};
    ${media.tablet`
        grid-template-columns: 1fr 1fr 1fr;
    `};
    ${media.tabletLG`
        grid-template-columns:  ${props => props.small ? '1fr 1fr 1fr' : '1fr 1fr 1fr 1fr'};
    `};
    ${media.laptop`
    grid-template-columns:  ${props => props.small ? '1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr'};
        margin: 0 auto;
        max-width: 1440px;
    `};
`

export default GalleryWrap