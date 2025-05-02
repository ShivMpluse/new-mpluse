import React from "react";
import { FaClipboardList, FaShieldAlt, FaLock, FaCode } from "react-icons/fa";

const highlights = [
    {
        icon: <FaClipboardList className="text-blue-500 text-3xl" />,
        title: "Instant Name Match",
        description: "Verify customer-provided names against official PAN records in real-time.",
    },
    {
        icon: <FaShieldAlt className="text-purple-500 text-3xl" />,
        title: "Govt. Source Validation",
        description: "Direct integration with Income Tax Department database for authentic verification.",
    },
    {
        icon: <FaLock className="text-green-400 text-3xl" />,
        title: "Secure Encryption",
        description: "End-to-end encryption with PCI DSS compliance for maximum data protection.",
    },
    {
        icon: <FaCode className="text-blue-400 text-3xl" />,
        title: "Developer-Friendly",
        description: "Simple REST API with comprehensive documentation and code samples.",
    },
];

const PAN_API_Highlight = ({ 
    mainbg,
    cardDesign
}) => {
    return (
        <div className={`${mainbg}`}>
            <section className="py-12 px-4  max-w-[1200px] mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 ">Mpluse PAN API Highlights</h2>
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => (
                        <li
                            key={index}
                            className={`${cardDesign} flex flex-col py-4 gap-4`}
                        >
                            <div className="flex justify-center mb-4 p-4i">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-center text-gray-50 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-100 text-center">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default PAN_API_Highlight;
