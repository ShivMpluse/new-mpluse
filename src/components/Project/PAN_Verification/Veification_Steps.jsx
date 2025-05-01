import React from 'react';
import { HiDocumentText, HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';

    const steps = [
        {
            id: 1,
            title: 'Submit PAN Number',
            description: 'Send the PAN number through our secure API endpoint.',
            icon: <HiDocumentText className="text-blue-600 text-3xl" />,
        },
        {
            id: 2,
            title: 'Fetch Details',
            description: 'Our system retrieves data from government sources in real-time.',
            icon: <HiOutlineSwitchHorizontal className="text-purple-600 text-3xl" />,
        },
        {
            id: 3,
            title: 'Verify Instantly',
            description: 'Get verification results with complete PAN details in seconds.',
            icon: <FaCheckCircle className="text-green-500 text-3xl" />,
        },
    ];

const VerificationSteps = ({ 
    mainbg,
    heading_Text,
    cardDesign
 }) => {
    return (
        <div class={`${mainbg} py-10`}>
            <section className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 py-10">
                    {heading_Text}
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <li
                            key={step.id}
                            className={`${cardDesign}`}
                        >
                            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center  rounded-full">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold  mb-2">
                                {index + 1}. {step.title}
                            </h3>
                            <p className="text-gray-100">{step.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default VerificationSteps;
