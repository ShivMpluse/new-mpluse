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
    <div class="bg-[#d6eefa] py-12">
      <section className="max-w-[1200px] mx-auto  px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Certified & Secure</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {certifications.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 hover:shadow-red-700 shadow-md rounded-xl p-6 hover:shadow-2xl transition hover:scale-105 duration-500 "
              style={{
                clipPath: "polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)"
              }}
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
