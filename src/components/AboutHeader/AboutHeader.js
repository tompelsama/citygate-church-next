import React, { useRef } from 'react'
import './AboutHeader.scss'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHeader = () => {

    const heroImgRef = useRef(null)

    useGSAP(() => {
        gsap.set(heroImgRef.current, {
            y: 200
        });
        gsap.from(heroImgRef.current, {
            y: 0,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#aboutHeader",
                start: "center 50%",
                end: "bottom",
                scrub: true
            },
        });
    });

    return <div id="aboutHeader" className="about-header">
        <div className="about-header__hero">
            <img ref={heroImgRef} src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/22/03/07/18/62350a78-af46-47ab-b2a4-6e15b00a04a5/c-13.jpg" alt="" />
        </div>
        <div className="about-header-container">
            <h1><span className="header-top">Citygate Fellowship Church is more than a church</span> <span className="header-bot">It’s a living testimony of God’s work through His people</span></h1>
        </div>
    </div>
}

export default AboutHeader