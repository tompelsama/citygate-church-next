import AnimatedTitle from "../AnimatedTitle/AnimatedTitle";
import Button from "../Button/Button";

import "./Contact.scss"

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-section__container">
        <div className="contact-section__gallery-left">
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/22/01/48/03/87a08405-6091-46bc-83a7-21abd9ce8103/Live.jpg"
            clipClass="contact-section__gallery-left__clip-one"
          />
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/22/14/21/04/c30e8d0c-f73b-4e87-b3b1-e6d367f0c082/citygate-105.jpg"
            clipClass="contact-section__gallery-left__clip-two"
          />
        </div>

        <div className="contact-section__gallery-right">
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/24/02/59/18/d72af163-bd9f-4e25-a8ad-4405161bb340/89027625_10157594228263292_57432044984074240_n.jpg"
            clipClass="contact-section__gallery-right__clip-one"
          />
          <ImageClipBox
            src="https://dq5pwpg1q8ru0.cloudfront.net/2022/02/24/02/59/18/d72af163-bd9f-4e25-a8ad-4405161bb340/89027625_10157594228263292_57432044984074240_n.jpg"
            clipClass="contact-section__gallery-right__clip-two"
          />
        </div>

        <div className="contact-section__title">
          <p className="contact-section__title__text">
            Join Citygate Fellowship Church
          </p>

          <AnimatedTitle
            title="let&#39;s build a <br /> new era of <br /> faith together"
            className="special-font contact-section__title__animated"
          />

          <Button title="contact us" containerClass="contact-section__title__btn" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
