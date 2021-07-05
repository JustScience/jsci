import styled from 'styled-components'
import media from '../../0-theme/Responsive/media'

const SearchWrap = styled.form`
    display: none;
    
    ${media.tabletSM`
        display: flex;
        margin-right: 180px;
    `};
    ${media.tabletLG`
        margin-right: 0;
    `};
`
const SearchButton = styled.button`
    align-items: center;
    background-color: rgba(255,255,255,0);
    border: 1px solid rgba(255,255,255,0.15);
    display: flex;
    height: 30px;
    justify-content: center;
    outline: none;
    padding: 4px;
    transition: all 240ms ease-in-out;
    width: 30px;

    &:hover {
        background-color: rgba(0,0,0,1);
        border: 1px solid rgba(255,255,255,0.6);
    }
`

export { SearchWrap, SearchButton }