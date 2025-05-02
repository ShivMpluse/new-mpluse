import pan from '/image/pan.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import WhyPanVerificationCritical from '../components/Project/PAN_Verification/WhyPanVerificationCritical'
import VerificationSteps from '../components/Project/PAN_Verification/Veification_Steps'
import PAN_API_Highlight from '../components/Project/PAN_Verification/PAN_API_Highlight'
import Perfect from '../components/Project/PAN_Verification/Perfect'
import EasyIntegration from '../components/Project/PAN_Verification/Easy_Integration'
import CertifiedSecure from '../components/Project/PAN_Verification/CertifiedSecure'

const PAN_Verification = () => {

    const mainbg = `text-white bg-[#0b122d] `
    const cardDesign = "shadow-pink-500/70 border border-pink-500/20 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-xl animation-all duration-500 hover:scale-105"
    const heading = "text-white"

    return (
        <>
            <HeroSectionUI
                heading={
                    <>Instantly Verify <br className="hidden md:block" /> PAN cards <span className='text-[#CF1C53]'></span></>
                }
                description="Real-time GSTIN verification for merchant onboarding, fraud prevention, and compliance."
                buttonText="Start Verify PAN"
                button_Text="Request A Demo"
                imageSrc={pan}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
            <WhyPanVerificationCritical 
                mainbg={mainbg}
                mainHeading={heading}
                cardDesign={cardDesign}
            />
            <VerificationSteps 
                mainbg={mainbg}
                cardDesign={cardDesign}
                heading_Text="Verification in 3 Simple Steps"
            />
            <PAN_API_Highlight 
                mainbg={mainbg}
                cardDesign={cardDesign}
            />
            <Perfect />
            <EasyIntegration />
            <CertifiedSecure />
        </>
    )
}

export default PAN_Verification