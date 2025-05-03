import styled from 'styled-components'
import debit from '../../../public/image/mpluse-card.png'
import HeroSectionUI from '../UI/HeroSectionUI'

const HeroSection = () => {

    return (
        
        <HeroSectionUI
            heading={
                <>Empowering Ideas,<br className="hidden md:block" /> Building the Future <span className='text-[#CF1C53]'>Mpluse.</span></>
            }
            description="Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world."
            buttonText="Open Account"
            button_Text="Sign-Up"
            imageSrc={debit}
            imageAlt="Mpluse Debit Card"
            onButtonClick={() => console.log('Button clicked')}
        />
    )
}

export default HeroSection

const Section = styled.section`
    background-color: #eaf0f9d6;
`