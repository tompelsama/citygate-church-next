"use client"

import React, { useEffect, useRef, useState } from 'react'
import "./InvertedRevealerScroll.scss"
import { elementInViewport } from '@/helper';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InvertedRevealerScroll = ({endElementClass = '.footer-section'}) => {

    const invertedRevealerRef = useRef(null)
    const [isMobile, setIsMobile] = useState()

    const resizeHandler = () => {
        let windowSize = window.innerWidth

        if(windowSize < 768) setIsMobile(true)
        else setIsMobile(false)

        gsap.matchMediaRefresh()
        ScrollTrigger.refresh(true)
    }

    useGSAP(
        () => {
            let mm = gsap.matchMedia();

            let pictures = document.querySelectorAll('.inverted-revealer__img__pic')

            // Desktop
            mm.add("(min-width: 768px)", () => {

                pictures.forEach((pic, index) => {

                    if(index > 0 && index < pictures.length - 1) {
                        // console.log(index)
                        gsap.from(pic, { 
                            clipPath: "inset(0% 0 0 0)"
                        });
                        gsap.to(pic, {
                            clipPath: "inset(100% 0 0 0)", 
                            ease: "power1.inOut",
                            scrollTrigger: {
                                trigger: pic,
                                start: "top -50%",
                                end: "bottom bottom",
                                scrub: 1,
                                // markers: true
                            },
                        });
                    }
                    else if(index === 0) {
                        gsap.from(pic, { 
                            clipPath: "inset(0% 0 0 0)"
                        });
                        gsap.to(pic, {
                            clipPath: "inset(100% 0 0 0)", 
                            ease: "power1.inOut",
                            scrollTrigger: {
                                trigger: pic,
                                start: "top -50%",
                                end: "bottom bottom",
                                scrub: 1
                            },
                        });
                    }
                    else {
                        console.log(index)
                        gsap.from(pic, { 
                            clipPath: "inset(0 0 0 0)"
                        });
                        gsap.to(pic, {
                            clipPath: "inset(100% 0 0 0)", 
                            ease: "power1.inOut",
                            scrollTrigger: {
                                trigger: pic,
                                start: "top -50%",
                                end: "50% bottom",
                                scrub: 1
                            },
                        });
                    }
                })
        
            });
        }
    );

    useEffect(() => {
        
        let images = document.querySelectorAll('.inverted-revealer__img')
        const endSection = document.querySelector(endElementClass)

        function imagePositionHandler() {
            let elementReachTopDistance = invertedRevealerRef.current.offsetTop - document.documentElement.scrollTop;
            let footerReveal = elementInViewport(endSection)

            console.log(footerReveal)

            if(!isMobile) {
                if (elementReachTopDistance <= 0 && images && !footerReveal) {
                    images.forEach((image) => {
                        image.style.position = "fixed"
                    })
                }
                else {
                    images.forEach((image) => {
                        image.style.position = "absolute"
                    })
                }
            }
            else {
                images.forEach((image) => {
                    image.style.position = "sticky"
                })
            }
        }

        window.addEventListener('scroll', imagePositionHandler)

        resizeHandler()
        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, [isMobile])
    
    return <div ref={invertedRevealerRef} className="inverted-revealer">
        <article className="inverted-revealer-group" style={{"--index": 0}}>
            <div className="inverted-revealer__img">
                <img className="inverted-revealer__img__pic" src="https://picsum.photos/1920/1080?random=1" alt="" />
            </div>
            <div className="inverted-revealer__info">
                <h3>Worship</h3>
                <p>Citygate Worship fulfils the prophetic calling to deliver the resounding voice of God through a universal channel of music, song, art performance and prayer, with the aim of leading His people into a divine and intimate encounter with God where He is glorified and magnified.</p>
            </div>
        </article>
        <article className="inverted-revealer-group" style={{"--index": 1}}>
            <div className="inverted-revealer__img">
                <img className="inverted-revealer__img__pic" src="https://picsum.photos/1920/1080?random=2" alt="" />
            </div>
            <div className="inverted-revealer__info">
                <h3>Kids</h3>
                <p>We believe that the calling to make disciple starts from home, meaning that children are the very first human beings to be discipled, and parents are the main disciple-makers to their children.</p>
                <p>Citygate Kids seeks to actively partner with parents in discipling their children, understanding and loving them as God's unique creations. Through a community of parents and kids, Citygate Kids creates a shared space where fellow parents and kids can walk their journey of growth together.</p>
            </div>
        </article>
        <article className="inverted-revealer-group" style={{"--index": 2}}>
            <div className="inverted-revealer__img">
                <img className="inverted-revealer__img__pic" src="https://picsum.photos/1920/1080?random=3" alt="" />
            </div>
            <div className="inverted-revealer__info">
                <h3>Service</h3>
                <p>It is always a pleasure to welcome anyone to church and Citygate Service is honoured to be the first to greet people, to open our gate for them to experience Jesus.</p>
            </div>
        </article>
        <article className="inverted-revealer-group" style={{"--index": 3}}>
            <div className="inverted-revealer__img">
                <img className="inverted-revealer__img__pic" src="https://picsum.photos/1920/1080?random=4" alt="" />
            </div>
            <div className="inverted-revealer__info">
                <h3>Creative</h3>
                <p>We believe in God as Creator of all things and that is why we believe in the power of creativity embedded by God in every person.</p>
                <p>Citygate Creative serves as a messenger of Jesus Christ, reinforcing the Gospel and presenting the Good News in a divinely creative way for the world to experience God. Through technology, digital and media, Citygate Creative produces Gospel-centred contents directing people back to their Creator.</p>
            </div>
        </article>
    </div>
}

export default InvertedRevealerScroll