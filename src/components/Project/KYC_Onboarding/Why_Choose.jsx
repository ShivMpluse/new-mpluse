import React from "react";
import { FaIdCard, FaUserCheck, FaShieldAlt, FaCode, FaLock, FaBolt } from "react-icons/fa";

const kycFeatures = [
    {
        icon: <FaIdCard className="text-3xl text-blue-500" />,
        title: "Real-time PAN/Aadhaar OCR",
        description: "Instantly extract and verify information from identity documents with our advanced OCR technology.",
    },
    {
        icon: <FaUserCheck className="text-3xl text-blue-500" />,
        title: "Face Match + Liveliness Check",
        description: "Prevent fraud with advanced facial recognition and liveliness detection technology.",
    },
    {
        icon: <FaShieldAlt className="text-3xl text-blue-500" />,
        title: "DigiLocker & CKYC Integration",
        description: "Seamlessly connect with government digital services for faster verification and onboarding.",
    },
    {
        icon: <FaCode className="text-3xl text-blue-500" />,
        title: "API + Dashboard Options",
        description: "Choose between our powerful API for integration or use our intuitive dashboard for manual verification.",
    },
    {
        icon: <FaLock className="text-3xl text-blue-500" />,
        title: "DPDP-compliant Data Control",
        description: "Ensure data privacy and security with our DPDP Act 2023 compliant data handling processes.",
    },
    {
        icon: <FaBolt className="text-3xl text-blue-500" />,
        title: "Rapid Implementation",
        description: "Get up and running quickly with our easy-to-integrate solutions and dedicated support team.",
    },
];

const Why_Choose = () => {
    return (
        <section class={`bg-gray-50`}>
            <div className="max-w-[1200px] mx-auto py-18 px-6">
                <h2 className="text-3xl font-bold text-center mb-4">Why Choose Mpluse KYC?</h2>
                <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
                    Our comprehensive KYC and onboarding solutions are designed to streamline verification while ensuring regulatory compliance.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {kycFeatures.map((feature, index) => (
                        <li key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Why_Choose;
