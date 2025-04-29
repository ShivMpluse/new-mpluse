import gst from '/image/GST-01.png'
import HeroSectionUI from '../../../components/UI/HeroSectionUI'
import GstBenefits from './GstBenifits'
import GstStepsSection from './GstStepsSection'
import AdvantagesSection from './AdvantageSection'

const GST_Verification = () => {
    return (
        <>
            <HeroSectionUI
                heading={
                    <>Empowering Ideas,<br className="hidden md:block" /> Building the Future <span className='text-[#CF1C53]'>Mpluse.</span></>
                }
                description="Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world."
                buttonText="Start Verify GST"
                button_Text="Request API Access"
                imageSrc={gst}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
            />
            <GstBenefits />
            <GstStepsSection />
            <AdvantagesSection />
        </>
        
    )
}

export default GST_Verification