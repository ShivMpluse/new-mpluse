import CountUp from 'react-countup';


const stats = [
    { value: 5, suffix: 'M+', label: 'Accounts Enabled', duration: 2 },
    { value: 99.9, suffix: '%', label: 'API Uptime', duration: 2, decimals: 1 },
    { value: 2, suffix: ' Sec', label: 'Avg. Transaction Time', duration: 1.5 },
];


const StatSection = () => {
    return (
        <section class="bg-blue-100">
            <section className="py-20 px-4 ">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-12">
                    Scale with Confidence
                    </h2>

                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <li key={index} className="bg-[#ffffff] p-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 duration-500">
                                <div className="text-3xl font-bold text-[#4c8ef7]">
                                    <CountUp
                                    end={stat.value}
                                    duration={stat.duration}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals || 0}
                                    />
                                </div>
                                <p className="text-[#1e3a5f] mt-2">{stat.label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
    );
};

export default StatSection;
