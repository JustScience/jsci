import { createGlobalStyle } from 'styled-components'
import color from './Color'
import text from './Typography'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        line-height: 100%;
        margin: 0;
        padding: 0;
    }

    html,body {
        background-color: ${color.grey.light};
        color: ${text.color.default};
        font-family: -apple-system, Arial, Helvetica, sans-serif;
        font-size: 1em;
        font-weight:300;
        height: 100%;
        letter-spacing: 0.1em;
        min-height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100vw;
        min-width: 100vw;
    }

    a:any-link {text-decoration:none;}
    button {border:none;outline:none;}

    h1,h2,h3,h4,h5,h6 {font-weight:600;line-height:120%;}
    p {font-weight:300;line-height:120%;}
`

export default GlobalStyle