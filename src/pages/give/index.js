import React, { useRef } from 'react'
import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.cjs.jsx';
import "./index.scss"
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GiveWays from '@/components/GiveWays/GiveWays';

gsap.registerPlugin(ScrollTrigger);

const Give = () => {

    const headerTitleRef = useRef()

    useGSAP(() => {
        gsap.set(headerTitleRef.current, {
            backgroundPositionY: "20%"
        });
        gsap.from(headerTitleRef.current, {
            backgroundPositionY: "50%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: headerTitleRef.current,
                start: "top",
                end: "bottom ",
                scrub: true
            },
        });
    });

    return <section className="give">
        <div className="give-header">
            <div className="give-header-container">
                <h1 ref={headerTitleRef} className="give-header__title">Giving</h1>
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
    </section>
}

export default Give