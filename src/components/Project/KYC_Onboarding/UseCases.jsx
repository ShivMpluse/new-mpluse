import React from "react";
import { FaMoneyBillWave, FaUserAlt, FaBuilding, FaUsers } from "react-icons/fa";

const useCases = [
  {
    icon: FaMoneyBillWave,
    title: "NBFC Onboarding",
    description:
      "Streamline customer onboarding for NBFCs with compliant KYC processes that reduce drop-offs.",
  },
  {
    icon: FaUserAlt,
    title: "Gig Economy Worker KYC",
    description:
      "Quickly verify delivery partners and service providers while maintaining regulatory compliance.",
  },
  {
    icon: FaBuilding,
    title: "SME Merchant Onboarding",
    description:
      "Simplify merchant verification for payment platforms and B2B marketplaces.",
  },
  {
    icon: FaUsers,
    title: "B2B Platform Identity Checks",
    description:
      "Verify business identities and authorized representatives for B2B platforms.",
  },
];

const UseCases = () => {
    return (
        <div class="bg-white">
            <div className="max-w-[1200px] mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-2">Use Cases</h2>
                <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                    Our KYC solutions are tailored for various industries and business needs.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {useCases.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                            key={index}
                            className="bg-blue-50 shadow-lg p-6 rounded-lg text-left hover:shadow-2xl transition-shadow duration-500"
                            >
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                                    <Icon className="text-blue-500 text-xl" />
                                </div>
                                <h3 className="font-semibold text-md mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default UseCases;
