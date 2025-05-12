import React from "react";
import { FaUpload, FaTextHeight, FaFileCode, FaCheckCircle } from "react-icons/fa";

const steps = [
    {
        title: "1. Upload Document Image",
        description: "Securely upload document images through our API",
        icon: <FaUpload className="text-blue-500 text-3xl" />,
    },
    {
        title: "2. OCR Reads and Extracts Text",
        description: "Advanced AI algorithms extract text from documents",
        icon: <FaTextHeight className="text-blue-500 text-3xl" />,
    },
    {
        title: "3. Structured JSON Output",
        description: "Receive clean, structured data in JSON format",
        icon: <FaFileCode className="text-blue-500 text-3xl" />,
    },
    {
        title: "4. Optional Cross-Validation",
        description: "Verify extracted data against official databases",
        icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
    },
];

export default function Verification_Steps() {
    return (
        <div class="bg-blue-50">
            <section className="max-w-[1200px] mx-auto py-16 ">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                    How OCR Verification Works
                </h2>
                <ul className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {steps.map((step, index) => (
                        <li
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center group relative overflow-hidden"
                        >
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 mb-4">
                                {step.icon}
                            </div>
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                                    {step.title}
                                </h3>
                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                            {/* Optional Blue Border Bottom Animation */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
