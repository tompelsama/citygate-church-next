import React from 'react'
import * as Scrollytelling from '@bsmnt/scrollytelling'
import "./ImagesParallax.scss"

export default function ImagesParallax() {
    
    function randomIntFromInterval(min, max) { // min and max included 
        return (Math.random() * (max - min) + min).toFixed(4);
    }

    return <>
        <Scrollytelling.Animation
              tween={{ start: 0, end: 25, to: { y: -100 } }}
        >
            <div className="image-parallax" style={{
                top: "2%",
                left: "3rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                right: "2rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                left: "8rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                top: "28%",
                right: "10rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                top: "40%",
                left: "-1rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                right: "12rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                left: "8rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                top: "65%",
                right: "-1rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
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
                top: "72%",
                left: "3rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
        <Scrollytelling.Animation
              tween={{ start: 70, end: 90, to: { y: -250 } }}
        >
            <div className="image-parallax" style={{
                top: "90%",
                right: "10rem",
                transform: `scale(${randomIntFromInterval(0.7, 1.1)})`
            }}>
                <img
                    src={`https://picsum.photos/seed/2000/1000.webp?random=${5}`}
                    loading="lazy"
                />
            </div>
        </Scrollytelling.Animation>
    </>
}