import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '../UI/Button'
import { NavLink } from 'react-router-dom'

const BlogExplore = () => {

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
        <section className=' max-w-[1200px] mx-auto py-10 flex flex-col text-center mt-20' ref={ref}>
            <h2 className="text-2xl font-semibold mb-4 text-center">Explore By Category</h2>
            <div className="flex justify-center space-x-6">
            <NavLink to="/">
                <Button className=" bg-blue-600 text-white" text="API Design" />
            </NavLink>
            <NavLink to="/about">
                <Button className=" bg-blue-600 text-white" text="Digital Banking" />
            </NavLink>
            <NavLink to="/contact">
                <Button className=" bg-blue-600 text-white" text="Compliance" />
            </NavLink>
            </div>
        </section>
    )
}

export default BlogExplore