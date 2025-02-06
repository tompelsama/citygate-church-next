import React, { useEffect, useRef } from 'react'
import "./InvertedRevealerScroll.scss"
import { elementInViewport } from '@/helper';

const InvertedRevealerScroll = () => {

    const invertedRevealerRef = useRef(null)

    useEffect(() => {
        let images = document.querySelectorAll('.article__img')
        const footerSection = document.querySelector('.footer-section')

        function imagePositionHandler() {
            let elementReachTopDistance = invertedRevealerRef.current.offsetTop - document.documentElement.scrollTop;
            let footerReveal = elementInViewport(footerSection)       

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

        window.addEventListener('scroll', imagePositionHandler)
    }, [])
    
    return <div ref={invertedRevealerRef} className="inverted-revealer">
        <article style={{"--index": 0}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=1" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>CSS Scroll Animations</h2>
                <p>Check out this rad demo</p>
                <a href="#">Follow</a>
            </div>
        </article>
        <article style={{"--index": 1}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=2" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Animate on scroll</h2>
                <p>Works with media queries too</p>
                <a href="#">Check it out</a>
            </div>
        </article>
        <article style={{"--index": 2}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=3" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Parallax Effects</h2>
                <p>Tweak your timings</p>
                <a href="#">Get Styling</a>
            </div>
        </article>
        <article style={{"--index": 3}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=4" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Drive Keyframes</h2>
                <p>CSS alone and...</p>
                <a href="#">No JavaScript</a>
            </div>
        </article>
        <article style={{"--index": 4}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=5" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Extra Slides</h2>
                <p>More content because...</p>
                <a href="#">CSS to the moon</a>
            </div>
        </article>
        <article style={{"--index": 5}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=6" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Resize Window</h2>
                <p>Try resizing the window</p>
                <a href="#">Resize</a>
            </div>
        </article>
        <article style={{"--index": 6}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=7" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Browser support</h2>
                <p>You'll need to be in Chrome</p>
                <a href="#">Do it</a>
            </div>
        </article>
        <article style={{"--index": 7}}>
            <div className="article__img">
                <img src="https://picsum.photos/1920/1080?random=8" alt="" loading='lazy' />
            </div>
            <div className="article__info">
                <h2>Your idea</h2>
                <p>What would you make?</p>
                <a href="#">Code</a>
            </div>
        </article>
    </div>
}

export default InvertedRevealerScroll