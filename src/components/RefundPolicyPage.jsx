// import { div } from "framer-motion"; // No need to import 'section' from 'framer-motion/client'

import styled from "styled-components";
import RefundHeroSection from "./RefundHeroSection";
import refundPolicy from "./refundPolicy";

function RefundPolicyPage() {
    

    return (
        <>
            <RefundHeroSection />
            <Section className="max-w-[1200px] mx-auto mt-18">
                <h2 className="text-3xl font=[400] capitalize text-center py-10">refund policy</h2>
                {refundPolicy.map((section) => (
                    <div key={section.id} className="policy-section mb-6">
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>

                        {/* Check if content is an array (like section 2) */}
                        {Array.isArray(section.content) ? (
                            <ul className="list-disc pl-5">
                                {section.content.map((item) => (
                                    <li key={item.id} className="text-justify">{item.content}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-700 text-justify">{section.content}</p>
                        )}

                        {/* Optional: for description */}
                        {section.description && (
                            <p className="mt-2 text-sm text-gray-600 text-justify">{section.description}</p>
                        )}

                        {/* Optional: for points array like section 6 */}
                        {section.point && (
                            <ul className="list-disc pl-5 mt-2">
                                {section.point.map((item) => (
                                    <li key={item.id} className="text-justify">{item.content}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </Section>
        </>
        
    );
}

export default RefundPolicyPage;

const Section = styled.section `
    background-color: #eaf0f9d6;
`
