import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "../Button/Button";
import "./Navbar.scss";

const navItems = ["About", "Ministry", "Lifehouse", "Events", "Give"];

const NavBar = () => {
  // Refs for audio and navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Manage audio playback
  useEffect(() => {
    
  }, []);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="navbar"
    >
      <header className="navbar-header">
        <nav className="navbar-container">
          {/* Logo and Product button */}
          <div className="navbar-logo">
            <img src="https://dq5pwpg1q8ru0.cloudfront.net/2022/01/29/13/43/21/f817795a-787c-4715-8dc4-93f1ec274c33/circle%20logo%20white.png" alt="logo" />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="navbar-menu">
            <div className="navbar-menu__list">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <Button
              id="contact-button"
              title="Contact"
              rightIcon={<TiLocationArrow />}
              containerClass="navbar-menu__contact"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
