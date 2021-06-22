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

export { KitList, KitCardWrap }