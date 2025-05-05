import ApiStackSection from "../components/Project/Banking_Service/ApiStackSection"
import BankingService from "../components/Project/Banking_Service/ComplianceSection"
import FeatureSection from "../components/Project/Banking_Service/FeatureSection"
import ThreeStepSection from "../components/Project/Banking_Service/ThreeStepSection"
import What_Is_Banking_Service from "../components/Project/Banking_Service/What_Is_Banking_Service"
import HeroSectionUI from "../components/UI/HeroSectionUI"
import bank from '/image/bank.png'
import SendboxSection from "../components/Project/Banking_Service/SendBoxSection"
import Industries from "../components/Project/Banking_Service/Industries"
import StatSection from "../components/Project/Banking_Service/StatSection"
import FAQ from "../components/Project/Banking_Service/FAQ"
import StartBuilding from "../components/Project/Banking_Service/StartBuilding"

const Banking_Service = () => {


    // const sectionbgGradient = `text-white bg-[#0b122d] `
    // const cardDesign = "shadow-pink-500/70 border border-pink-500/20 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-xl animation-all duration-500 hover:scale-105"
    // const heading = "text-white"



    return (
        <>
            <HeroSectionUI
                heading={
                    <>Banking as a Service Built<br className="hidden md:block" /> for Modern India <span className='text-[#CF1C53]'></span></>
                }
                description="Launch your own banking product with powerful APIs from Mpluse – secure, scalable, and compliant."
                buttonText="Get started"
                button_Text="talk to expert"
                imageSrc={bank}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
                sectionBackGroundColor='text-white bg-gradient-to-br from-[#0b122d] to-[#0b163d] h-screen lg:h-[80vh]'
                companyLogo="hidden"
            />
            <What_Is_Banking_Service />
            <FeatureSection />
            <ApiStackSection />
            <ThreeStepSection />
            <BankingService />
            <SendboxSection />
            <Industries />
            <StatSection />
            <FAQ />
            <StartBuilding 
                mainHeading="Start Building Your Digital Bank Today"
                discription="Partner with Mpluse Fintech to create secure, API-first financial solutions."
            />
        </>
    )
}

export default Banking_Service