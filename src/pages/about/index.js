import AboutHeader from '@/components/AboutHeader/AboutHeader'
import React from 'react'
import "./index.scss"

const About = () => {
	return <div className="about-section">
		<AboutHeader />
		<div className="about-info">
			<h2>Who we are</h2>
		</div>
	</div>
}

export default About