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


const GstStepsSection = () => {


    


    return (
        <section className="py-16 max-w-[1200px] mx-auto text-center">
            <main>
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    Simple 3-Step Process
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                    {steps.map((step, index) => (
                    <li key={index} className="flex flex-col items-center px-4 py-10 bg-white hover:shadow-2xl duration-500 hover:scale-105">
                        <div className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl ${step.bgColor}`}>
                            {step.icon}
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-gray-600 max-w-xs">{step.description}</p>
                    </li>
                    ))}
                </ul>
            </main>
        </section>
    );
};

export default GstStepsSection;
