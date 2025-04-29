import React from "react";
import { gstBenefits } from '../../CompanyInfo/GstBenifits'

const GstBenefits = () => {
    return (
        <section className="py-12 max-w-[1200px] mx-auto bg-[#f5f8fc] text-center">
            <h2 className="text-3xl font-bold text-[#1f1f1f] mb-10">
                Why GST Verification Matters
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-4">
                {gstBenefits.map((item, index) => (
                    <li
                        key={index}
                        className="py-8 bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-2xl animation-all duration-500 hover:scale-105"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GstBenefits;
