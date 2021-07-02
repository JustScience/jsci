import styled from 'styled-components'

const ImageThumbnailWrap = styled.div`
    border: 1px solid ${props => props.isActive ? 'rga(255,255,255,0.9)' : 'rga(255,255,255,0)'};
    box-sizing: border-box;
    /* padding: 2px; */
    height: 100%;
    opacity: ${props => props.isActive ? '1.0' : '0.48'};
    transition: opacity 240ms ease-in-out;
    width: 100%;
`

export default ImageThumbnailWrap