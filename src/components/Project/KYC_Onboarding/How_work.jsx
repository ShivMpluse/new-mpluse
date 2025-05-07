import React from "react";
import { FaUpload, FaSearch, FaCheckCircle, FaRegCheckSquare } from "react-icons/fa";
import Button from "../../UI/Button";

const steps = [
  {
    icon: FaUpload,
    title: "Upload",
    description: "Upload identity documents through our secure platform.",
  },
  {
    icon: FaSearch,
    title: "OCR & Match",
    description: "Our AI extracts data and matches it with official records.",
  },
  {
    icon: FaCheckCircle,
    title: "Verify",
    description: "Facial recognition and liveliness checks confirm identity.",
  },
  {
    icon: FaRegCheckSquare,
    title: "Approve",
    description: "Complete the onboarding process with confidence.",
  },
];

const How_works = () => {
    return (
        <div class="bg-white">
            <section className="max-w-[1200px] mx-auto  py-12 px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">How It Works</h2>
                <p className="text-gray-600 mb-10">
                    Our streamlined process makes verification simple, secure, and efficient.
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <li key={index}>
                                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-3">
                                    <Icon className="text-2xl text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-gray-500 text-sm">{step.description}</p>
                            </li>
                        );
                    })}
                </ul>

                {/* API SDK Box */}
                <div className="bg-blue-100 text-center mt-12 p-6 rounded-lg max-w-4xl mx-auto">
                    <h3 className="font-semibold text-lg mb-2">API/SDK for Platform Integration</h3>
                    <p className="text-gray-700 mb-4">
                    Seamlessly integrate our KYC solutions into your existing platforms with our developer-friendly API and SDK options.
                    </p>
                    <Button text="View API Documentation" className="bg-blue-600 text-white px-5 py-2 rounded font-semibold hover:bg-blue-800 transition" />
                </div>
            </section>
        </div>
    );
};

export default How_works;
