import { FaCheckCircle } from "react-icons/fa";
import api from '../../../assets/image/api.png';
import Button from "../../UI/Button";

const features = [
    "RESTful APIs with JSON responses",
    "Sandbox environment for testing",
    "Code samples in multiple languages",
    "Comprehensive API documentation",
];

const Easy_Integration = () => {
    return (
        <div class="bg-[#d8eefc]">
            <section className="max-w-[1200px] mx-auto py-16 px-4 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Side Text */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Easy Integration</h2>
                        <p className="text-gray-600 mb-6">
                            Our developer-first approach makes integration seamless with comprehensive
                            documentation and support.
                        </p>
                        <ul className="space-y-3 mb-6">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700">
                                    <FaCheckCircle className="text-blue-500 mt-1" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button text="Explore API Docs" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" />
                    </div>

                    {/* Right Side Laptop Image */}
                    <div className="flex justify-center">
                    <img
                        src={api}
                        alt="Code on Laptop"
                        className="max-w-full h-auto"
                    />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Easy_Integration;
