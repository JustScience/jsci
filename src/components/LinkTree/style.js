import styled from 'styled-components'
import media from './../0-theme/Responsive/media'

const LinkTreeWrap = styled.section`
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
const SocialCard = styled.a.attrs( props => {
    return {
      href: props.href ? props.href : '#',
      rel: 'noopener noreferrer',
      target: '_blank'
    }
})`
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

export { LinkTreeWrap, SocialCard }