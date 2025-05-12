import React from "react";
import { FaIdCard, FaAddressCard, FaCar, FaRegIdBadge } from "react-icons/fa";

const supportedDocs = [
    {
        title: "PAN Card",
        icon: <FaIdCard className="text-blue-500 text-4xl mb-2" />,
    },
    {
        title: "Aadhaar Card",
        icon: <FaAddressCard className="text-teal-500 text-4xl mb-2" />,
    },
    {
        title: "Driving License",
        icon: <FaCar className="text-purple-500 text-4xl mb-2" />,
    },
    {
        title: "Voter ID",
        icon: <FaRegIdBadge className="text-red-500 text-4xl mb-2" />,
    },
];

export default function Documents() {
    return (
        <div class="bg-white">
            <section className="max-w-[1200px] mx-auto py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Supported Documents
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                    {supportedDocs.map((doc, index) => (
                        <li
                            key={index}
                            className="bg-white border border-gray-100 shadow-md rounded-xl p-6 transition hover:shadow-xl"
                        >
                            {doc.icon}
                            <p className="mt-2 font-semibold text-gray-800">{doc.title}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
