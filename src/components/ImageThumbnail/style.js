import styled from 'styled-components'

const ImageThumbnailWrap = styled.div`
    border: 1px solid ${props => props.isActive ? '#aaa' : '#eee'};
    box-sizing: border-box;
    padding: 2px;
    height: 90px;
    width: 90px;
`

export default ImageThumbnailWrap