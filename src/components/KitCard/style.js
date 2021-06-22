import { GatsbyImage as StyledImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import media from '../Responsive/media'

const KitList = styled.ul`
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 24px;
    max-width: 1080px;

    ${media.tablet`
        grid-template-columns: 2fr 2fr;
    `};
    ${media.laptopSM`
        grid-template-columns: 3fr 3fr 3fr;
    `};
`
const KitCardWrap = styled.a.attrs( props => {
    return {
        href: props.href ? props.href : '#',
        rel: 'noopener noreferrer',
        target: '_blank'
    }
})`
    background-color: rgba(255,255,255,0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
    transition: background-color 240ms ease-in-out;

    h4,p {margin: 0;}

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`
const GearThumbnail = styled(StyledImage)`
    background-color: black;
    height: 120px;
    width: 120px;
`
const GearInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;

    p {
        font-size: 0.75em;
        font-weight: 300;
    }
`
const GearTitle = styled.h4`
    font-size: 1.2em;
    font-weight: 600;
`
const GearBrand = styled.h5`
    color: rgba(255,255,255,0.6);
    font-size: 0.9em;
    font-weight: 400;
`
const GearCategory = styled.p`
    color: rgba(255,255,255,0.48);
`

export { KitList, KitCardWrap, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory }