import React, { useState, useEffect } from 'react';

const StatsSection = ({
    mainbg,
    cardDesign
}) => {

    const statsData = [
        {
            label: 'GSTINs Verified',
            target: 1000000,
            suffix: 'M+',
            color: 'text-blue-500',
            isAnimated: true,
        },
        {
            label: 'Response Time',
            staticValue: '<0s',
            color: 'text-purple-500',
            isAnimated: false,
        },
        {
            label: 'Uptime',
            target: 99.9,
            suffix: '%',
            color: 'text-cyan-500',
            isAnimated: true,
        },
    ];

    const [counts, setCounts] = useState(
        statsData.map((stat) => (stat.isAnimated ? 0 : stat.staticValue))
    );

    useEffect(() => {
        const interval = setInterval(() => {
        setCounts((prevCounts) =>
            prevCounts.map((count, index) => {
            const stat = statsData[index];

            if (!stat.isAnimated) return count;

            const increment = stat.target > 100 ? stat.target / 100 : 0.5;
            const newCount = parseFloat(count) + increment;

            if (newCount >= stat.target) return stat.target;
            return parseFloat(newCount.toFixed(1));
            })
        );
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div class={`${mainbg}`}>
            <section className="max-w-[1200px] mx-auto py-16 text-center">
                <h2 className="text-2xl font-bold mb-10">Reliable at Scale</h2>

                <ul className="flex flex-wrap justify-center gap-6">
                    {statsData.map((stat, index) => (
                        <li
                            key={index}
                            className={`${cardDesign} min-w-[220px]`}
                        >
                            <div className={`text-3xl font-bold ${stat.color}`}>
                                {stat.isAnimated ? (
                                    <>
                                    {stat.target >= 1000000
                                        ? Math.floor(counts[index] / 1000000) + stat.suffix
                                        : counts[index] + stat.suffix}
                                    </>
                                ) : (
                                    stat.staticValue
                                )}
                            </div>
                            <div className="mt-2  text-sm">{stat.label}</div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default StatsSection;
