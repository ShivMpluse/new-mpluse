import React from "react";

const industries = [
    {
        icon: "🛍️",
        title: "E-commerce",
        description: "Verify seller GST details during onboarding to ensure compliance and prevent fraud.",
        // bgColor: "bg-blue-50",
    },
    {
        icon: "💳",
        title: "Loans",
        description: "Validate business credentials during loan application process for faster approvals.",
        // bgColor: "bg-purple-50",
    },
    {
        icon: "🧾",
        title: "Merchant KYC",
        description: "Streamline merchant verification with automated GST validation for KYC processes.",
        // bgColor: "bg-teal-50",
    },
    {
        icon: "👥",
        title: "Vendor Onboarding",
        description: "Quickly verify vendor credentials to accelerate your supply chain operations.",
        // bgColor: "bg-blue-50",
    },
];

const IndustriesSection = ({
    cardDesign,
    mainbg
}) => {


    return (
        <main className={`${mainbg}`}>
            <section className="py-16 px-6 max-w-[1200px] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Trusted Across Industries
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {industries.map((industry, index) => (
                            <li
                                key={index}
                                className={`${cardDesign} flex flex-col justify-center items-center gap-4`}
                            >
                                <div className="w-14 h-14 mb-4 flex items-center justify-center text-2xl rounded-full bg-white text-blue-600 shadow-sm">
                                    {industry.icon}
                                </div>
                                <h3 className="text-lg font-semibold ">
                                    {industry.title}
                                </h3>
                                <p className="mt-2 text-center text-sm">{industry.description}</p>
                            </li>
                        ))}
                    </ul>
            </section>
        </main>
    );
};

export default IndustriesSection;
