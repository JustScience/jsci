import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import color from '../../0-theme/Color'
import media from '../../0-theme/Responsive/media'

const MobileNavWrap = styled.nav`
    align-items: flex-end;
    background-color: rgba(0,0,0,0.75);
    backdrop-filter: blur(5px);
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 12px 24px 48px 24px;
    position: fixed;
    top: 50px;
    width: 100%;
    z-index: 99999;

    ${media.tabletLG`
        display: none;
    `};
`
const MobileNavHeaderWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    position: fixed;
    right: 12px;
    top: 5px;
    z-index: 99999;
`
const MobileNavTrigger = styled.div`
    display: block;
    height: 32px;
    margin-left: 12px;
    width: 32px;

    ${media.tabletLG`
        display: none;
    `};

    svg {
        fill: rgba(255,255,255,0.3);
        transition: fill 240ms ease-in-out;
        &:hover {fill: rgba(255,255,255,0.6);}
    }
`
const MobileNavItem = styled(GatsbyLink)`
    border: solid 1px transparent;
    border-radius: 12px;
    color: white;
    font-size: 0.9em;
    margin-bottom: 8px;
    padding: 8px 12px;
    transition: all 333ms ease-in;

    &:hover {
        background-color: ${color.primary.base};
        box-shadow: 0 4px 9px -6px ${color.shadow.base};
    }
`

export { MobileNavWrap, MobileNavHeaderWrap, MobileNavTrigger, MobileNavItem }