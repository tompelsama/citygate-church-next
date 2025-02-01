import AboutHeader from '@/components/AboutHeader/AboutHeader'
import React from 'react'
import * as Scrollytelling from '@bsmnt/scrollytelling'
import Image from 'next/image'
import "./index.scss"
import ImagesParallax from '@/components/ImagesParallax/ImagesParallax'
import VisionMission from '@/components/VisionMission/VisionMission'

const About = () => {
	return <div className="about-section">
		<AboutHeader />
		<div className="about-tagline">
			<h2>Who we are</h2>
		</div>
		<Scrollytelling.Root 
			start="top top" 
			end="bottom 10%"
			scrub={1}
		>
			<div className="about-info">
				<div className="about-info-container">
					<div className="about-info-gallery">
						{
							<ImagesParallax />
						}
					</div>
					<div className="about-info-notes">
						<div className="about-info-notes__container">
							<div className="about-info-note">
								<p>Citygate is a modern contemporary Christian church in affilation with Australian Christian Churches (ACC).</p>
							</div>
						</div>
						<div className="about-info-notes__container">
							<div className="about-info-note align-right">
								<p className="about-info-note__title">2004</p>
								<p>It was the beginning of <b>His</b> story in us. What was initially a small group of devoted young people in Jesus led to the birth of a church named The Generation for Christ. </p>
							</div>
						</div>
						<div className="about-info-notes__container">
							<div className="about-info-note">
								<p className="about-info-note__title">2007</p>
								<p>marked a new chapter of our ministry as we embraced the fundamental calling of a church as God's people called out from darkness into His light to stand at the gate and serve the people of the city. Citygate Fellowship Church was born.</p>
							</div>
						</div>
						<div className="about-info-notes__container">
							<div className="about-info-note align-right">
								<p className="about-info-note__title">2015</p>
								<p>set an important milestone as the church took a permanent home at Mascot and entered a new season of maturing, expanding, pioneering and growing.
								<br/><br/>	
								More ministries were born, more emerging leaders were raised, more LifeHouses were multiplied, more generations were served, and more souls were won.</p>
							</div>
						</div>
						<div className="about-info-notes__container">
							<div className="about-info-note">
								<p>There have been plenty of changes that occurred throughout the period and baton of leadership was passed on from one generation to the next, but the core of Citygate has never changed and never moved away from the fundamental of Jesus' own vision for His church. <br/><br/>Citygate has always been and will always be a simple church focusing on what matters most:</p>
							</div>
						</div>
						<div className="about-end-tagline">
							<p>LOVING GOD<br/>LOVING PEOPLE<br/>MAKING DISCIPLES</p>
						</div>
					</div>
				</div>
			</div>
		</Scrollytelling.Root>
		<VisionMission />
	</div>
}

export default About