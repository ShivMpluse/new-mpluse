// import MissionSection from '../components/MissionSection'
import mission from '../../../public/image/ourMission.png'
import MissionSection from '../UI/MissionSectionUI';

const text = `At Mpluse Fintech Pvt. Ltd., our mission is to revolutionize the way businesses experience digital finance. We aim to empower startups, enterprises, and developers by providing fast payouts, secure payins, and robust API solutions that integrate seamlessly into any system. Our goal is to eliminate complexity and bring simplicity, speed, and reliability to every transaction.With a strong focus on innovation, scalability, and data security, we are building a future where financial operations run smoother than ever. Our solutions are designed to reduce downtime, improve efficiency, and boost customer satisfaction through real-time access and automation.    Mpluse isn't just another fintech platform — it's a trusted partner for     businesses looking to grow with confidence. We believe in creating value    through transparency, compliance, and user-centric technology. From everyday   transactions to enterprise-level integrations, we are committed to delivering     fintech that works — smarter, faster, and stronger. 💼🚀`;
const AboutPage = () => {
    return (
        <>
            <MissionSection 
                title="Our Mission"
                imageSrc={mission}
                text={text}
                imageAlt="Our Mission Image"
            />
        </>
    )
}

export default AboutPage
