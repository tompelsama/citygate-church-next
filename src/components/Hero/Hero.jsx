import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic'

import Button from "../Button/Button";
import VideoPreview from "../VideoPreview/VideoPreview";
import "./Hero.scss"

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [clipPathCross, setClipPathCross] = useState("");

  // const [loading, setLoading] = useState(true);
  // const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const backgroundVidRef = useRef(null);
  const textRoundRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const handleMiniVdMouseEnter = () => {
    textRoundRef.current.style.opacity = 0
  }

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { 
          visibility: "visible",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
        });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)",
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
          onComplete: () => {
            backgroundVidRef.current.src = getVideoSrc(currentIndex)
            backgroundVidRef.current.load()
          }
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: clipPathCross,
      // borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 26%, 0% 0%, 35% 0%, 65% 0%, 100% 0%, 100% 25%, 100% 50%, 100% 75%, 100% 100%, 0% 100%, 0% 75%, 0% 52%)",
      // borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center 40%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, {
    dependencies: [clipPathCross],
    revertOnUpdate: true,
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const resizeHandler = () => {
    console.log('asd')
    const windowWidth = window.innerWidth

    if(windowWidth <= 600) setClipPathCross("polygon(20% 65%, 40% 65%, 40% 50%, 60% 50%, 60% 65%, 80% 65%, 80% 75%, 60% 75%, 60% 100%, 40% 100%, 40% 75%, 20% 75%)")
    else if(windowWidth >= 1300) setClipPathCross("polygon(35% 60%, 45% 60%, 45% 45%, 55% 45%, 55% 60%, 65% 60%, 65% 73%, 55% 73%, 55% 100%, 45% 100%, 45% 73%, 35% 73%)")
    else setClipPathCross("polygon(35% 65%, 45% 65%, 45% 50%, 55% 50%, 55% 65%, 65% 65%, 65% 75%, 55% 75%, 55% 100%, 45% 100%, 45% 75%, 35% 75%)")
  }

  useEffect(() => {
    if (textRoundRef.current) {
      textRoundRef.current.innerHTML = textRoundRef.current.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
      )
      .join("");
    }

    if (backgroundVidRef.current) {
      backgroundVidRef.current.src = getVideoSrc(currentIndex)
      backgroundVidRef.current.load()
    }

    window.addEventListener('resize', resizeHandler);
    resizeHandler()

    return () => window.removeEventListener('resize', resizeHandler);
  }, [])

  return (
    <div className="hero-section">
      

      <div
        id="video-frame"
        className="hero-section__video-frame"
      >
        <div className="cta-text-round">
            <p ref={textRoundRef}>Click here - Click here - Click here -</p>
        </div>
        <div>
          <div className="hero-section__video-frame__content mask-clip-path-diamond">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                onMouseOver={handleMiniVdMouseEnter}
                className="hero-section__video-frame__video-preview"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  playsInline
                  muted
                  id="current-video"
                />
              </div>
            </VideoPreview>
          </div>
          {/* <div class="cta-text-container">
            
          </div> */}

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            playsInline
            id="next-video"
            className="absolute-center hero-section__video-frame__video-one"
          />
          <video
            ref={backgroundVidRef}
            // src={getVideoSrc(
            //   currentIndex === totalVideos - 1 ? 1 : currentIndex
            // )}
            autoPlay
            loop
            muted
            playsInline
            className="hero-section__video-frame__video-two"
          />
        </div>

        <h1 className="special-font hero-heading hero-section__title">
          L<b>I</b>FE
        </h1>

        <div className="hero-section__text">
          <div className="hero-section__text-container">
            <h1 className="special-font hero-heading hero-section__text-title">
              redefi<b>n</b>e
            </h1>

            <p className="hero-section__text-blurb">
            A place to connect, grow, and<br /> serve in faith.
            </p>

            {/* <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            /> */}
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading hero-section__title hero-section__title--black">
        L<b>I</b>FE
      </h1>
    </div>
  );
};

export default Hero;
