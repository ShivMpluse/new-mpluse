import React from "react";

const disclaimerData = [
    {
        title: "Our Technology Role",
        icon: "✅",
        content:
        "Mpluse is a technology infrastructure provider. We offer APIs, virtual account systems, and white-label panels that help other platforms manage digital financial workflows (like payouts, collections, etc.). We do NOT process or store user money. All transactions are powered by regulated banks and NBFCs we partner with.",
    },
    {
        title: "What We Don’t Do",
        icon: "❌",
        content:
        "Mpluse is not a bank, wallet company, NBFC, or payment gateway. We are not licensed by RBI or NPCI and do not offer regulated services directly. All funds and financial operations are handled by compliant partners.",
    },
    {
        title: "Legal Frameworks Covered",
        icon: "⚖️",
        content:
        "IT Act, 2000: Ensures cybersecurity and legal use of software systems.\nDPDP Act, 2023: Data protection law covering user privacy, consent, and security.\nContract Act, 1872: All agreements with users/partners are contractually governed.",
    },
    {
        title: "User & Partner Responsibilities",
        icon: "🤝",
        content:
        "We provide services only to KYC-verified and contract-bound businesses.\nYou must follow legal rules of your integrated financial partner.\nYou are responsible for customers, operations, and any complaints or disputes.\nYou must use the system only for authorized, legal purposes.",
    },
    {
        title: "Grievance Contact",
        icon: "📩",
        content:
        "Grievance Officer – Mpluse Fintech Pvt. Ltd.\nEmail: support@mpluse.in\nPhone: 011-69046382\nOffice: Lucknow, Uttar Pradesh, India",
    },
    {
        title: "Effective Date & Review",
        icon: "📅",
        content:
        "This disclaimer is version 1.1 and was last reviewed on April 18, 2025. We may update it without prior notice.\nApproved by: Siddharth Maurya, Founder & Director",
    },
];

const DisclaimerPage = () => {  
    return (
        <div className="max-w-[1200px] mt-28 mx-auto px-4 py-10 ">
        <h1 className="text-3xl font-bold mb-6">Legal Disclaimer - Mpluse Fintech Private Limited</h1>

        {disclaimerData.map((section, index) => (
            <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
                {section.icon} {section.title}
            </h2>
            {section.content.split("\n").map((line, i) => (
                <p key={i} className=" leading-relaxed">
                {line}
                </p>
            ))}
            </div>
        ))}

        <div className="mt-10 border-t border-gray-700 pt-4 text-sm ">
            &copy; 2025 Mpluse Fintech Private Limited. All rights reserved.
        </div>
        </div>
    );
};

export default DisclaimerPage;
