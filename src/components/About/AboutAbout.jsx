import React from "react";

const AboutAbout = () => {
    const cards = [
        {
        title: "What We Do",
        points: [
            "Payouts & Collections (UPI, QR, etc.)",
            "KYC & Customer Onboarding",
            "Transaction Monitoring",
            "Agent Payments, Lending, Gaming Rewards & More",
        ],
        },
        {
        title: "Platform Highlights",
        points: [
            "Real-time APIs",
            "Virtual Accounts & UPI IDs",
            "Automated Retry System",
            "Secure Webhook Engine",
            "White-labeled Merchant Dashboards",
            "Developer-friendly Documentation",
        ],
        },
        {
        title: "Our Mission",
        points: [
            "Fintech ko simple, fast aur accessible banana — taaki aap sirf integrate na karein, balki scale bhi karein.",
        ],
        },
        {
        title: "Compliance Note",
        points: [
            "Mpluse Fintech sirf ek technology service provider hai.",
            "Hum end-user funds hold ya store nahi karte.",
            "Saare operations RBI-regulated partners ke through hote hain.",
            "Full compliance with IT Act, DPDP Act & Indian Contract Act.",
        ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
            About Mpluse Fintech
        </h1>
        <p className="text-center text-lg max-w-3xl mx-auto text-gray-600 mb-10">
            Mpluse is a tech-driven fintech enabler that helps businesses launch
            branded digital finance services — without code, license, or regulatory
            headache.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
            <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition"
            >
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                {card.title}
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
    );
};

export default AboutAbout;
