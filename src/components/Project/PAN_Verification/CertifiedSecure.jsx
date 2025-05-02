import React from "react";
import { FaShieldAlt, FaLock, FaClipboardCheck } from "react-icons/fa";

const certifications = [
    {
        icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
        title: "Income Tax Dept. Source",
        description: "Direct integration with official government database.",
        bg: "bg-blue-50",
    },
    {
      icon: <FaLock className="text-purple-600 text-2xl" />,
      title: "PCI DSS Encryption",
      description: "Bank-grade security for all data transfers.",
      bg: "bg-purple-50",
    },
    {
      icon: <FaClipboardCheck className="text-green-600 text-2xl" />,
      title: "DPDP Act 2023 Ready",
      description: "Compliant with latest data protection regulations.",
      bg: "bg-green-50",
    },
];

const CertifiedSecure = () => {
  return (
    <div class="bg-[#edf5f9]">
      <section className="max-w-[1200px] mx-auto py-16 px-4 md:px-20  text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Certified & Secure</h2>
        <ul className="grid gap-6 md:grid-cols-3">
          {certifications.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4 ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CertifiedSecure;
