import { IoShieldCheckmark } from "react-icons/io5";

const badges = ["RBI Ready", "PCI DSS", "DPDP 2023"];

const ComplianceSection = () => {
    return (
        <div className="bg-[#eaf2fb]">
            <section className="max-w-[1200px] mx-auto py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                        RBI-Compliant. DPDP-Safe.
                    </h2>

                    <ul className="flex flex-wrap items-center justify-center gap-4 mb-10">
                        {badges.map((badge, index) => (
                            <li
                                key={index}
                                className="bg-white text-[#1e3a5f] font-medium shadow-md rounded-full px-6 py-2 text-sm"
                            >
                                {badge}
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-500 p-4 rounded-xl shadow-lg">
                            <IoShieldCheckmark className="text-white text-4xl" />
                        </div>
                    </div>

                    <p className="text-[#555] text-base">
                        Every API is built with compliance, encryption, and data privacy at the core.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ComplianceSection;
