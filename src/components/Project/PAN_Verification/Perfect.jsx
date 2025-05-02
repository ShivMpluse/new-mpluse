import React from "react";
import {
  FaMoneyCheckAlt,
  FaUniversity,
  FaShieldAlt,
  FaUser,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";

const perfectFor = [
    {
        icon: <FaMoneyCheckAlt className="text-blue-500 text-3xl" />,
        title: "Fintech",
        description: "Verify customer identities during account opening and loan applications.",
    },
    {
        icon: <FaUniversity className="text-purple-400 text-3xl" />,
        title: "NBFC",
        description: "Streamline KYC processes and ensure regulatory compliance.",
    },
    {
        icon: <FaShieldAlt className="text-teal-400 text-3xl" />,
        title: "Insurance",
        description: "Validate customer information during policy issuance and claims.",
    },
    {
        icon: <FaUser className="text-blue-400 text-3xl" />,
        title: "HR Tech",
        description: "Verify employee identities during onboarding and payroll setup.",
    },
    {
        icon: <FaClipboardCheck className="text-purple-500 text-3xl" />,
        title: "Onboarding Platforms",
        description: "Integrate PAN verification into digital customer onboarding flows.",
    },
    {
        icon: <FaCheckCircle className="text-green-400 text-3xl" />,
        title: "Compliance Solutions",
        description: "Automate regulatory checks and maintain audit trails.",
    },
];

const Perfect = ({  
    mainbg
}) => {
    return (
        <div class={`${mainbg} bg-blue-50`}>
            <section className="max-w-[1200px] mx-auto px-4  py-12">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Perfect For</h2>
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {perfectFor.map((item, index) => (
                    <li
                        key={index}
                        className="bg-white hover:scale-105 duration-500 ease-in-out p-6 rounded-xl shadow hover:shadow-md transition-all text-start"
                    >
                        <div className="flex items-center mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Perfect;
