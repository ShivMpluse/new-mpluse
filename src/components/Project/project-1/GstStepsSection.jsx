import React from "react";


const steps = [
    {
        icon: "📝",
        title: "Submit GSTIN",
        description: "Enter the GST number through our API or dashboard interface.",
        bgColor: "bg-blue-100",
    },
    {
        icon: "🔄",
        title: "Fetch Details",
        description: "Our system securely connects to GSTN and retrieves all relevant information.",
        bgColor: "bg-purple-100",
    },
    {
        icon: "✅",
        title: "Verify Instantly",
        description: "Get immediate verification results with complete business details in seconds.",
        bgColor: "bg-cyan-100",
    },
];


const GstStepsSection = ({
    mainbg,
    mainHeading,
    card,
    iconbg,
    cardTitle,
    cardDesign


}) => {

    return (
            <main className={`w-full ${mainbg}`}>
                <section className={`py-16 max-w-[1200px] mx-auto text-center`}>
                    <h2 className={`text-3xl font-bold  mb-12 ${mainHeading}`}>
                        Simple 3-Step Process
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
                        {steps.map((step, index) => (
                            <li key={index} className={`${cardDesign} ${card} flex flex-col justify-center items-center`}>
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl ${step.bgColor} ${iconbg}`}>
                                    {step.icon}
                                </div>
                                <h3 className={`mt-6 text-xl font-semibold text-gray-900 ${cardTitle}`}>{step.title}</h3>
                                <p className="mt-2  max-w-xs">{step.description}</p>
                            </li>
                        ))}
                    </ul>
            </section>
        </main>
    );
};

export default GstStepsSection;
