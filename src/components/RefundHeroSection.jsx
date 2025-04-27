import React from 'react'
import styled from 'styled-components'
import refund from '../../public/image/blog-hero.png'
import HeroSectionUI from './UI/HeroSectionUI'

const RefundHeroSection = () => {
    return (
        <HeroSectionUI
            heading={
                <> Policy clarity. Customer <br className="hidden md:block" /> trust. The Mpluse way <span className='text-[#CF1C53]'>Mpluse.</span></>
            }
            description="Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world."
            buttonText="Get Started For Free"
            imageSrc={refund}
            imageAlt="Mpluse Debit Card"
            onButtonClick={() => console.log('Button clicked')}
        />
    )
}

export default RefundHeroSection

const Section = styled.div `
    background-color: #eaf0f9d6;
`