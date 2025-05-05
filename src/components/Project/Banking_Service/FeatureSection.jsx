import { FaRegCreditCard } from "react-icons/fa";
import { MdVerified, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";

const features = [
  {
    title: "Open Digital Bank Accounts",
    description: "Create and manage digital bank accounts with full KYC compliance.",
    icon: <MdOutlineAccountBalanceWallet className="text-3xl text-blue-600" />
  },
  {
    title: "Real-time UPI & IMPS Payments",
    description: "Process instant payments with India's leading payment networks.",
    icon: <BsCurrencyRupee className="text-3xl text-blue-600" />
  },
  {
    title: "PAN/Aadhaar KYC",
    description: "Seamless identity verification with regulatory compliance.",
    icon: <MdVerified className="text-3xl text-yellow-500" />
  },
  {
    title: "Prepaid Card Issuance",
    description: "Issue branded prepaid cards for your customers with full control.",
    icon: <FaRegCreditCard className="text-3xl text-indigo-500" />
  },
  {
    title: "Lending APIs",
    description: "Integrate loan origination, disbursement and collection flows.",
    icon: <HiOutlineBanknotes className="text-3xl text-yellow-400" />
  },
  {
    title: "Prepaid Card Issuance",
    description: "Issue branded prepaid cards for your customers with full control.",
    icon: <FaRegCreditCard className="text-3xl text-indigo-500" />
  }
];

const FeatureSection = ({mainbg, cardDesign}) => {
    return (
        <div className={`${mainbg} py-12`}>
            <section class="max-w-[1200px] mx-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Core Features of Mpluse BaaS
                    </h2>
                    <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <li key={index} className={`${cardDesign} bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-500`}>
                                <div className="mb-4 flex justify-center">{feature.icon}</div>
                                <h3 className="text-lg font-semibold mb-2 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default FeatureSection;
