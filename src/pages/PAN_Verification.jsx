import pan from '/image/pan.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import WhyPanVerificationCritical from '../components/Project/PAN_Verification/WhyPanVerificationCritical'

const PAN_Verification = () => {

    const sectionbgGradient = `text-white bg-[#0b122d] `
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
                mainbg={sectionbgGradient}
                mainHeading={heading}
                cardDesign={cardDesign}
            />
        </>
    )
}

export default PAN_Verification