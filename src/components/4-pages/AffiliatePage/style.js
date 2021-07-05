import styled from 'styled-components'
import media from '../../0-theme/Responsive/media'

const AffiliatePageWrap = styled.section`
    display: grid;
    gap: 48px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    padding: 36px;
    width: 100%;

    ${media.tabletLG`
        grid-template-columns: 1fr 1fr;
    `};
`
const AffiliateImage = styled.img`
    width: 100%;
    max-width: 100%;
`
const AffiliateInfo = styled.div`
    h1 {font-size: 1.2em}
    span {color:rgba(255,255,255,0.6);font-size:0.6em;margin-left:6px;}
    p {color: rgba(255,255,255,0.6)}
`

export { AffiliatePageWrap, AffiliateImage, AffiliateInfo }