import React from "react";
import { gstBenefits } from '../../CompanyInfo/GstBenifits'

const GstBenefits = ({
    sectionbg,
    cardbg,
    cardPara,
    mainHeading
}) => {

    const cardDesign = "shadow-pink-500/70 border border-pink-500/20 rounded-lg shadow-md p-6 max-w-sm mx-auto hover:shadow-xl animation-all duration-500 hover:scale-105"

    return (
        <div class={` w-full ${sectionbg}`}>
            <section className={`py-12 max-w-[1200px] mx-auto text-center `}>
                <h2 className={`text-3xl font-bold  mb-10 ${mainHeading}`}>
                    Why GST Verification Matters
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 px-4">
                    {gstBenefits.map((item, index) => (
                        <li
                            key={index}
                            className={`py-8 ${cardDesign} ${cardbg}`}
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className={` ${cardPara}`}>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default GstBenefits;
