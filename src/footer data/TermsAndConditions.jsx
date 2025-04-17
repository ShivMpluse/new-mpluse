// src/pages/TermsAndConditions.jsx
import React from "react";
import termsData from "./term&cond";

const TermsAndConditions = () => {
    return (
        <section className="p-6 my-18 h-scree mx-auto text-gray-800 max-w-[1200px]">
            <div className="max-w-3xl mx-auto px-4 py-8 ">
                {termsData.map((section, index) => (
                    <div key={index} className=" flex flex-col justify-center items-start p-4 mb-4 bg-gray-50 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mt-6 mb-2">{section.title}</h2>
                        <p className="mb-4">{section.content}</p>
                    </div>
                ))}
                </div>
        </section>
    );
};

export default TermsAndConditions;
