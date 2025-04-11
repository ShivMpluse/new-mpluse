import debit from '../../../public/image/set3.png'
import Button from '../Button'
// import iserveU from '../../../public/image/iserve.PNG'

const HeroSection = () => {
    return (
        <section className='px-4  max-w-[1400px] mx-auto  mt-18'>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-10 items-center mt-16">
                <div className="text-center md:text-left flex flex-col items-center md:items-start px-6 md:px-10 py-4">
                    <div className="bg-gray-500 rounded-full px-2 py-1 text-white text-sm font-semibold">🔥 100% Trusted Platform</div>
                    <h2 className=' text-black  md:text-4xl font-[500] mt-6 leading-tight'>
                    Empowering Businesses with Reliable & Future-Ready Payment Solutions <span className='text-[#14fd2b]'>FLEXIBILITY</span>
                    </h2>
                    <p className='text-sm mt-4 max-w-md font-sans font-[500] text-[#575656]'>
                        No-fee checking account with cash back rewards. Enjoy fee-free banking and earn cash back on your everyday purchases.
                    </p>
                    <Button text='Open Account' className='px-4 py-2 bg-[#00b512] text-white font-semibold'/>
                    {/* <button className='w-48 p-3 rounded-full mt-6 bg-lime-400 hover:bg-lime-500 transition'>
                        Open Account
                    </button> */}
                </div>
                <div className=" flex justify-center md:justify-end">
                    {/* <img src={card1} alt="Card" className='absolute bottom-12 md:left-28 scale-90 md:scale-100'/>
                    <img src={phone} alt="Phone" className='max-h-[400px] left-[200px] md:max-h-[450px] z-10'/> */}
                    <img src={debit} alt="Debit Card" className=' bottom-[-30px] right-8 md:right-16 scale-75 md:scale-90 z-20' />
                </div>
            </div>
            <div className="shadow-md my-10 p-4 max-w-[1400px] w-full text-4xl text-gray-400 flex justify-center items-center gap-10 font-black  mt-10 mx-auto overflow-hidden">
                <marquee behavior="alterant" direction="left" className="flex gap-10">
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                    <span>Mpluse &nbsp; </span>
                </marquee>
            </div>
        </section>
    )
}

export default HeroSection
