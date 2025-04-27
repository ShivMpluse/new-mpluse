import styled from 'styled-components'
import blog from '../../../public/image/blog-hero.png'
import HeroSectionUI from '../UI/HeroSectionUI'

const BlogHero = () => {
    return (
        
        <HeroSectionUI
            heading={
                <>Powering Payments. Scaling<br className="hidden md:block" /> Businesses. With <span className='text-[#CF1C53]'>Mpluse.</span></>
            }
            description="Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world."
            buttonText="Get Started For Free"
            imageSrc={blog}
            imageAlt="Mpluse Debit Card"
            onButtonClick={() => console.log('Button clicked')}
        />
    )
}

export default BlogHero


const Section = styled.div `
    background-color: #eaf0f9d6;
`