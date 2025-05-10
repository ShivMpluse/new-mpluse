import { Star } from 'lucide-react';
import Button from '../../UI/Button';

const testimonial = {
    title: 'How FinCredit NBFC reduced onboarding time by 73%',
    stats: [
        'Reduced KYC processing time from 48 hours to 13 minutes',
        'Decreased customer drop-off rate by 42%',
        'Improved fraud detection by 67%',
    ],
    name: 'Rajiv Sharma',
    position: 'CTO, FinCredit NBFC',
    quote:
        "Implementing Mpluse’s KYC solution transformed our customer onboarding experience. What used to take days now happens in minutes, with better security and compliance. Our team can focus on core lending activities instead of document verification.",
    rating: 5,
};

export default function ClientSuccessStory() {
    return (
        <div class="bg-white py-18">
            <div className="max-w-[1200px] border border-gray-300 mx-auto flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md ">
            {/* Left section */}
                <div className="bg-blue-900 text-white md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Client Success Story</h2>
                    <h3 className="text-lg font-medium mb-6">{testimonial.title}</h3>
                    <ul className="space-y-2 mb-6">
                    {testimonial.stats.map((stat, index) => (
                        <li key={index} className="flex items-start gap-2">
                        <span className="text-white">✔</span>
                        <span>{stat}</span>
                        </li>
                    ))}
                    </ul>
                    <Button text="Read Full Case Study" className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-blue-100" />
                </div>

            {/* Right section */}
                <div className="md:w-1/2 p-8 bg-white">
                    <div className="flex items-center gap-4 mb-2">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <span className="text-xl">👤</span>
                    </div>
                    <div>
                        <p className="font-bold text-gray-800">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                    </div>
                    <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                    <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} size={18} fill="currentColor" />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
