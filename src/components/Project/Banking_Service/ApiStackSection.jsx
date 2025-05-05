const apis = [
    "KYC API",
    "Accounts API",
    "Payments API",
    "Cards API",
    "Lending API"
];

const ApiStackSection = () => {
    return (
        <div class="bg-[#ebeafc] ">
            <section className="py-20 max-w-[1200px] mx-auto px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4">
                    {/* Left Text */}
                    <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
                        Pick What You Need
                    </h2>
                    <p className="text-gray-700 text-base">
                        Use only the APIs you need – KYC, Lending, Accounts, Cards or full stack.
                    </p>
                    </div>

                    {/* Right API Stack */}
                    <div className="flex justify-center md:justify-end">
                        <div className="flex flex-col gap-3">
                            {apis.map((api, index) => (
                                <button
                                    key={index}
                                    className={`px-6 py-2 rounded-md text-white shadow-md text-sm font-semibold ${
                                    index === 0
                                        ? "bg-blue-600"
                                        : "bg-blue-400 text-blue-800 hover:bg-blue-200 transition"
                                    }`}
                                >
                                    {api}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ApiStackSection;
