import debit from '../../../public/image/mpluse-card.png'
import Button from '../UI/Button'

const HeroSection = () => {

    return (
        
        <section className='px-4 max-w-[1200px] mx-auto  mt-18'>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 items-center mt-16 ">
                <div className="text-center gap-6 md:text-left flex flex-col items-center md:items-start px-4 md:px-10 py-4 ">
                    {/* <div className="bg-white rounded-full px-2 py-1 text-black text-sm font-semibold">🔥 100% Trusted Platform</div> */}
                    <h2 className=' text-black text-2xl md:text-5xl mt-6 leading-tight capitalize'>
                    Empowering Ideas,<br className="hidden md:block" /> Building the Future
                    </h2>
                    {/* <span className='text-[#14fd2b]'>FLEXIBILITY</span> */}
                    <p className='text-lg mt-4 max-w-md font-sans font-[400] text-black'>
                    Welcome to Mpluse — where innovation meets purpose. We are committed to building meaningful fintech experiences that simplify complexity, empower businesses, and drive growth. With a focus on technology, trust, and impact, we deliver secure, scalable solutions that truly matter in today’s fast-evolving digital world.
                    </p>
                    <Button text='Open Account' className='px-4 py-2 bg-[#b5001e] text-white font-semibold'/>
                
                </div>
                <div className=" flex justify-center md:justify-end ">
                    <img src={debit} alt="Debit Card" className=' bottom-[-30px] right-8 md:right-16 scale-75 md:scale-90 z-20' />
                </div>
            </div>
            
        </section>
    )
}

export default HeroSection
