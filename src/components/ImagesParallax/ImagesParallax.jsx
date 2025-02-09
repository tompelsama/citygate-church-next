import React, { useEffect, useState } from 'react'
import * as Scrollytelling from '@bsmnt/scrollytelling'
import "./ImagesParallax.scss"
import { randomIntFromInterval } from '@/helper'
import gsap from 'gsap'

export default function ImagesParallax() {
    
    const [isMobile, setIsMobile] = useState(false)

    const resizeHandler = () => {
        const windowWidth = window.innerWidth

        if(windowWidth <= 600) setIsMobile(true)
        else setIsMobile(false)

        gsap.matchMediaRefresh()
    }

    useEffect(() => {
        const windowWidth = window.innerWidth

        if(windowWidth <= 600) setIsMobile(true)
        else setIsMobile(false)

        window.addEventListener('resize', resizeHandler);

        // updateSize();
        return () => window.removeEventListener('resize', resizeHandler);
    }, [isMobile])

    return <>
        <Scrollytelling.Animation
              tween={{ start: 0, end: 25, to: { y: -100 } }}
        >
            <div className="image-parallax" style={{
                top: "2%",
                left: "2%",
                transform: !isMobile ? "scale(1.02)" : "scale(0.8)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${1}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 0, end: 25, to: { y: -200 } }}
        >
            <div className="image-parallax" style={{
                top: "10%",
                right: "2%",
                transform: !isMobile ? "scale(0.8)" : "scale(0.5)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${2}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 5, end: 50, to: { y: -200 } }}
        >
            <div className="image-parallax" style={{
                top: "13%",
                left: "9%",
                transform: !isMobile ? "scale(1)" : "scale(0.77)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${3}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 5, end: 40, to: { y: -300 } }}
        >
            <div className="image-parallax" style={{
                top: "20%",
                right: "12%",
                transform: !isMobile ? "scale(0.88)" : "scale(0.6)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${4}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 10, end: 50, to: { y: -400 } }}
        >
            <div className="image-parallax" style={{
                top: "32%",
                left: "2%",
                transform: !isMobile ? "scale(1.05)" : "scale(0.55)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 10, end: 50, to: { y: -400 } }}
        >
            <div className="image-parallax" style={{
                top: "38%",
                right: isMobile ? "-3%" : "8%",
                transform: !isMobile ? "scale(0.75)" : "scale(0.64)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 10, end: 50, to: { y: -400 } }}
        >
            <div className="image-parallax" style={{
                top: "44%",
                left: "-1%",
                transform: !isMobile ? "scale(0.9)" : "scale(0.58)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 10, end: 60, to: { y: -500 } }}
        >
            <div className="image-parallax" style={{
                top: "50%",
                right: "14%",
                transform: !isMobile ? "scale(0.0.85)" : "scale(0.5)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 20, end: 70, to: { y: -200 } }}
        >
            <div className="image-parallax" style={{
                top: "55%",
                left: "10%",
                transform: !isMobile ? "scale(1.02)" : "scale(0.7)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 50, end: 80, to: { y: -150 } }}
        >
            <div className="image-parallax" style={{
                top: "62%",
                right: "-1%",
                transform: !isMobile ? "scale(1.08)" : "scale(0.8)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 50, end: 100, to: { y: -250 } }}
        >
            <div className="image-parallax" style={{
                top: "70%",
                left: "5%",
                transform: !isMobile ? "scale(0.82)" : "scale(0.69)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 55, end: 95, to: { y: -250 } }}
        >
            <div className="image-parallax" style={{
                top: "80%",
                right: "12%",
                transform: !isMobile ? "scale(0.92)" : "scale(0.61)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 70, end: 100, to: { y: -200 } }}
        >
            <div className="image-parallax" style={{
                top: "88%",
                left: !isMobile ? "15%" : "2%",
                transform: !isMobile ? "scale(1.05)" : "scale(0.8)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 70, end: 100, to: { y: -250 } }}
        >
            <div className="image-parallax" style={{
                top: "95%",
                right: !isMobile ? "2%" : "-8%",
                transform: !isMobile ? "scale(0.97)" : "scale(0.68)"
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
    </>
}