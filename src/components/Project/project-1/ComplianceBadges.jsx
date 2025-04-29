import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const ComplianceBadges = () => {
    const compliances = [
        {
        title: "DPDP Act Compliant",
        bgColor: "bg-blue-100",
        icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
        },
        {
        title: "PCI DSS Secure",
        bgColor: "bg-purple-100",
        icon: <Lock className="w-5 h-5 text-purple-600" />,
        },
        {
        title: "RBI Standards",
        bgColor: "bg-teal-100",
        icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
        },
    ];

    return (
        <section className="max-w-[1200px] mx-auto py-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
                Certified, Compliant, and Secure
            </h2>

            <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-20 max-w-[1000px] mx-auto justify-between">
                {compliances.map((item, index) => (
                <li
                    key={index}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-sm ${item.bgColor} min-w-[200px]`}
                >
                    {item.icon}
                    <span className="text-slate-700 font-medium">{item.title}</span>
                </li>
                ))}
            </ul>
        </section>
    );
};

export default ComplianceBadges;
