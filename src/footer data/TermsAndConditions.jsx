// src/pages/TermsAndConditions.jsx
import React from "react";
import termsData from "./term&cond";

const TermsAndConditions = () => {
    return (
        <section className="p-6 my-18 h-scree mx-auto text-gray-800 max-w-[1200px]">
            <ul className=" mx-auto px-4 py-8 ">
                {termsData.map((section, index) => (
                    <li key={index} className=" flex flex-col justify-center items-start  mb-4">
                        <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>
                        <p className="mb-4">{section.content}</p>
                    </li>
                ))}
                </ul>
        </section>
    );
};

export default TermsAndConditions;
