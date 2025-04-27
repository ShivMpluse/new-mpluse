import React from 'react'
import MissionSection from '../UI/MissionSectionUI'
import strength from '../../../public/image/strength.png'

const text = `Our core strengths stem from a blend of cutting-edge technology, deep regulatory knowledge, and an unyielding focus on customer-centricity. Our APIs deliver reliability and speed, enabling businesses to move from integration to operation within days, not months. Our security architecture is built to withstand modern threats, ensuring data integrity and operational resilience. With real-time dashboards, intelligent reporting, and proactive merchant support teams, Mpluse transforms digital finance from a necessity into a strategic advantage.`

const OurStrength = () => {
    return (
        <MissionSection 
            title="Our Strengths"
            text={text}
            imageSrc={strength }
            imageAlt="our strength"
        />
    )
}

export default OurStrength