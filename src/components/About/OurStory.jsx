import React from 'react'
import styled from 'styled-components'
import story from '../../../public/image/story.png'

const OurStory = () => {
    return (
        <Section className='max-w-[1200px] mx-auto py-10 border border-[#d3d3d3]'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="img flex justify-center items-center">
                    <img src={story} alt="Our Story" className='h-[300px] w-[550px] object-cover rounded-lg' />
                </div>
                <div className="flex flex-col justify-evenly items-start">
                    <h1 className="text-4xl font-bold capitalize">our story</h1>
                    <p className="text-sm text-gray-500 mt-2">
                        Mpluse ek modern fintech platform hai jo har size ke businesses 
                        ke liye reliable aur secure payment solutions provide karta hai. 
                        Humari mission hai payments ko simple, fast, aur accessible banana – 
                        chahe woh small merchant ho ya large enterprise. Hum APIs, dashboards 
                        aur white-label tools ke through businesses ko empower karte hain taaki 
                        woh easily onboard karein, transactions manage karein, aur smoothly grow 
                        karein. Mpluse kisi bhi user ke funds ko directly hold nahi karta – 
                        hum sirf technology enabler hain jo licensed banks aur NBFCs ke saath 
                        milkar seamless payment experience create karta hai, legally compliant 
                        aur transparent tareeke se.
                    </p>
                </div>
            </div>
            
        </Section>
    )
}

export default OurStory

const Section = styled.section `
    background-color: #eaf0f9d6;
`
