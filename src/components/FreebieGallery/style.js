import styled from 'styled-components'
import media from '../0-theme/Responsive/media'

const FreebiesGalleryWrap = styled.section`
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    margin: 0 auto;
    max-width: 1080px;

    ${media.tablet`
        display: grid;
        grid-template-columns: 2fr 2fr;
    `};
`
const FreebiesCard = styled.a.attrs( props => {
    return {
      href: props.href ? props.href : '#',
      rel: 'noopener noreferrer',
      target: '_blank'
    }
})`
    align-items: center;
    background-color: rgba(255,255,255,0.15);
    border-radius: 12px;
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

export { FreebiesGalleryWrap, FreebiesCard }