import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    {
        question: "What is the API response speed?",
        answer:
        "Our API typically responds in under 2 seconds, with an average response time of 1.2 seconds.",
    },
    {
        question: "How is data security maintained?",
        answer:
        "We implement bank-grade PCI DSS compliant encryption for all data transfers. Your data is secure.",
    },
    {
        question: "What sources are supported for verification?",
        answer:
        "Our API directly integrates with the Income Tax Department's database for PAN verification.",
    },
    {
        question: "What information is returned in the API response?",
        answer:
        "The API returns verification status, full name as per PAN records, father's name (when available), and more.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div class="bg-green-50">
            <section className="max-w-[1200px] mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
                Frequently Asked Questions
            </h2>
            <ul className="max-w-3xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                <li
                    key={index}
                    className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-102"
                >
                    <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800"
                    >
                    {item.question}
                    <FaChevronDown
                        className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                    </button>
                    {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-600 text-sm">
                        {item.answer}
                    </div>
                    )}
                </li>
                ))}
            </ul>
        </section>
        </div>
    );
};

export default FAQ;
