import styled from 'styled-components'
import media from '../Responsive/media'
import { Link as GatsbyLink } from 'gatsby'

const GearList = styled.ul`
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
// const GearCardWrap = styled.a.attrs( props => {
//     return {
//         href: props.href ? props.href : '#',
//         rel: 'noopener noreferrer',
//         target: '_blank'
//     }
// })`
const GearCardWrap = styled(GatsbyLink)`
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
const GearThumbnailFrame = styled.div`
    height: 120px;
    max-width: 200px;
`
const GearThumbnail = styled.img`
    height: 100%;
`
const GearInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
`
const GearTitle = styled.h4`
    font-size: 1.2em;
    font-weight: 600;
`
const GearBrand = styled.h5`
    color: rgba(255,255,255,0.6);
    font-size: 0.9em;
    font-weight: 400;
    margin-bottom: 12px;
`
const GearCategory = styled.h3`
    color: rgba(255,180,0,0.48);
    font-size: 0.75em;
    font-weight: 300;
    margin: 0;
    margin-top: 12px;
`
const GearDescription = styled.p`
    color: rgba(255,255,255,0.48);
    font-size: 0.75em;
    font-weight: 300;
    height: 36px;
    padding-left: 12px;
    overflow: hidden;
`

export { GearList, GearCardWrap, GearThumbnailFrame, GearThumbnail, GearInfo, GearTitle, GearBrand, GearCategory, GearDescription }