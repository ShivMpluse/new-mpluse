import styled from 'styled-components'
import debit from '../../../public/image/mpluse-card.png'
import Button from '../UI/Button'
import About from '../../pages/About'

const ContactHero = () => {

    return (
        
        <Section className='px-4 max-w-[1200px] mx-auto  mt-18 '>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 items-center mt-16 ">
                <div className="text-center gap-6 md:text-left flex flex-col items-center md:items-start px-4 md:px-10 py-4 ">
                    {/* <div className="bg-white rounded-full px-2 py-1 text-black text-sm font-semibold">🔥 100% Trusted Platform</div> */}
                    <h2 className=' text-black text-2xl md:text-5xl mt-6 leading-tight capitalize flex-wrap '>
                        Partner with us for payment innovation  <span className='text-[#CF1C53]'>Mpluse.</span> 
                    </h2>
                    {/* <span className='text-[#14fd2b]'>FLEXIBILITY</span> */}
                    <p className='text-lg mt-4 max-w-md font-sans font-[400] text-black'>
                        Accept payments, send instant payouts, and manage transactions effortlessly with Mpluse. Our smart, secure, and scalable platform simplifies digital finance, helping businesses operate faster, better, and with complete control.
                    </p>
                    <Button text='Open Account' className='px-4 py-2 bg-[#b5001e] text-white font-semibold'/>
                
                </div>
                <div className=" flex justify-center md:justify-end ">
                    <img src={debit} alt="Debit Card" className=' bottom-[-30px] right-8 md:right-16 scale-75 md:scale-90 z-20' />
                </div>
            </div>
        </Section>
    )
}

export default ContactHero


const Section = styled.div `
    background-color: #eaf0f9d6;
`


    /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) inset; */