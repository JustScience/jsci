import styled from 'styled-components'
import media from '../Responsive/media'
import formCTAImage from './../../images/form-cta-image.png'

const FormCTAWrap = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 24px;
`
const FormCTA = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
`
const FormCTAImage = styled.div`
    background-repeat: none;
    display: none;
    height: 300px;
    width: 300px;

    ${media.tablet`
        background-image: url(${formCTAImage});
        background-position: center;
        background-repeat: none;
        background-size: contain;
        display: flex;
    `};
`

export { FormCTAWrap, FormCTAImage, FormCTA }