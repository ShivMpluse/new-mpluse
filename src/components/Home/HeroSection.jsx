import styled from 'styled-components'
import debit from '../../../public/image/mpluse-card.png'
import Button from '../UI/Button'

const HeroSection = () => {

    const images = [
        {
            id: "1",
            image: "/image/hdfc.png"
        },
        {
            id: "2",
            image: "/image/icici.png"
        },
        {
            id: "3",
            image: "/image/axis.png"
        },
        {
            id: "4",
            image: "/image/union.png"
        },
        {
            id: "5",
            image: "/image/kotak.png"
        },
        {
            id: "6",
            image: "/image/panjab.png"
        }
    ]

    return (
        
        <Section className='px-4 max-w-[1200px] mx-auto  mt-18 '>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 items-center mt-16 ">
                <div className="text-center gap-6 md:text-left flex flex-col items-center md:items-start px-4 md:px-10 py-4 ">
                    {/* <div className="bg-white rounded-full px-2 py-1 text-black text-sm font-semibold">🔥 100% Trusted Platform</div> */}
                    <h2 className='text-black text-2xl md:text-5xl mt-6 leading-tight capitalize flex-wrap '>
                        Empowering Businesses with Reliable & Future-Ready Payment Solutions <span className='text-[#CF1C53]'>Mpluse</span> 
                    </h2>
                    {/* <span className='text-[#14fd2b]'>FLEXIBILITY</span> */}
                    <p className='text-lg mt-4 max-w-md font-sans font-[400] text-black'>
                    Empowering businesses with innovative payment solutions, seamless transactions, and unwavering trust. Your success, our commitment
                    </p>
                    <Button text='Get Started For Free' className='px-3 border text-black font-[700]'/>
                
                </div>
                <div className=" flex justify-center md:justify-end ">
                    <img src={debit} alt="Debit Card" className=' bottom-[-30px] right-8 md:right-16 scale-75 md:scale-90 z-20' />
                </div>
            </div>
            <div className="my-10 p-4 max-w-[1200px] w-full text-4xl text-gray-400 flex justify-center items-center gap-10 font-black  mt-10 mx-auto overflow-hidden">
                <marquee behavior="alterant" direction="left" className="flex gap-10">
                    <ul className='flex gap-10'>
                        {
                            images.map((elem) => (
                                <li key={elem.id} className='shadow-md  h-16 w-74 bg-white'>
                                    <img src={elem.image} alt="company" className='h-full w-full'/>
                                </li>
                            ))
                        }
                    </ul>
                </marquee>
            </div>
        </Section>
    )
}

export default HeroSection


const Section = styled.div `
    background-color: #eaf0f9d6;
`


    /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1) inset; */