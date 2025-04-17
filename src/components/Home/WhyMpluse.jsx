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


    const images = [
        {
            id: '1',
            image: './image/bussines.png'
        },
        {
            id: '2',
            image: './image/HouseLoan.png'
        },
        {
            id: '3',
            image: './image/online-store.png'
        },
        {
            id: '4',
            image: './image/knowladge.png'
        }
    ]

    return (
        <section className='max-w-[1200px] mx-auto p-4' ref={ref}>
            {/* <h1 className="text-4xl font-bold my-10 ">Why Mpluse</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  bg-white">
                <div className="flex flex-col gap-6 justify-center mx-auto ">
                    <div className="flex flex-col gap-3 mx-auto mx-w-[450px] 8 justify-center items-center">
                        <h1 className="text-4xl font-semibold my-10 capitalize text-center" >solution for every Business </h1>
                        <ul className="flex flex-wrap gap-8 justify-center items-center">
                            {
                                images.map((elem)=>(
                                    <li key={elem.id} className='p-0 h-28 w-28 flex-wrap rounded-xl transform hover:scale-105 transition-all'>
                                        <img src={elem.image} alt="logo" className='h-full w-full scale-150' />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex py-8 md:py-0">
                    <img src={card} alt="card" className='md:max-h-[400px] mx-auto' />
                </div>
            </div>
        </section>
    )
}

export default WhyMpluse
