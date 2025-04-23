import React from 'react'
import styled from 'styled-components'
import refund from '../../public/image/blog-hero.png'
import Button from './UI/Button'

const RefundHeroSection = () => {
    return (
        
        <Section className='px-4 max-w-[1200px] mx-auto  mt-20 flex justify-center  '>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 items-center mt-16 ">
                
                <div className="text-center gap-6 md:text-left flex flex-col items-center md:items-start px-4 md:px-10 py-4 ">
                    {/* <div className="bg-white rounded-full px-2 py-1 text-black text-sm font-semibold">🔥 100% Trusted Platform</div> */}
                    <h2 className='text-black text-2xl md:text-5xl mt-6 leading-tight capitalize flex-wrap '>
                    Policy clarity. Customer trust. The Mpluse way <span className='text-[#CF1C53]'> Mpluse</span> 
                    </h2>
                    {/* <span className='text-[#14fd2b]'>FLEXIBILITY</span> */}
                    <p className='text-lg mt-4 max-w-md font-sans font-[400] text-black'>
                    Empowering businesses with innovative payment solutions, seamless transactions, and unwavering trust. Your success, our commitment
                    </p>
                    <Button text='Get Started For Free' className='px-3 border text-black font-[700]'/>
                </div>

                <div className=" flex justify-center md:justify-end ">
                    <img src={refund} alt="Debit Card" className=' right-8 md:right-16 scale-75 md:scale-105 z-20' />
                </div>
            </div>
        </Section>
    )
}

export default RefundHeroSection

const Section = styled.div `
    background-color: #eaf0f9d6;
`