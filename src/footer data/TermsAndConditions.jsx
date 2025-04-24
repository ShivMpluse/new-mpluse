// src/pages/TermsAndConditions.jsx
import React from "react";
import termsData from "./term&cond";
import styled from "styled-components";
import TermAndConditionHero from "./TermAndConditionHero";

const TermsAndConditions = () => {
    return (
        <>
            <TermAndConditionHero />
            <Section className="p-6 my-18 h-scree mx-auto text-gray-800 max-w-[1200px]">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center capitalize">term & condition</h1>
                <ul className=" mx-auto px-4 py-8 ">
                    {termsData.map((section, index) => (
                        <li key={index} className=" flex flex-col justify-center items-start  mb-4">
                            <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>
                            <p className="mb-4 text-justify">{section.content}</p>
                        </li>
                    ))}
                    </ul>
            </Section>
        </>
        
    );
};

export default TermsAndConditions;

const Section = styled.section`
    background-color: #eaf0f9d6;
`