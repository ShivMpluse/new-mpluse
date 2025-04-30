import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const ComplianceBadges = ({
    mainbg,
    cardDesign
}) => {


    const compliances = [
        {
            title: "DPDP Act Compliant",
            bgColor: "bg-blue-100",
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        },
        {
            title: "PCI DSS Secure",
            bgColor: "bg-purple-100",
            icon: <Lock className="w-8 h-8 text-purple-600" />,
        },
        {
            title: "RBI Standards",
            bgColor: "bg-teal-100",
            icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
        },
    ];

    return (
        <div class={`${mainbg}`}>
            <section className="max-w-[1200px] mx-auto py-12 text-center">
                <h2 className="text-2xl font-bold ">
                    Certified, Compliant, and Secure
                </h2>

                <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-20 max-w-[1000px] mx-auto justify-between">
                    {compliances.map((item, index) => (
                        <li
                            key={index}
                            className={`${cardDesign} min-w-[200px] flex flex-col justify-center items-center gap-4 ${compliances.icon} text-xl`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.title}</span>
                        </li>
                        ))}
                </ul>
            </section>
        </div>
    );
};

export default ComplianceBadges;
