import { FaShieldAlt, FaLock, FaClipboardList, FaCheck } from "react-icons/fa";

const items = [
    { icon: <FaShieldAlt className="text-blue-600" />, label: "DPDP 2023" },
    { icon: <FaLock className="text-blue-600" />, label: "PCI DSS" },
    { icon: <FaClipboardList className="text-blue-600" />, label: "Consent Flow" },
];

export default function Compliance() {
    return (
        <div class="bg-blue-50">
            <section className="max-w-[1200px] mx-auto py-18 text-center">
                <h2 className="text-3xl font-bold mb-4">Compliance Ready</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    Built with DPDP 2023 compliance, PCI DSS encryption, and real-time consent capture flow for data protection and regulatory trust.
                </p>

                <ul className="flex flex-wrap justify-center gap-4 mb-10">
                    {items.map(({ icon, label }, i) => (
                        <li key={i} className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-xl hover:shadow-lg duration-300 animation">
                            {icon}
                            <span className="font-medium">{label}</span>
                        </li>
                    ))}
                </ul>

                <div className="inline-block p-6 bg-white rounded-full shadow-md">
                    <FaShieldAlt className="text-blue-500 text-4xl" />
                </div>
            </section>
        </div>
    );
}
