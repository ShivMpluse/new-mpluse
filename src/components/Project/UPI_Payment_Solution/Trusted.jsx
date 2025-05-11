import CountUp from 'react-countup';

const stats = [
    { value: 5, unit: 'Million+', label: 'Transactions Processed Monthly', color: 'text-blue-600' },
    { value: 2, unit: 'Seconds', label: 'Average Confirmation Time', color: 'text-purple-500' },
    { value: 99.9, unit: '%', label: 'System Uptime', color: 'text-teal-500' },
    { value: 500, unit: '+', label: 'Enterprise Clients', color: 'text-orange-500' },
];

export default function Trusted() {
    return (
        <div className="bg-white">
            <section className="max-w-[1200px] mx-auto py-16 px-4 text-center">
                <h2 className="text-3xl font-bold mb-12 text-[#0d1b3e]">Trusted Performance</h2>
                <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <li key={index} className="bg-white rounded-xl shadow-md p-6">
                            <div className={`text-3xl font-bold ${item.color}`}>
                                <CountUp end={item.value} duration={2} />
                            </div>
                            <div className="font-semibold text-[#0d1b3e]">{item.unit}</div>
                            <div className="text-gray-600 text-sm mt-1">{item.label}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
