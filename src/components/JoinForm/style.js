import styled from 'styled-components'
import media from '../Responsive/media'

const JoinWrap = styled.section`
    padding: 24px;
    width: 100%;

    ${media.tablet`
        width: 420px;
    `};
`
const FormWrap = styled.form`
    margin: 0 auto;
    width: 100%;
    max-width: 420px;

    ${media.tablet`
        margin: 0 24px;
    `};
`
const FormTitle = styled.h3`
    text-align: center;
`
const FormField = styled.div`
    align-items: left;
    display: flex;
    flex-direction: column;
    font-size: 1.2em;
    justify-content: flex-start;
    margin-bottom: 4px;
    padding: 6px;

    label {margin-bottom: 4px;}
    input {
        background-color: rgba(255,255,255,0.3);
        border: none;
        border-radius: 4px;
        font-size: 1.2em;
        outline: none;
        padding: 6px 8px;
        width: 100%;
        transition: background-color 240ms ease-in-out;
        
        &:focus {
            background-color: rgba(255,255,255,0.75);
            border: none;
            outline: none;
        }
    }
    button {
        background-color: darkslateblue;
        border: none;
        border-radius: 12px;
        color: whitesmoke;
        font-size: 1em;
        margin-top: 24px;
        outline: none;
        padding: 16px 24px;
    }
`

export { JoinWrap, FormWrap, FormTitle, FormField }