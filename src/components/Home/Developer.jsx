import React from 'react'
import Button from '../UI/Button'
import man from '../../../public/image/API.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Developer = () => {

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


    return (
        <section className=' px-4 max-w-[1200px] mx-auto my-18 py-6' ref={ref}>
            <div className="flex text-center justify-center text-4xl font-semibold my-2 capitalize mx-auto py-4">
                <h1 className="" >developer friendly API's </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-8 ">
                <div className="flex flex-col items-start px-10 gap-10 ">
                    
                    <p className='text-lg  max-w-md font-sans font-[400] text-black'>
                        Our developer-friendly APIs are built for speed, scalability, and simplicity. Designed with clean architecture and clear documentation, our APIs make it easy to integrate payout, payin, and financial services into any platform. Whether you're building mobile apps, backend systems, or fintech solutions, our APIs offer real-time access, high reliability, and complete control. We empower developers to innovate faster with secure, flexible, and production-ready endpoints — so you can focus on building, not debugging.
                    </p>
                    <div className="flex flex-wrap justify-between gap-10">
                        <Button text="Create Account" className="bg-blue-500 capitalize text-white" />
                        <Button text="schedule a demo" className="capitalize 0 border" />
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <div className=" max-w-[500px] h-80 my-auto rounded-full flex items-center justify-center">
                        <img src={man} alt="" className='h-full my-auto object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developer
