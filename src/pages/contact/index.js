import React from 'react'
import "./index.scss"
import { FaEnvelope, FaMapPin, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return <section className="contact">
        <div className="container contact-container">
            <div className="contact__map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.6144789738173!2d151.1876083!3d-33.9253205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b10013768e11%3A0xc31cacc0b7d959fb!2sCitygate%20Fellowship%20Church!5e0!3m2!1sen!2sau!4v1738974474054!5m2!1sen!2sau" width="100%" height="350" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact__form">
                <div className="contact__form__title">
                    <h1>Get in <br />Touch With Us</h1>
                </div>
                <div className="contact__form__detail">
                    <div className="contact__form__detail__group--full">
                        <FaMapPin color='white'/>
                        <p>
                            Ground Floor, 15 Bourke Road, Mascot, NSW, 2020 Australia
                        </p>
                    </div>
                    <div className="contact__form__detail__group">
                        <FaEnvelope color='white'/>
                        <p>
                            <a href="mailto:info@citygate.org.au">info@citygate.org.au</a>
                        </p>
                    </div>
                    <div className="contact__form__detail__group">
                        <FaPhone color='white'/>
                        <p>
                            <a href="tel:0451998558">0451 998 558</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

export default Contact