import React from "react";

// advantagesData.js
const advantages = [
    {
        icon: "⚡",
        title: "Real-Time Verification",
        description: "Get instant verification results with sub-second response times.",
        bgColor: "bg-blue-100",
    },
    {
        icon: "🔒",
        title: "Secure Encryption",
        description: "End-to-end encryption ensures your data remains protected at all times.",
        bgColor: "bg-purple-100",
    },
    {
        icon: "💻",
        title: "API-First Design",
        description: "Built for developers with RESTful APIs that integrate seamlessly with your systems.",
        bgColor: "bg-cyan-100",
    },
    {
        icon: "📦",
        title: "GSTN Direct Fetch",
        description: "Direct integration with GSTN ensures accurate and up-to-date information.",
        bgColor: "bg-blue-100",
    },
];


const AdvantagesSection = ({
    mainbg,
    mainHeading,
    cardDesign
}) => {


    return (
        <div class={`${mainbg}`}>
            <section className={`max-w-[1200px] mx-auto py-16 px-6 ${mainbg}`}>
                <h2 className={`text-3xl font-bold text-center text-gray-900 mb-12 ${mainHeading}`}>
                    Core Advantages
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {advantages.map((adv, index) => (
                        <li
                            key={index}
                            className={`${cardDesign}`}
                        >
                            <div
                            className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-2xl ${adv.bgColor}`}
                            >
                            {adv.icon}
                            </div>
                            <h3 className="mt-4 text-lg font-semibold text-gray-900">
                            {adv.title}
                            </h3>
                            <p className="mt-2  text-sm">{adv.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdvantagesSection;
