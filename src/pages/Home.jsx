import React from 'react'
import Header from '../components/layout/Header'
import HeroSection from '../components/Home/HeroSection'
import WhyMpluse from '../components/Home/WhyMpluse'
import Howwork from '../components/Home/Howwork'
import Works from '../components/Home/Works'
import Developer from '../components/Home/Developer'
import OurWork from '../components/Home/OurWork'

const Home = () => {
    return (
        <section className='bg-[#fff] text-black'>
            <HeroSection />
            <Howwork />
            <OurWork />
            <WhyMpluse />
            <Works />
            <Developer />
        </section>
    )
}

export default Home
// bg-color[#10294f]