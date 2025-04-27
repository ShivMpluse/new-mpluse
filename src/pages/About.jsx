import React from 'react'
import HeroSection from '../components/About/HeroSection'
import OurMission from '../components/About/OurMisson'
import Team from '../components/About/Team'
import OurStory from '../components/About/OurStory'
import AboutMpluse from '../components/About/AboutMpluse'
import OurStrength from '../components/About/OurStrength'

const About = () => {
    return (
        <>
            <HeroSection />
            <AboutMpluse />
            <OurMission />
            <Team />
            <OurStory />
            <OurStrength />
        </>
    )
}

export default About
