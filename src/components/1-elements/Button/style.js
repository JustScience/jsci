import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

const ButtonWrap = styled(GatsbyLink)`
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    border-radius: 24px;
    color: white;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`
const HrefWrap = styled.a`
    background-color: rgba(0,0,0,0.3);
    backdrop-filter: blur(5px);
    border-radius: 24px;
    color: white;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`
const BtnWrap = styled.a`
    background-color: darkslateblue;
    backdrop-filter: blur(5px);
    border-radius: 24px;
    color: white;
    cursor: pointer;
    display: block;
    padding: 12px 24px;
    text-align: center;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: slateblue;
    }
`

export { ButtonWrap, HrefWrap, BtnWrap }