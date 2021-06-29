import styled from 'styled-components'
import media from '../Responsive/media'

const SearchWrap = styled.form`
    display: flex;
    margin-right: 60px;

    ${media.tablet`
        margin-right: 0;
    `};
`
const SearchButton = styled.button`
    align-items: center;
    background-color: rgba(255,255,255,0);
    border: 1px solid rgba(255,255,255,0.15);
    display: flex;
    height: 28px;
    justify-content: center;
    outline: none;
    padding: 4px;
    transition: all 240ms ease-in-out;
    width: 28px;

    &:hover {
        background-color: rgba(0,0,0,1);
        border: 1px solid rgba(255,255,255,0.6);
    }
`

export { SearchWrap, SearchButton }