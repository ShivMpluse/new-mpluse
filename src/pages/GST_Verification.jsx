import gst from '/image/GST-02.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import GstBenefits from '../components/Project/GST_Verification/GstBenifits'
import GstStepsSection from '../components/Project/GST_Verification/GstStepsSection'
import AdvantagesSection from '../components/Project/GST_Verification/AdvantageSection'
import IndustriesSection from '../components/Project/GST_Verification/IndustriesSection'
import ApiIntegrationComponent from '../components/Project/GST_Verification/ApiIntegrationComponent'
import ComplianceBadges from '../components/Project/GST_Verification/ComplianceBadges'
import StatsSection from '../components/Project/GST_Verification/StatsSection'
import FaqSection from '../components/Project/GST_Verification/FaqSection'
import Instantly from '../components/Project/GST_Verification/Instantly'

const GST_Verification = () => {

    const sectionbgGradient = `text-white bg-[#0b122d] `
    const cardDesign = "shadow-pink-500/70 border border-pink-500/20 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-xl animation-all duration-500 hover:scale-105"
    const heading = "text-white"

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
                sectionBackGroundColor='text-white bg-gradient-to-l from-[#0A1A31] to-[#0B1A32] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
            <GstBenefits
                sectionbg={sectionbgGradient} 
                cardPara="text-gray-300" 
                mainHeading="text-white"
            />
            <GstStepsSection 
                mainbg={sectionbgGradient}
                card={`${cardDesign} ${sectionbgGradient} `}
                cardTitle="text-white"
                cardDesign={cardDesign}
                heading_Text="Simple 3-Step Process"
            />
            <AdvantagesSection 
                mainbg={sectionbgGradient}
                mainHeading="text-white"
                cardDesign={cardDesign}
            />
            <IndustriesSection 
                mainbg={sectionbgGradient}
                mainHeading={heading}
                cardDesign={cardDesign}
            />
            <ApiIntegrationComponent 
                mainbg={sectionbgGradient}
                cardDesign={cardDesign}
                APIcard=" bg-[#0b0136]"
            />
            <ComplianceBadges 
                mainbg={sectionbgGradient}
                cardDesign={cardDesign}
            />
            <StatsSection 
                mainbg={sectionbgGradient}
                cardDesign={cardDesign}
            />
            <FaqSection 
                mainbg={sectionbgGradient}
            />
            <Instantly 
                mainHeading="Verify GST Numbers Instantly!"
                description="Join hundreds of businesses that trust Mpluse for secure, accurate, and lightning-fast document verification."
                btn1="get started today"           
                btn2="schedule demo"
            />
        </>
        
    )
}

export default GST_Verification

// -gradient-to-br from-[#0b122d] to-[#0b163d]