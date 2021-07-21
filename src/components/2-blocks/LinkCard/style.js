import styled from "styled-components";
import { Link as GatsbyLink } from 'gatsby'

const LinkCardWrap = styled(GatsbyLink)`
    align-items: center;
    background-color: ${props => props.ghost ? 'transparent' : 'rgba(255,255,255,0.15)'};
    border-radius: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    text-align: center;
    transition: background-color 240ms ease-in-out;

    span {margin-top: 8px;}

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`

export default LinkCardWrap