import React from 'react'
import Header from '../components/layout/Header'
import HeroSection from '../components/Home/HeroSection'
import WhyMpluse from '../components/Home/WhyMpluse'
import Solution from '../components/Home/Solution'
import Howwork from '../components/Home/Howwork'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <WhyMpluse />
            <Solution />
            <Howwork />
            <Footer />
        </>
    )
}

export default Home
