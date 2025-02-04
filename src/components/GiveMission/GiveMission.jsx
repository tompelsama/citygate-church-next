import React from 'react'
import "./GiveMission.scss"
import BentoTilt from '../BentoTilt/BentoTilt'
import BentoCard from '../BentoCard/BentoCard'

const GiveMission = () => {
    return <div className="give-mission">
        <div className="container give-mission-container">
            <div className="give-mission__header">
                <h2>Mission in Action</h2>
                <p>We believe church is called to be the extension of Jesus' hands and feet to touch those in need and resource them for a brighter future. For that reason, Citygate has partnered with organizations that are better equipped to make direct impact.</p>
            </div>
            <div className="give-mission__grid">
                <BentoTilt className="bento-tilt_1 give-mission__grid__one">
                    <BentoCard
                    src="videos/feature-2.mp4"
                    title={
                        <>
                        Tangan Pengharapan
                        </>
                    }
                    description="Through partnership with Yayasan Tangan Pengharapan, Citygate has been sponsoring one feeding and learning centre at Yapan Naur, Papua, providing access for 43 kids to education and nutritious food."
                    isComingSoon
                    />
                </BentoTilt>
        
                <BentoTilt className="bento-tilt_1 give-mission__grid__two">
                    <BentoCard
                    src="videos/feature-3.mp4"
                    title={
                        <>
                        Sekolah Lentera Kasih
                        </>
                    }
                    description="Located in Kampung Melayu, SLK aims to provide students from lower-class families continuous access to basic education. Citygate has taken part in supporting the school through direct subsidy for teachers' salary and ongoing operational costs."
                    isComingSoon
                    />
                </BentoTilt>
            </div>
        </div>
    </div>
}

export default GiveMission