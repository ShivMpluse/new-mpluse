import React from 'react'
import HeroSection from '../components/About/HeroSection'
import OurMission from '../components/About/OurMisson'
import Team from '../components/About/Team'
import OurStory from '../components/About/OurStory'

const About = () => {
    return (
        <section className='px-4 max-w-[1200px] mx-auto  mt-18'>
            <HeroSection />
            <OurMission />
            <Team />
            <OurStory />
        </section>
    )
}

export default About
