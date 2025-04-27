import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

gsap.registerPlugin(ScrollTrigger)

const MissionSection = ({ 
    title = "Our Mission", 
    text, 
    imageSrc, 
    imageAlt = "Mission Image" 
}) => {

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
        <Section ref={ref} className='mx-auto border border-[#c8c8c8]'>
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#b5001e]">{title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
                <div className="text-gray-600 leading-relaxed space-y-4 text-sm md:text-base text-justify">
                    {text.split('\n').map((para, idx) => (
                        <p key={idx}>{para.trim()}</p>
                    ))}
                </div>
                <div className="max-w-[550px] mx-auto">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg w-full"
                    />
                </div>
            </div>
        </Section>
    )
}

export default MissionSection

// Styled Component
const Section = styled.section`
    background-color: #eaf0f9d6;
    padding: 4rem 1rem;
    max-width: 1200px;
    margin-top: 100px;
    margin-bottom: 100px;
`;

