import React from 'react'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import verify from '/image/GST.png'
import GstBenefits from '../components/Project/GST_Verification/GstBenifits'

const Product = () => {
    return (
        <>
            <HeroSectionUI
                heading={
                    <>Empowering Ideas,<br className="hidden md:block" /> Building the Future <span className='text-[#CF1C53]'>Mpluse.</span></>
                }
                description="Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world."
                buttonText="Start Verify GST"
                button_Text="Request API Access"
                imageSrc={verify}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
            />
        </>
        
    )
}

export default Product