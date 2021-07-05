import styled from 'styled-components'
import color from '../../0-theme/Color'
import media from '../../0-theme/Responsive/media'

const HeroWrap = styled.section`
    display: grid;
    grid-area: 1/1;
    height: 200px;
    margin: 0;
    /* margin-top: 50px; */
    width: 100%;

    ${media.tablet`
        height: 270px;
    `};
    ${media.tabletLG`
        height: 360px;
    `};
    ${media.desktop`
        height: 420px;
    `};

`
const HeroContent = styled.div`
    display: grid;
    grid-area: 1/1;
    place-items: center; // This centers the other elements inside the hero component
    position: relative;

`
const HeroBigText = styled.span`
    color: ${color.grey.offWhite};
    font-size: 9em;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    text-shadow: 0 3px 12px rgba(30,0,90,0.15);
`
const HeroHeading = styled.h1`
    color: ${color.primary.base};
    font-weight: 500;
    margin-bottom: 6px;
    max-width: 230px;
    text-align: center;

    ${media.phone`
        max-width: 600px;
    `};
`
const HeroCopyText = styled.p`
    color: ${color.primary.light};
    font-weight: 300;
    line-height: 135%;
    text-align: center;
`

export { HeroWrap, HeroContent, HeroBigText, HeroHeading, HeroCopyText }