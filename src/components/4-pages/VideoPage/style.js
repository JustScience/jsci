import styled from 'styled-components'
import media from '../../0-theme/Responsive/media'

const VideoPageWrap = styled.section`
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
const VideoInfo = styled.div`
    h1 {font-size: 1.2em}
    p {color: rgba(255,255,255,0.6)}
`

export { VideoPageWrap, VideoInfo }