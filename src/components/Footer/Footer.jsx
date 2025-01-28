import { FaYoutube, FaInstagram, FaFacebook, FaSpotify, FaMobile } from "react-icons/fa";
import "./Footer.scss"

const socialLinks = [
  { href: "https://www.instagram.com/citygate.au/", icon: <FaInstagram /> },
  { href: "https://www.youtube.com/c/CitygateFellowshipChurch", icon: <FaYoutube /> },
  { href: "https://www.facebook.com/citygatefellowship/", icon: <FaFacebook /> },
  { href: "https://open.spotify.com/artist/6TPbJ773kpCHNXJEbesPmF?si=_2weBKfjRoqx1EOlE167JQ", icon: <FaSpotify /> },
  { href: "https://tithely.app.link/citygate-fellowship-church", icon: <FaMobile /> },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section__container">
        <p className="footer-section__copy">
          ©Citygate Fellowship Church {new Date().getFullYear()}. All rights reserved
        </p>

        <div className="footer-section__socials">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              className="footer-section__socials__link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
