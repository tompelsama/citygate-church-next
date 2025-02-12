import { useRef, useEffect } from "react";
import { BsHourglassSplit } from "react-icons/bs";

import "./Features.scss"
import { elementInViewport } from "@/helper";
import BentoCard from "../BentoCard/BentoCard";
import BentoTilt from "../BentoTilt/BentoTilt";

const Features = () => {

  const videoRef = useRef(null);
  
  useEffect(() => {
      // Scroll event listener
      document.addEventListener("scroll", (event) => {
        if(elementInViewport(videoRef.current)) {
          videoRef.current.play()
        }
        else {
          videoRef.current.pause()
        }
      })
  }, [])
 
  return <section className="features-section">
    <div className="features-section__container">
      <div className="features-section__intro">
        <p className="font-aileron features-section__intro__title">
          Our Weekly Gatherings
        </p>
        <p className="font-aileron features-section__intro__blurb">
          Join us for uplifting and meaningful moments at Citygate Church. Each week, we come together to worship, learn, and grow in faith.
        </p>
      </div>

      <BentoTilt className="features-section__head-col">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              Sunday Service
            </>
          }
          description="Experience inspiring messages, heartfelt worship, and a welcoming atmosphere for all."
        />
      </BentoTilt>

      <div className="features-section__grid">
        <BentoTilt className="bento-tilt_1 features-section__grid__one">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Sunday School
              </>
            }
            description="Teaching kids about God's love in fun and engaging ways."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 features-section__grid__two">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                Lifehouse
              </>
            }
            description="We create a welcoming space where everyone can connect, worship, and experience life-changing encounters with God."
            url={"https://citygate.elvanto.com.au/groups/embed#v?limit=0"}
            target="_blank"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 features-section__grid__three">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Women's Ministry
              </>
            }
            description="Empowering women to live boldly in their faith."
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 features-section__grid__four">
          <div className="features-section__grid__four__inside">
            <h1 className="bento-title special-font features-section__grid__four__inside__title">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <BsHourglassSplit className="features-section__grid__four__inside__arrow" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 features-section__grid__five">
          <video
            ref={videoRef}
            src="videos/feature-5.mp4"
            loop
            muted
            playsInline
            preload="none"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
};

export default Features;
