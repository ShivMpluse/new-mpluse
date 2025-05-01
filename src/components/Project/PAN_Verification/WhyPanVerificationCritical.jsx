import React from 'react';
import { FaShieldAlt, FaLock, FaBolt } from 'react-icons/fa';
import verify from '/image/verify-02.png'

const benefitsData = [
    {
        icon: <FaShieldAlt />,
        title: 'Identity Proof',
        description: 'Verify customer identities with government-issued PAN data to ensure authentic onboarding.',
        iconBg: 'bg-blue-200',
        iconColor: 'text-blue-700',
    },
    {
        icon: <FaLock />,
        title: 'Fraud Detection',
        description: 'Prevent identity theft and financial fraud by validating PAN details in real-time.',
        iconBg: 'bg-purple-200',
        iconColor: 'text-purple-700',
    },
    {
        icon: <FaBolt />,
        title: 'Seamless Onboarding',
        description: 'Reduce customer drop-offs with instant verification that eliminates manual checks.',
        iconBg: 'bg-green-200',
        iconColor: 'text-green-700',
    },
];

function WhyPanVerificationCritical({ 
    mainbg,
    mainHeading,
    cardDesign
 }) {

    return (
        <div class={`${mainbg}`}>
            <section className="max-w-[1200px] mx-auto  rounded-lg p-6 shadow-md py-10">
                <h2 className={`py-10 text-4xl font-semibold text-blue-700 mb-4 text-center ${mainHeading}`}>Why PAN Verification is Critical</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ul className="gap-5 grid grid-rows-3 max-w-[500px] ">
                        {benefitsData.map((benefit, index) => (
                            <li key={index} className={`flex items-center rounded-md ${cardDesign}`}>
                                <div className={`w-16 h-10 rounded-full ${benefit.iconBg} flex items-center justify-center ${benefit.iconColor}`}>
                                    {benefit.icon}
                                </div>
                                <div className="ml-3 flex flex-col gap-4">
                                    <h3 className="text-lg font-medium ">{benefit.title}</h3>
                                    <p className="text-gray-100 text-sm">{benefit.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div class="flex justify-center items-center ">
                        <img src={verify} alt="PAN Verification" className='max-h-[420px] mx-auto'/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhyPanVerificationCritical;