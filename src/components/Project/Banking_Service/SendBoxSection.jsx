import sandboxImage from "/image/pc.png"; // image ko sahi path pe daalna hoga

const SendboxSection = () => {
    return (
        <section className="bg-white py-20 ">
            <div className="max-w-[1200px] px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between">
                
                {/* Left Content */}
                <div className="">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-4">
                        Test Before You Launch
                    </h2>
                    <p className="text-[#555] text-base mb-6">
                        Use our sandbox environment to test integrations with dummy data and full logs.
                    </p>
                    <button className="bg-[#4c8ef7] hover:bg-[#3a7be0] text-white font-semibold py-2 px-6 rounded shadow-md transition duration-200">
                        Get Sandbox Access
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src={sandboxImage}
                        alt="Sandbox Illustration"
                        className="max-w-xs w-full drop-shadow-md "
                    />
                </div>
            </div>
        </section>
    );
};

export default SendboxSection;
