import styled from 'styled-components'
import media from '../../components/0-theme/Responsive/media'

const VideosGridWrap = styled.ul`
    display: grid;
    gap: 4px;
    grid-template-columns: 1fr;
    justify-items: stretch;
    width: 100%;

    ${media.tabletSM`
        grid-template-columns: 1fr 1fr;
    `};
    ${media.tablet`
        grid-template-columns: 1fr 1fr 1fr;
    `};
    ${media.tabletLG`
        grid-template-columns: 1fr 1fr 1fr 1fr;
    `};
    ${media.laptop`
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin: 0 auto;
        max-width: 1440px;
    `};
`
const VideoCard = styled.li`
    background-color: rgba(255,255,255,0.0);
    border-radius: 12px; 
    padding: 4px 20px;
    transition: background-color 240ms ease-in-out;
    width: 100%;

    &:hover {background-color: rgba(255,255,255,0.3);}

    p {color: white;}
`
const CardImage = styled.div`
    align-items: center;
    display: flex;
    height: 150px;
    justify-content: center;
    margin-bottom: 12px;
    width: 100%;

    img {height: 100%;width: 100%;}
`

export { VideosGridWrap, VideoCard, CardImage }