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

  // const [loading, setLoading] = useState(true);
  // const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);
  const textRoundRef = useRef(null);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  const handleMiniVdMouseEnter = () => {
    textRoundRef.current.style.opacity = 0
  }

  // const handleMiniVdMouseLeave = () => {
  //   textRoundRef.current.style.opacity = 0.5
  // }

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
      clipPath: "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
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
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useEffect(() => {
    if (textRoundRef.current) {
      textRoundRef.current.innerHTML = textRoundRef.current.innerText
      .split("")
      .map(
        (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
      )
      .join("");
    }
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
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
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
