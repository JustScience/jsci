import styled from 'styled-components'
import media from '../../Responsive/media'

const Container = styled.div`
    margin: 0 auto;
    padding: 24px;
    width: 100%;
    max-width: 960px;

    ${media.laptopSM`
        max-width: 1280px;
    `};
`

export default Container