/* eslint-disable no-unused-vars */
import { FaBolt, FaLock, FaClock } from 'react-icons/fa';
import upi from '/image/upi-solution.png'

const benefits = [
    { icon: FaBolt, title: 'Instant Settlements', desc: 'Funds credited within seconds.', color: 'bg-blue-500' },
    { icon: FaLock, title: 'Secure Transactions', desc: 'End-to-end encrypted with MFA.', color: 'bg-purple-500' },
    { icon: FaClock, title: '24x7 Availability', desc: 'Accept anytime, even on holidays.', color: 'bg-teal-500' },
];

export default function Why() {
    return (
        <div class="bg-blue-50 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Why Accept UPI Payments?</h2>
            <section className="max-w-[1200px] mx-auto  py-14 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                <ul className="space-y-6 max-w-xl">
                    {benefits.map(({ icon: Icon, title, desc, color }, i) => (
                        <li key={i} className="flex items-start gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color} text-white`}>
                                <Icon size={18} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">{title}</h4>
                                <p className="text-gray-600 text-sm">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <img src={upi} alt="UPI QR" className="w-52 md:w-64 border-4 border-blue-700 rounded-lg" />
            </section>
        </div>
    );
}
