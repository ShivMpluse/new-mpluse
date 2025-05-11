/* eslint-disable no-unused-vars */
import { FaShoppingBag, FaMoneyBillWave, FaClipboardList, FaBriefcase } from "react-icons/fa";

const sectors = [
  {
    icon: FaShoppingBag,
    title: "E-commerce",
    desc: "Seamless checkout experience with instant payment confirmation for online stores.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaMoneyBillWave,
    title: "Loans & EMIs",
    desc: "Automated collection for loan repayments and EMI installments with scheduled reminders.",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: FaClipboardList,
    title: "Bill Payments",
    desc: "Utility bills, subscription fees, and recurring payments with automated reconciliation.",
    color: "bg-teal-100 text-teal-500",
  },
  {
    icon: FaBriefcase,
    title: "Freelancers",
    desc: "Quick invoicing and payment collection for freelancers and small businesses.",
    color: "bg-yellow-100 text-yellow-500",
  },
];

export default function BestSuited() {
    return (
        <div class="bg-blue-50">
            <section className="max-w-[1200px] mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">Best Suited For</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {sectors.map(({ icon: Icon, title, desc, color }, i) => (
                        <li key={i} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl duration-300">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${color}`}>
                                <Icon className="text-xl" />
                            </div>
                            <h4 className="font-semibold text-lg text-gray-900">{title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{desc}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
