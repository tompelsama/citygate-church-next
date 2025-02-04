import React, { useRef } from 'react'
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import "./index.scss"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GiveWays from '@/components/GiveWays/GiveWays';
import GiveMission from '@/components/GiveMission/GiveMission';

gsap.registerPlugin(ScrollTrigger);

const Give = () => {

    const headerImgRef = useRef()

    useGSAP(() => {
        gsap.set(headerImgRef.current, {
            clipPath: "polygon(0% 30%, 100% 0%, 100% 70%, 0% 100%)"
        });
        gsap.from(headerImgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".give-header",
                start: "top",
                end: "bottom 35%",
                scrub: true
            },
        });
    });

    return <section className="give">
        <div className="give-header">
            <div className="give-header-container">
                <h1 className="give-header__title"><span className="give-header__title--top">Gi</span><span className="give-header__title--behind">v</span><span className="give-header__title--top">ing</span></h1>
                <img ref={headerImgRef} className="give-header__img" src="/img/give-header.jpg" alt="give" />
            </div>
        </div>
        <div className="give-scrolly">
            <div className="give-scrolly-container">
                <ScrollyVideo src="/videos/give.mp4" />
                <div className="give-scrolly-note">
                    <p>Giving is the nature of God. For He so loved the world that He gave His one and only Son, Jesus Christ, and by His grace, Jesus has taken our place, given up His own life as a perfect, unblemished sacrifice, so we could gain life and freedom.</p>
                </div>
                <div className="give-scrolly-note">
                    <p>Having been given so much, we believe that it would only be reasonable for us to live in generosity and freedom through a lifestyle of giving. We give not to earn God's favour and we give not because He needs any of our resources. In fact, everything we have is technically His - He is the Owner, we are the steward.</p>
                </div>
                <div className="give-scrolly-note">
                    <p>We give because we honour the privilege of being in co-partnership with God through His church in spreading the Gospel, touching lives of others, investing and building toward what is eternal.</p>
                </div>
            </div>
        </div>
        <GiveWays />
        <GiveMission />
    </section>
}

export default Give