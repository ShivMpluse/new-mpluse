import { FaRegCreditCard } from "react-icons/fa";
import { MdVerified, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { HiOutlineBanknotes } from "react-icons/hi2";

const features = [
  {
    title: "neobanks",
    description: "Launch digital-first banking experiences with complete backend support.",
    icon: <MdOutlineAccountBalanceWallet className="text-3xl text-blue-600" />
  },
  {
    title: "NBFCs",
    description: "Enhance lending operations with digital account management.",
    icon: <BsCurrencyRupee className="text-3xl text-blue-600" />
  },
  {
    title: "Insurance Apps",
    description: "Add premium collection and claim disbursement capabilities.",
    icon: <MdVerified className="text-3xl text-yellow-500" />
  },
  {
    title: "Fintech Lenders",
    description: "Streamline loan origination and servicing with integrated banking.",
    icon: <FaRegCreditCard className="text-3xl text-indigo-500" />
  },
  {
    title: "Gig Platforms",
    description: "Enable instant payments and financial services for gig workers.",
    icon: <HiOutlineBanknotes className="text-3xl text-yellow-400" />
  },
  {
    title: "NBFCs",
    description: "Enhance lending operations with digital account management.",
    icon: <BsCurrencyRupee className="text-3xl text-blue-600" />
  }
];

const Industries = ({mainbg, cardDesign}) => {
    return (
        <div className={`${mainbg} py-12`}>
            <section class="max-w-[1200px] mx-auto">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Industries We Empower
                    </h2>
                    <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <li key={index} className={`${cardDesign} bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 duration-500`}>
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

export default Industries;
