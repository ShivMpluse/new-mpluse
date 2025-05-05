import { FaArrowRight } from "react-icons/fa";
import { FaServer, FaPlug, FaRegCheckCircle } from "react-icons/fa";

const steps = [
  {
    number: 1,
    title: "Choose your modules",
    description: "Select the banking services you want to offer.",
    icon: <FaServer className="text-blue-500 text-3xl" />,
  },
  {
    number: 2,
    title: "Integrate our secure APIs",
    description: "Simple integration with comprehensive documentation.",
    icon: <FaPlug className="text-blue-500 text-3xl" />,
  },
  {
    number: 3,
    title: "Launch your digital bank",
    description: "Go live with your branded banking solution.",
    icon: <FaRegCheckCircle className="text-blue-500 text-3xl" />,
  },
];

const ThreeStepSection = () => {
    return (
        <div class="bg-[#f9fbe6] py-12">
            <section className=" max-w-[1200px] mx-auto px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-12">
                    Go Live in 3 Easy Steps
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                                    {step.number}
                                </div>

                                {/* Custom icon */}
                                <div className="mb-4">{step.icon}</div>

                                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}

                        {/* Arrows Between Steps */}
                        <div className="hidden md:flex absolute left-1/3 translate-x-full top-[250px] text-blue-500 text-xl">
                            <FaArrowRight />
                        </div>
                        <div className="hidden md:flex absolute right-1/3 -translate-x-full top-[250px] text-blue-500 text-xl">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ThreeStepSection;
