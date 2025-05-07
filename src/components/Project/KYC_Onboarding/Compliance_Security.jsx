import React from "react";
import { FaShieldAlt, FaLock, FaClipboardCheck, FaFileContract, FaGavel, FaHistory } from "react-icons/fa";

const complianceItems = [
    {
        icon: FaShieldAlt,
        title: "RBI KYC Master Directions",
        description: "Fully aligned with the latest RBI guidelines for KYC processes.",
    },
    {
        icon: FaFileContract,
        title: "DPDP Act 2023",
        description: "Compliant with the Digital Personal Data Protection Act for secure data handling.",
    },
    {
        icon: FaGavel,
        title: "IT Act 2000",
        description: "Adherence to Information Technology Act provisions for digital transactions.",
    },
];

const securityItems = [
    {
        icon: FaLock,
        title: "End-to-End Encryption",
        description: "All personally identifiable information (PII) is encrypted during transit and storage.",
    },
    {
        icon: FaClipboardCheck,
        title: "Consent Management",
        description: "Comprehensive consent capture and management system for all user data.",
    },
    {
        icon: FaHistory,
        title: "Audit Trails",
        description: "Comprehensive logging and audit trails for all verification activities.",
    },
];

const Compliance_Security = () => {
    return (
        <div class="bg-blue-50">
            <section className="max-w-[1200px] mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Compliance & Security</h2>
                <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                    We prioritize regulatory compliance and data security in everything we do.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* Compliance Box */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-4 text-left">Regulatory Compliance</h3>
                        {complianceItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-4 mb-4">
                                    <Icon className="text-blue-500 mt-1" />
                                    <div className="text-left">
                                        <h4 className="font-medium">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Security Box */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-4 text-left">Data Security</h3>
                        {securityItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-start space-x-4 mb-4">
                                    <Icon className="text-blue-500 mt-1" />
                                    <div className="text-left">
                                        <h4 className="font-medium">{item.title}</h4>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Compliance_Security;
