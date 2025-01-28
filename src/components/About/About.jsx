import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import "./About.scss"

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
  normalizeScroll: true
})

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline();

    let mm = gsap.matchMedia();
    // Desktop
    mm.add("(min-width: 768px)", () => {

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100dvh",
        borderRadius: 0,
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=700 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

    });

    // Mobile
    mm.add("(max-width: 767px)", () => {

      clipAnimation.to(".mask-clip-path", {
        width: "100vw",
        height: "100dvh",
        borderRadius: 0,
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "bottom center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

    });

    // clipAnimation.to(".mask-clip-path", {
    //   width: "100vw",
    //   height: "100dvh",
    //   borderRadius: 0,
    // }, {
    //   scrollTrigger: {
    //     trigger: "#clip",
    //     start: "center center",
    //     end: "+=700 center",
    //     scrub: 0.5,
    //     pin: true,
    //     pinSpacing: true,
    //   },
    // });
  });

  return (
    <div id="about" className="about-section">
      <div className="about-section-container">
        <p className="about-section-subtitle">
          Welcome to Citygate Church
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the God's <br /> Love at <b>C</b>itygate"
          containerClass="about-section-title"
        />

        <div className="about-section-subtext">
          <p>We are a community committed to worship, teaching, and serving.</p>
          <p className="about-section-subtext__grey">
            Discover our ministries and become part of a family of believers growing together in Christ.
          </p>
        </div>
      </div>

      <div className="about-section-focus" id="clip">
        <div className="mask-clip-path about-section-focus__image">
          <img
            src="img/about.webp"
            alt="Background"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
