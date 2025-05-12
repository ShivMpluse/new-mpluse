import ocr from '/image/ocr.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import Verification from '../components/Project/OCR_Verification/Verification'
import Documents from '../components/Project/OCR_Verification/Documents'
import Verification_Steps from '../components/Project/OCR_Verification/Verification_Staps'
import Key_Features from '../components/Project/OCR_Verification/Key_Features'
import Compliance from '../components/Project/OCR_Verification/Cpmpliance'
import Industry from '../components/Project/OCR_Verification/Industry'
import Instantly from '../components/Project/GST_Verification/Instantly'

const OCR_Verification = () => {
    return (
        <>
            <HeroSectionUI
                heading={
                    <>OCR Verification API – Extract<br className="hidden md:block" /> Data Instantly <span className='text-[#CF1C53]'></span></>
                }
                description="Scan identity documents like PAN, Aadhaar, Voter ID and automate customer onboarding with Mpluse OCR APIs."
                buttonText="request demo"
                button_Text="start integration"
                imageSrc={ocr}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
                imgStyle="max-h-[300px]"
            />
            <Verification />
            <Documents />
            <Verification_Steps />
            <Key_Features />
            <Compliance />
            <Industry />
            <Instantly 
                mainHeading="Accelerate KYC with Mpluse OCR Verification"
                description="Join hundreds of businesses that trust Mpluse for secure, accurate, and lightning-fast document verification."
                btn1="get started today"           
                btn2="schedule demo"    
                />
        </>
    )
}

export default OCR_Verification