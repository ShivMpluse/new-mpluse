import React from 'react'
import upi from '/image/upi-solution.png'
import HeroSectionUI from '../components/UI/HeroSectionUI'
import Why from '../components/Project/UPI_Payment_Solution/Why'
import UPI_Steps from '../components/Project/UPI_Payment_Solution/UPI_Steps'
import UpiAdvantages from '../components/Project/UPI_Payment_Solution/UpiAdvantages'
import BestSuited from '../components/Project/UPI_Payment_Solution/BestSuited'
// import ApiIntegration from '../components/Project/UPI_Payment_Solution/ApiIntegration'
import CertifiedAndSecure from '../components/Project/UPI_Payment_Solution/CertifiedSecurity'
import Trusted from '../components/Project/UPI_Payment_Solution/Trusted'
import FAQ from '../components/Project/UPI_Payment_Solution/FAQ'
import Instantly from '../components/Project/GST_Verification/Instantly'

const UPI_Payment_Solution = () => {
    return (
        <>
            <HeroSectionUI
                heading={
                    <>Seamlessly Collect <br className="hidden md:block" /> UPI Payments</>
                }
                description="Real-time UPI collections with instant settlement, secure encryption, and full compliance with regulatory standards."
                buttonText="start collecting UPI"
                button_Text="request demo"
                imageSrc={upi}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
            <Why />
            <UPI_Steps />
            <UpiAdvantages />
            <BestSuited />
            {/* <ApiIntegration /> */}
            <CertifiedAndSecure />
            <Trusted />
            <FAQ />
            <Instantly 
                mainHeading="Start Accepting UPI Payments Now!"
            />
        </>
    )
}

export default UPI_Payment_Solution