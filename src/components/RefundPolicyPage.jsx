// import { div } from "framer-motion"; // No need to import 'section' from 'framer-motion/client'

import styled from "styled-components";
import RefundHeroSection from "./RefundHeroSection";

function RefundPolicyPage() {
    const refundPolicy = [
        {
            id: 1,
            title: "1. Purpose",
            content: "This Refund Policy is designed to outline the circumstances and process under which refunds may be initiated for digital infrastructure services offered by Mpluse Fintech. Our objective is to maintain full transparency, customer trust, and legal clarity for all merchants, partners, and users of our platform."
        },
        {
            id: 2,
            title: "2. Scope of Services",
            content: "Mpluse Fintech is a technology platform that provides API-based payment infrastructure, virtual account services, payout and collection dashboards, and white-labeled SaaS solutions. We operate in partnership with licensed banks, NBFCs, and payment aggregators. Mpluse Fintech does not act as a financial institution or payment aggregator and does not hold any user funds directly."
        },
        {
            id: 3,
            title: "3. Refund Eligibility",
            content: "Refunds are only applicable when a technical failure in our system results in non-delivery of services or when a duplicate charge is identified. Refunds are not issued for user-side mistakes, configuration errors, or consumption of services already rendered. Any refund is strictly subject to verification of logs and compliance review."
        },
        {
            id: 4,
            title: "4. How to Request a Refund",
            content: "To initiate a refund, clients must email support@mpluse.in within 3 working days of the transaction. The email must include transaction ID, merchant reference, screenshot or API log, and a short explanation. Failure to provide required documentation may result in rejection of the request."
        },
        {
            id: 5,
            title: "5. Processing Timeline",
            content: "Once approved, refunds are processed within 5 to 7 business days and credited back to the original source of payment (wallet or bank account). No cash refunds or alternate destination transfers are permitted."
        },
        {
            id: 6,
            title: "6. Non-Refundable Scenarios",
            content: "Refunds are not applicable if the issue arises due to third-party bank failure, internet disruption, merchant system misconfiguration, late dispute submission (beyond 3 days), or breach of terms by the user or merchant."
        },
        {
            id: 7,
            title: "7. Dispute Resolution",
            content: "All refund-related disputes shall be handled by Mpluse Fintech’s internal compliance and legal team. The team will review logs, transaction data, and communications before taking a final decision. Merchants can escalate the issue to legal@mpluse.in for review."
        },
        {
            id: 8,
            title: "8. Risk Disclaimer",
            content: "By using Mpluse Fintech’s platform, the merchant agrees that all transactions are processed using integrated APIs and backend infrastructures. Delays or failures caused by banking partners, network outages, or system downtime do not constitute grounds for automatic refund. Each request will be treated on a case-by-case basis with full investigation."
        },
        {
            id: 9,
            title: "9. Legal Framework",
            content: "Information Technology Act, 2000 | Digital Personal Data Protection Act, 2023 | Indian Contract Act, 1872"
        },
        {
            id: 10,
            title: "10. Updates & Amendments",
            content: "Mpluse Fintech reserves the right to modify this policy at any time to remain compliant with legal updates or operational needs. The latest version of this policy will always be available on our website and dashboard."
        }
    ];

    return (
        <>
            <RefundHeroSection />
            <Section className="mt-20 max-w-[1200px] mx-auto p-4">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Refund Policy</h1>
                <ul>
                    {refundPolicy.map(section => (
                        <li key={section.id} className="mt-10 mb-6">
                            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                            <p className="text-gray-700">{section.content}</p>
                        </li>
                    ))}
                </ul>

                {/* Contact Info Section */}
                <div className="mt-16">
                    <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                    <ul className="text-gray-700 list-disc p-4">
                        <li> support@mpluse.in</li>
                        <li> legal@mpluse.in</li>
                        <li> 011-69046382</li>
                    </ul>
                </div>
        </Section> 
        </>
        
    );
}

export default RefundPolicyPage;

const Section = styled.section `
    background-color: #eaf0f9d6;
`
