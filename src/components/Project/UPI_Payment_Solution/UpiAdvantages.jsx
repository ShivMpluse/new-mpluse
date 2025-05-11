/* eslint-disable no-unused-vars */
import { FaSyncAlt, FaBell, FaLock, FaShieldAlt } from "react-icons/fa";

const advantages = [
    {
      icon: FaSyncAlt,
      title: "Dynamic QR",
      desc: "Generate unique QR codes for each transaction with custom amount and reference ID.",
      color: "bg-blue-100 text-blue-500",
    },
    {
      icon: FaBell,
      title: "Instant Notification",
      desc: "Real-time webhooks and notifications for successful and failed transactions.",
      color: "bg-purple-100 text-purple-500",
    },
    {
      icon: FaLock,
      title: "Secure Data",
      desc: "End-to-end encryption with PCI DSS compliance for maximum security.",
      color: "bg-teal-100 text-teal-600",
    },
    {
      icon: FaShieldAlt,
      title: "99.9% Uptime",
      desc: "Reliable infrastructure with high availability and redundancy built-in.",
      color: "bg-yellow-100 text-yellow-500",
    },
];

export default function UpiAdvantages() {
  return (
    <div class="">
      <section className="max-w-[1200px] mx-auto py-16 px-6  text-center ">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Mpluse UPI API Advantages</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto ">
          {advantages.map(({ icon: Icon, title, desc, color }, i) => (
            <li key={i} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl duration-500 animation">
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
