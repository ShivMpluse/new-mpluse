import React from "react";
import styled from "styled-components";
import PrivacyPolicyHero from "./PrivacyPolicyHero";

const privacyData = [
    {
        id: 1,
        title: "Purpose & Scope",
        content: [
        "This Privacy Policy is created to provide full transparency about how Mpluse Fintech collects, stores, protects, and uses user data.",
        "Applies to: website visitors, merchants using our dashboard/APIs, clients integrating our tech.",
        "Aligned with: Information Technology Act, 2000 and DPDP Act, 2023."
        ]
    },
    {
        id: 2,
        title: "What Data We Collect",
        content: [
        "Login/session logs (IP address, device, timestamp)",
        "KYC metadata (if submitted)",
        "Browser details, usage logs, activity flow",
        "Business identifiers (PAN, GST, UDYAM if required)"
        ]
    },
    {
        id: 3,
        title: "Why We Collect It",
        content: [
        "Authenticate users and secure access",
        "Transaction monitoring and analytics",
        "Fraud detection and audit trail",
        "Compliance with legal and financial partners"
        ]
    },
    {
        id: 4,
        title: "Data Sharing & Retention",
        content: [
        "Shared only with regulated financial partners or legal authorities if necessary",
        "Never sold or used for marketing",
        "Retention period: 2–5 years depending on legal needs"
        ]
    },
    {
        id: 5,
        title: "Data Deletion Requests",
        content: [
        "Requests allowed from verified merchants/users",
        "Not processed if data is under investigation or legal hold"
        ]
    },
    {
        id: 6,
        title: "Your Consent & Rights",
        content: [
        "By using Mpluse, you consent to this policy",
        "You can request view, correction, or deletion of your data"
        ]
    },
    {
        id: 7,
        title: "Updates to This Policy",
        content: [
        "Policy may change with new laws or tech changes",
        "Latest effective date will be shown"
        ]
    },
    {
        id: 8,
        title: "Contact, Grievance & Compliance",
        content: [
        "Name: Grievance cum Nodal Officer",
        "Email: legal@mpluse.in",
        "Helpline: 011 69046382",
        "Address: Mpluse Fintech Pvt. Ltd., Lucknow, UP"
        ]
    }
];

const PrivacyPolicy = () => {
    return (
        <>
            <PrivacyPolicyHero />
            <Section className="max-w-[1200px] mt-28 mx-auto px-4 ">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
                    <ul>
                        {privacyData.map((section) => (
                            <li key={section.id} className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                                <ul className="list-disc list-inside space-y-1">
                                    {section.content.map((point, index) => (
                                    <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    
            </Section>
        </>
        
    );
};

export default PrivacyPolicy;

const Section = styled.section `
    background-color: #eaf0f9d6;
`