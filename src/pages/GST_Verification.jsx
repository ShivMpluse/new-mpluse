import gst from '/image/GST-02.png'
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
                    <>Instantly Verify GST <br className="hidden md:block" /> Numbers Securely. <span className='text-[#CF1C53]'></span></>
                }
                description="Real-time GSTIN verification for merchant onboarding, fraud prevention, and compliance."
                buttonText="Start Verify GST"
                button_Text="Request API Access"
                imageSrc={gst}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
            <GstBenefits 
                cardbg="white"
                cardPara="text-gary-500"
            />
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