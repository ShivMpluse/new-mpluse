import { useState } from 'react';

const faqData = [
    {
        question: "Which APIs are included in BaaS?",
        answer: "Our BaaS platform includes Account APIs, Payment APIs (UPI, IMPS, NEFT), KYC APIs, Card APIs, and more."
    },
    {
        question: "How secure is the data?",
        answer: "All data is encrypted at rest and in transit. We follow PCI DSS standards for card data and financial information."
    },
    {
        question: "Can I start with only KYC or UPI?",
        answer: "Yes, our platform is modular. You can start with just the KYC or UPI module and add more as needed."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div class=" bg-[#eaf2fb]">
            <section className="max-w-[1200px] mx-auto py-20 px-4">
                <ul className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl font-bold text-[#1e3a5f] mb-10">
                    Frequently Asked Questions
                    </h2>

                    {faqData.map((faq, index) => (
                        <li
                            key={index}
                            className="bg-white mb-4 p-6 rounded-md cursor-pointer transition-all shadow-lg hover:shadow-xl hover:scale-101 duration-500"
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-[#1e3a5f]">{faq.question}</h3>
                                <span className="text-xl">{openIndex === index ? "▲" : "▼"}</span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-3 text-[#333] text-base">{faq.answer}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FAQ;
