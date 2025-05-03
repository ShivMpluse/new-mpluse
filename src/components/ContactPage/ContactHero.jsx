import styled from 'styled-components'
import debit from '../../../public/image/mpluse-card.png'
import Button from '../UI/Button'
import HeroSectionUI from '../UI/HeroSectionUI'

const ContactHero = () => {

    return (
        
        <HeroSectionUI
                heading={
                    <> Partner with us for<br className="hidden md:block" /> payment innovation   <span className='text-[#CF1C53]'>Mpluse.</span></>
                }
                description="Accept payments, send instant payouts, and manage transactions effortlessly with Mpluse. Our smart, secure, and scalable platform simplifies digital finance, helping businesses operate faster, better, and with complete control."
                buttonText="Open Account"
                button_Text="Sign-Up"
                imageSrc={debit}
                imageAlt="Mpluse Debit Card"
                onButtonClick={() => console.log('Button clicked')}
            />
        
    )
}

export default ContactHero


const Section = styled.div `
    background-color: #eaf0f9d6;
`


    /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) inset; */