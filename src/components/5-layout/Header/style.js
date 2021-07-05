import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import color from '../../0-theme/Color'
import media from '../../0-theme/Responsive/media'

const HeaderWrap = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 9px -6px ${color.shadow.base};
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    margin: 0;
    padding: 4px 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9998;
`
const LogoWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const LogoIcon = styled.div`
    color: ${color.grey.offWhite};
    font-size: 2.1em;
    font-weight: 700;
    margin-right: 10px;
    text-shadow: 0 1px 3px ${color.shadow.light};
    transition: 333ms ease-in;

    img {height:100%;width:100%;}
    /* &:hover {
        color: ${color.accent.base};
    } */
`
const LogoText = styled.span`
    color: ${color.grey.offWhite};
    display: none;
    font-size: 1em;
    line-height: 100%;
    visibility: hidden;

    ${media.tablet`
        display: block;
        visibility: visible;
    `};
`
const NavWrap = styled.nav`
    align-items: center;
    display: none;
    flex-direction: row;
    justify-content: flex-start;

    ${media.tabletLG`
        display: flex;
    `};
`
const NavItem = styled(GatsbyLink)`
    border: solid 1px transparent;
    border-radius: 12px;
    color: white;
    font-size: 0.9em;
    margin-left: 4px;
    padding: 8px 12px;
    transition: all 333ms ease-in;

    &:hover {
        background-color: ${color.primary.base};
        box-shadow: 0 4px 9px -6px ${color.shadow.base};
    }
`

export { HeaderWrap, LogoWrap, NavWrap, NavItem, LogoIcon, LogoText }