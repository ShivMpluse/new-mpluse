import MissionSection from "../UI/MissionSectionUI"
import About from '../../../public/image/About-Mpluse.png'

const AboutMpluse = () => {

    const text = `Mpluse Fintech Private Limited is a new-age fintech infrastructure company dedicated to delivering secure, scalable, and compliant solutions that power digital finance across India. Headquartered in Lucknow, we are proud to serve businesses of all sizes, providing them with the technology backbone needed to manage payments, verify customers, and comply with evolving regulations efficiently. Our API-first approach ensures that businesses can integrate powerful financial tools with minimal effort and maximum trust. We believe that financial innovation must be simple, accessible, and reliable—qualities that define every product and partnership we build. At Mpluse, we understand that in today's hyper-connected world, security and agility are non-negotiable. That's why our platforms are built with enterprise-grade encryption, real-time monitoring, and future-ready scalability, empowering businesses to operate with confidence in an increasingly complex environment.`

    return (
        <MissionSection 
            title="About Mpluse"
            text={text}
            imageSrc={About }
            imageAlt="About Mpluse"
        />
    )
}

export default AboutMpluse