import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import media from './../0-theme/Responsive/media'

const LinkGalleryWrap = styled.section`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 24px;
    width: 100%;
    
    ${media.tabletSM`
        grid-template-columns: 2fr 2fr;
    `};
    ${media.tablet`
        grid-template-columns: 3fr 3fr 3fr;
    `};
`
const LinkCard = styled(GatsbyLink)`
    align-items: center;
    background-color: rgba(255,255,255,0.15);
    border-radius: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    transition: background-color 240ms ease-in-out;

    span {margin-top: 8px;}

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`

export { LinkGalleryWrap, LinkCard }