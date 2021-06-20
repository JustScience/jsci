import styled from 'styled-components'
import color from './../Theme/Color'
import media from './../Responsive/media'
import heroBG from './../../images/hero-bg.png'

const HeroWrap = styled.section`
    align-items: center;
    background-image: url(${heroBG});
    background-repeat: none;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    margin: 0;
    padding: 24px;
    width: 100%;

    ${media.tablet`
        height: 420px;
    `};
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

export { HeroWrap, HeroBigText, HeroHeading, HeroCopyText }