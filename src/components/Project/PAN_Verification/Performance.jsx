import React, { useEffect, useState } from "react";
import { FaUsers, FaStopwatch, FaShieldAlt } from "react-icons/fa";

const countersData = [
  {
    id: "pan",
    icon: <FaUsers className="text-4xl text-blue-500" />,
    label: "PAN Cards Verified",
    unit: "M+",
    target: 5000000,
    divider: 1000000,
    suffix: "M+",
  },
  {
    id: "response",
    icon: <FaStopwatch className="text-4xl text-purple-500 " />,
    label: "Avg Response Time",
    unit: "s",
    target: 2000, // ms
    divider: 1000,
    prefix: "<",
    suffix: "s",
  },
  {
    id: "uptime",
    icon: <FaShieldAlt className="text-4xl text-green-500 " />,
    label: "Uptime Guarantee",
    unit: "%",
    target: 999,
    divider: 10,
    suffix: "%",
  },
];

const Performance = () => {
    const [counts, setCounts] = useState({});

    useEffect(() => {
        countersData.forEach((item) => {
        let count = 0;
        const step = item.target / 100;

        const interval = setInterval(() => {
            count += step;
            if (count >= item.target) {
            count = item.target;
            clearInterval(interval);
            }
            setCounts((prev) => ({
            ...prev,
            [item.id]: Math.round(count),
            }));
        }, 20);
        });
    }, []);

    return (
        <div class="bg-blue-100 py-12">
            <section className=" max-w-[1200px] mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Trusted Validation Performance
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 px-4">
                    {countersData.map((item) => (
                        <li
                            key={item.id}
                            className="bg-white rounded-xl shadow-md p-6 transition hover:scale-105 duration-500"
                        >
                            <div className="mb-2 text-center flex justify-center">{item.icon}</div>
                            <div className="text-2xl font-bold">
                                {item.prefix || ""}
                                {(counts[item.id] || 0) / item.divider < 1
                                    ? "0"
                                    : ((counts[item.id] || 0) / item.divider).toFixed(1)}
                                {item.suffix}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">{item.label}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Performance;
