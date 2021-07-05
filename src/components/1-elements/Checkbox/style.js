import styled from 'styled-components'

const CheckboxWrap = styled.div`
    background-color: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 22px;
    margin-right: 8px;
    width: 22px;

    div {
        margin: auto;
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }
`
 export default CheckboxWrap