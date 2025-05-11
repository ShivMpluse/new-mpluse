/* eslint-disable no-unused-vars */
import { FaPlus, FaMobileAlt, FaCheck } from "react-icons/fa";

const steps = [
  {
    icon: FaPlus,
    title: "Generate QR",
    desc: "Create dynamic or static QR codes through our API for your customers to scan.",
    color: "text-blue-500",
    underline: "bg-blue-400",
  },
  {
    icon: FaMobileAlt,
    title: "Scan & Pay",
    desc: "Customer scans the QR code with any UPI app and completes the payment.",
    color: "text-purple-500",
    underline: "bg-purple-400",
  },
  {
    icon: FaCheck,
    title: "Confirm Instantly",
    desc: "Receive real-time confirmation and settlement directly to your account.",
    color: "text-teal-500",
    underline: "bg-teal-400",
  },
];

export default function UPI_Steps() {
    return (
        <div class="bg-gray-50">
            <section className="max-w-[1200px] mx-auto py-14 px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-10">UPI in 3 Easy Steps</h2>
                <ul className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-10 max-w-6xl mx-auto">
                    {steps.map(({ icon: Icon, title, desc, color, underline }, i) => (
                        <li key={i} className="relative bg-white rounded-xl shadow-md hover:shadow-xl duration-500 animation p-6 flex-1">
                            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${color} bg-opacity-10`}>
                                <Icon className={`${color} text-xl`} />
                            </div>
                                <h4 className="font-semibold mt-4 text-lg">{title}</h4>
                                <p className="text-gray-600 text-sm mt-1">{desc}</p>
                            <div className={`h-1 w-full mt-6 ${underline} rounded-b-xl`} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
