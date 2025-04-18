import mission from '../../../public/image/ourMission.png'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const text = `At Mpluse Fintech Pvt. Ltd., our mission is to revolutionize 
                the way businesses experience digital finance. We aim to empower startups, 
                enterprises, and developers by providing fast payouts, secure payins, 
                and robust API solutions that integrate seamlessly into any system. 
                Our goal is to eliminate complexity and bring simplicity, speed, 
                and reliability to every transaction.
                With a strong focus on innovation, scalability, and data security, 
                we are building a future where financial operations run smoother than ever. 
                Our solutions are designed to reduce downtime, improve efficiency, 
                and boost customer satisfaction through real-time access and automation.
                Mpluse isn't just another fintech platform — it's a trusted partner for 
                businesses looking to grow with confidence. We believe in creating value 
                through transparency, compliance, and user-centric technology. From everyday 
                transactions to enterprise-level integrations, we are committed to delivering 
                fintech that works — smarter, faster, and stronger. 💼🚀`

const OurMission = () => {

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
        <section className='flex flex-col items-center px-4 max-w-[1200px] mx-auto mt-18 py- mb-4 py-10' ref={ref}>
            <h2 className="text-3xl font-semibold mb-18">Our Mission</h2>
            <section className=" mx-auto grid md:grid-cols-2 gap-12 items-center ">
                <div className=''>
                    <p className="text-gray-600 leading-relaxed py-3 text-[14px]">
                        {text}
                    </p>
                </div>
                <div className='max-w-[550px] '>
                    <img
                        src={mission}
                        alt="Mission"
                        className="rounded-lg w-full"
                    />
                </div>
            </section>

        </section>
    )
}

export default OurMission
