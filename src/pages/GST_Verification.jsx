import gst from '/image/GST-01.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import GstBenefits from '../components/Project/project-1/GstBenifits'
import GstStepsSection from '../components/Project/project-1/GstStepsSection'
import AdvantagesSection from '../components/Project/project-1/AdvantageSection'
import IndustriesSection from '../components/Project/project-1/IndustriesSection'
import ApiIntegrationComponent from '../components/Project/project-1/ApiIntegrationComponent'
import ComplianceBadges from '../components/Project/project-1/ComplianceBadges'
import StatsSection from '../components/Project/project-1/StatsSection'
import FaqSection from '../components/Project/project-1/FaqSection'
import Instantly from '../components/Project/project-1/Instantly'

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
            <IndustriesSection />
            <ApiIntegrationComponent />
            <ComplianceBadges />
            <StatsSection />
            <FaqSection />
            <Instantly />
        </>
        
    )
}

export default GST_Verification