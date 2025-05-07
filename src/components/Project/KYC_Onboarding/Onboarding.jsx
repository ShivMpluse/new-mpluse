import kyc from '/image/kyc.png'
import HeroSectionUI from '../../UI/HeroSectionUI'

const Onboarding = () => {
    return (
        <>
            <HeroSectionUI
                heading={
                    <>Seamless KYC & Onboarding,<br className="hidden md:block" /> Built for Compliance<span className='text-[#CF1C53]'></span></>
                }
                description="Automate user verification, reduce fraud, and stay RBI-compliant with Mpluse's onboarding suite"
                buttonText="schedule a demo"
                button_Text="learn more"
                imageSrc={kyc}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
        </>
    )
}

export default Onboarding