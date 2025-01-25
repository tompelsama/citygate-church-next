import AboutHeader from '@/components/AboutHeader/AboutHeader'
import React from 'react'
import * as Scrollytelling from '@bsmnt/scrollytelling'
import Image from 'next/image'
import "./index.scss"
import ImagesParallax from '@/components/ImagesParallax/ImagesParallax'

const About = () => {
	return <div className="about-section">
		<AboutHeader />
		<div className="about-tagline">
			<h2>Who we are</h2>
		</div>
		<Scrollytelling.Root 
			start="top top" 
			end="bottom center"
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

						</div>
						<div className="about-info-notes__container">

						</div>
						<div className="about-info-notes__container">

						</div>
						<div className="about-info-notes__container">

						</div>
						<div className="about-info-notes__container">

						</div>
					</div>
				</div>
			</div>
		</Scrollytelling.Root>
	</div>
}

export default About