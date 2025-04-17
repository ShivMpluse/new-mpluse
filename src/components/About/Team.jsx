import React from 'react'
import '../../index.css'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
    

    const team = [
        {
            id: '1',
            name: 'Rajan',
            image: './image/man1.png',
            designation: 'Frontend Developer'
        },
        {
            id: '2',
            name: 'Sandeep',
            image: './image/human.png',
            designation: 'Backend Developer'
        },
        {
            id: '3',
            name: 'Abhishek',
            image: './image/man3.png',
            designation: 'Fullstack Developer'
        },
        {
            id: '4',
            name: 'Rajan',
            image: './image/man3.png',
            designation: 'Frontend Developer'
        },
        {
            id: '5',
            name: 'Sandeep',
            image: './image/man2.png',
            designation: 'Backend Developer'
        },
        {
            id: '6',
            name: 'Abhishek',
            image: './image/man1.png',
            designation: 'Fullstack Developer'
        }
    ]

const Team = () => {

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
        <section className='px-4 max-w-[1200px] mx-auto py-10 mt-18' ref={ref}>
            <div className="flex justify-center">
                <h2 className='text-3xl font-semibold mb-18 capitalize'>Meet Our Team</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {team.map((elem) => (
                    <li key={elem.id} 
                        className='flex flex-col justify-center border border-[#c9c7c7] 
                                    items-center gap-6 p-6 bg-gradient-to-b to-10% 
                                    shadow-lg rounded-xl transform hover:scale-105 
                                    transition-all'
                        >
                        <div className="flex h-32 w-32  bg-white rounded-full overflow-hidden mb-4">
                            <img src={elem.image} alt={elem.name} className='h-full w-full object-cover bg-[#eaf0f9d6]' />
                        </div>
                        <div className='text-center'>
                            <h3 className="font-semibold text-2xl text-black capitalize">mr. {elem.name}</h3>
                            <p className="text-lg text-black">{elem.designation}</p>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Team
//  from-red-400 via-40% from-10% via-red-200 
//                                     to-blue-500