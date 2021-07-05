import styled from 'styled-components'

const InputField = styled.input`
    background-color: rgba(255,255,255,0);
    /* border: none; */
    border: 1px solid rgba(255,255,255,0.15);
    padding: 4px 8px;

    &:focus {
        background-color: rgba(255,255,255,0.9);
        /* border: none; */
        /* border-bottom: 1px solid rgba(255,255,255,0.3); */
        outline: none;
    }
`

export default InputField