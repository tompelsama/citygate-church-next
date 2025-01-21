import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";

import "./Features.scss"
import { elementInViewport } from "@/helper";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const bentoVideoRef = useRef(null);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  useEffect(() => {
      // Scroll event listener
      document.addEventListener("scroll", (event) => {
        if(elementInViewport(bentoVideoRef.current)) {
          bentoVideoRef.current.play()
        }
        else {
          bentoVideoRef.current.pause()
        }
      })
  }, [])

  return (
    <div className="bento-card">
      <video
        ref={bentoVideoRef}
        src={src}
        loop
        muted
        playsInline
        preload="none"
        className="bento-card__video"
      />
      <div className="bento-card__content">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="bento-card__content__desc">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla bento-card__content__btn"
          >
            {/* Radial gradient hover effect */}
            <div
              className="bento-card__content__btn__effect"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="bento-card__content__btn__icon" />
            <p className="bento-card__content__btn__text">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

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
          isComingSoon
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
            isComingSoon
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
            isComingSoon
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
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 features-section__grid__four">
          <div className="features-section__grid__four__inside">
            <h1 className="bento-title special-font features-section__grid__four__inside__title">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="features-section__grid__four__inside__arrow" />
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
