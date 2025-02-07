import React, { useRef } from 'react'
import "./index.scss"
import HeaderContentSection from '@/components/HeaderContentSection/HeaderContentSection'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import TextRevealAnimation from '@/components/TextRevealAnimation/TextRevealAnimation';
import InvertedRevealerScroll from '@/components/InvertedRevealerScroll/InvertedRevealerScroll';
import Contact from '@/components/Contact/Contact';

gsap.registerPlugin(ScrollTrigger);

const Ministries = () => {

	const imageRevealRef = useRef()

	useGSAP(() => {
		gsap.set(imageRevealRef.current, {
			clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
		});
		gsap.from(imageRevealRef.current, {
			clipPath: "polygon(55% 0, 100% -60%, 60% 100%, 25% 60%)",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: imageRevealRef.current,
				start: "top 50%",
				end: "bottom center",
				scrub: true
			},
		});
	});

	return <div className="ministry">
		<HeaderContentSection 
			titleStart={"Min"} 
			titleMid={"ist"} 
			titleEnd={"ries"} 
			img={"/img/ministry-header.jpg"}
			imgSize={"50%"}
			fontSize={"min(28rem, 15vw)"}
		/>
		<div className="image-reveal">
			<div className="container">
				<div ref={imageRevealRef}>
					<img src="/img/ministry-mid.jpg" alt="Ministry" />
				</div>
			</div>
		</div>
		<div className="ministry-intro">
			<TextRevealAnimation text={"We believe that every person is uniquely created, gifted, and called by God to accomplish the good works He has prepared in advance. We therefore, are excited to have you join us in serving and making a difference."} />

			<TextRevealAnimation text={"Citygate is never built by one mighty person, but by one mighty team made up by countless people with diverse talents, building what is eternal upon the one and only foundation, Jesus Christ."} align={"right"} />
		</div>

		<InvertedRevealerScroll endElementClass={'.contact-section'} />

		<Contact cta={"Check out our front-line teams"} animationText='join hands <br /> with us in this <br />movement' btnText="register here" url={"https://citygate.elvanto.com.au/form/aafeb42f-6ddb-49cf-bb11-8623e4c821ec"} urlTarget='_blank' />
	</div>
}

export default Ministries