import React, { useRef, useEffect } from 'react'
import { HeroWrap } from './style'
// import { HeroWrap, HeroBigText, HeroHeading, HeroCopyText } from './style'
import { gsap } from "gsap";

export default function Hero() {
    const heroRef = useRef(null)

    // useEffect(() => {
    //     // console.log(heroRef.current)

    //     gsap.from(heroRef.current,{
    //         duration: 0.36, 
    //         autoAlpha: 0,
    //         scale: 0.9, 
    //         delay: 0.1
    //     })

    // }, [])

    return (
        <HeroWrap ref={heroRef}>
            {/* <HeroBigText>JSci</HeroBigText>
            <HeroHeading>Music Production Tools &amp; Training</HeroHeading>
            <HeroCopyText>Put some other fancy text here yo</HeroCopyText> */}
        </HeroWrap>
    )
}
