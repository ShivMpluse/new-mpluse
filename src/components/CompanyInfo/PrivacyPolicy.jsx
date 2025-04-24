import React from "react";
import styled from "styled-components";
import PrivacyPolicyHero from "./PrivacyPolicyHero";
import privacyPolicyData from "./techData";


const PrivacyPolicy = () => {
    return (
        <>
            <PrivacyPolicyHero />
            <Section className="max-w-[1200px] mt-28 mx-auto px-4 ">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
                <ul>
                    {privacyPolicyData.map((section, index) => (
                        <li key={index} className="mb-6 flex flex-col gap-4">
                            <h2 className="text-xl font-[400] mb-2">{section.title}</h2>
                            {section.content.split("\n").map((line, i) => (
                                <p key={i} className="mb-2 whitespace-pre-wrap">{line}</p>
                            ))}
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