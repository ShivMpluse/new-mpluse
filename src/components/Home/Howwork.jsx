import { ImLoop } from "react-icons/im";
import { MdOutlineUpgrade } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Howwork = () => {

    const ref = useRef(null)

    const data = [
        {
            id: 1,
            title: 'integrate',
            description: "Seamless API integration for smooth and scalable connectivity.",
            icon: <ImLoop size={32} className="text-blue-500" />
        },
        {
            id: 2,
            title: 'go live',
            description: "Launch your service live with speed and confidence.",
            icon: <MdOutlineUpgrade size={32} className="text-blue-500" />
        },
        {
            id: 3,
            title: 'start acepring',
            description: "Start accepting payments globally with secure API integration.",
            icon: <IoSettings size={32} className="text-blue-500" />
        },
        {
            id: 4,
            title: 'integrate',
            description: "Seamless API integration for smooth and scalable connectivity.",
            icon: <ImLoop size={32} className="text-blue-500" />
        },
        {
            id: 5,
            title: 'go live',
            description: "Launch your service live with speed and confidence.",
            icon: <MdOutlineUpgrade size={32} className="text-blue-500" />
        },
        {
            id: 6,
            title: 'start acepring',
            description: "Start accepting payments globally with secure API integration.",
            icon: <IoSettings size={32} className="text-blue-500" />
        }
    ]

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
        <section className='max-w-[1200px] mx-auto py-10 flex flex-col text-center' ref={ref}>
            <h1 className="text-4xl capitalize py-10 font-semibold">why choose mpluse</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    data.map((item) => (
                        <li key={item.id}  className="border border-[#e7e7e7] p-8 shadow-lg bg-white text-black rounded-lg">
                            <div className="flex flex-col gap-4 items-center">
                                <span className="p-4 border border-[#dcd6d6] shadow-md rounded-full animate-pulse capitalize">{item.icon}</span>
                                <h2 className="text-3xl font-semibold capitalize">{item.title}</h2>
                                <p className="text-lg text-center">{item.description}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Howwork;
