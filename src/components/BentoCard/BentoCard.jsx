import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from "react-icons/ti";
import "./BentoCard.scss"
import { elementInViewport } from '@/helper';

const BentoCard = ({ src, title, description, url, target = "_self" }) => {
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

  const handleMouseClick = () => {
    window.open(url, target)
  }

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
        <div className="bento-card__content__inside">
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="bento-card__content__desc">{description}</p>
          )}
        </div>

        {url && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleMouseClick}
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
            <p className="bento-card__content__btn__text">Discover more</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoCard