import React from "react";
import { FaPencilAlt, FaCheckCircle, FaShieldAlt, FaCode } from "react-icons/fa";

const features = [
    {
        title: "Real-Time Data Extraction",
        description:
        "Extract data from documents in milliseconds with our high-performance API, enabling instant verification.",
        icon: <FaPencilAlt className="text-blue-600 text-2xl" />,
    },
    {
        title: "High Accuracy (90%+)",
        description:
        "Our advanced AI models deliver industry-leading accuracy rates, reducing manual verification needs.",
        icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
    },
    {
        title: "Secure API Calls (SSL Encrypted)",
        description:
        "Enterprise-grade security with SSL encryption and secure data handling practices.",
        icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
    },
    {
        title: "Easy Integration with Sandbox",
        description:
        "Developer-friendly sandbox environment with comprehensive documentation for quick implementation.",
        icon: <FaCode className="text-blue-600 text-2xl" />,
    },
];

export default function Key_Features() {
    return (
        <div class="bg-white">
            <section className="max-w-[1200px] mx-auto py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    Key Features
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <li
                            key={index}
                            className="flex items-start bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                            >
                                <div className="mr-4 flex-shrink-0">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                                        {feature.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}
