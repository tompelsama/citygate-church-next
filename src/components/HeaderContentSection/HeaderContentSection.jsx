import React, { useRef } from 'react'
import "./HeaderContentSection.scss"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeaderContentSection = ({titleStart, titleMid, titleEnd, img, imgSize, fontSize}) => {
    const headerImgRef = useRef()

    useGSAP(() => {
        gsap.set(headerImgRef.current, {
            clipPath: "polygon(0% 30%, 100% 0%, 100% 70%, 0% 100%)"
        });
        gsap.from(headerImgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".header-content",
                start: "top",
                end: "bottom 35%",
                scrub: true
            },
        });
    });

    return <div className="header-content">
        <div className="header-content-container">
            <h1 className="header-content__title" style={{
                fontSize: fontSize ? fontSize : "min(28rem, 32vw)"
            }}><span className="header-content__title--top">{titleStart}</span><span className="header-content__title--behind">{titleMid}</span><span className="header-content__title--top">{titleEnd}</span></h1>
            <img ref={headerImgRef} className="header-content__img" src={img} alt={titleStart+titleMid+titleEnd} style={{
                width: imgSize ? imgSize : '90%'
            }} />
        </div>
    </div>
}

export default HeaderContentSection