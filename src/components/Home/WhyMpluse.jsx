import  card from '../../../public/image/Dashboard-card.svg'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WhyMpluse = () => {

    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                }
            }
        )
    }, [])


    // const data = [
    //     {
    //         id: "1",
    //         title: "Payments",
    //         description: "Secure, fast, and seamless payments for effortless financial transactions.",
    //         icon: <MdCloudDone size={32} className="text-green-500" />
    //     },
    //     {
    //         id: "2",
    //         title: "Payouts",
    //         description: "Instant, reliable payouts to users, vendors, or partner accounts anytime.",
    //         icon: <MdOutlineInsights size={32} className="text-blue-500" />
    //     },
    //     {
    //         id: "3",
    //         title: "Subscriptions",
    //         description: "Flexible billing and automated renewals for consistent service delivery.",
    //         icon: <LuGitCompareArrows size={32} className="text-purple-500" />
    //     }
    // ]

    return (
        <section className='max-w-[1200px] mx-auto p-4' ref={ref}>
            {/* <h1 className="text-4xl font-bold my-10 ">Why Mpluse</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
                <div className="flex flex-col gap-6 justify-center mx-auto ">
                    <div className="flex flex-col gap-3 mx-auto mx-w-[450px] ">
                        <h1 className="text-4xl font-semibold my-10 capitalize" >solution for every Business </h1>
                        <ul className="flex flex-wrap gap-10">
                            <li className='text-3xl text-gray-400 font-black'>eCommerce</li>
                            <li className='text-3xl text-gray-400 font-black'>Edtech</li>
                            <li className='text-3xl text-gray-400 font-black'>Saas</li>
                            <li className='text-3xl text-gray-400 font-black'>Hypetocal</li>
                            {/* <li className='text-3xl text-gray-400 font-bold'>eCommerce</li>
                            <li className='text-3xl text-gray-400 font-bold'>eCommerce</li> */}
                        </ul>
                        {/* <h2 className="text-2xl font-semibold capitalize">build product faster</h2>
                        <p className="text-normal capitalize font-[500] text-[#ffffff] md:max-w-full mx-auto">Mpluse’s platform offers scalable reach, optimized builds, and smart financial plans. </p> */}
                    </div>
                    {/* <div className="flex flex-col gap-3 max-w-[450px] ">
                        <h2 className="text-2xl font-semibold capitalize">optimize revenue</h2>
                        <p className="text-normal capitalize font-[500] text-[#ffffff]">Mpluse Fintech Pvt Ltd provides UPI services for your cash payments. </p>
                    </div> */}
                </div>
                <div className="flex py-8 md:py-0">
                    <img src={card} alt="card" className='md:max-h-[400px] mx-auto' />
                </div>
            </div>
            {/* <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {data.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col justify-center items-center bg-white border border-[#9f9e9e] rounded-lg shadow-md hover:shadow-lg transition duration-200">
                        <div className="mb-4">{item.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                        <p className="text-gray-600 text-sm text-center ">{item.description}</p>
                    </li>
                ))}
            </ul> */}
        </section>
    )
}

export default WhyMpluse
