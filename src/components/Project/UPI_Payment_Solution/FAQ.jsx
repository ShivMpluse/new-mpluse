import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How fast are UPI payments processed?',
    answer: 'UPI payments are usually processed within 2 seconds or less under normal conditions.',
  },
  {
    question: 'Can I customize the QR codes?',
    answer: 'Yes, we provide customizable QR codes with branding and tracking options.',
  },
  {
    question: 'How secure is the UPI payment system?',
    answer: 'UPI uses bank-grade encryption and secure APIs, ensuring end-to-end security.',
  },
  {
    question: 'What happens if a payment fails?',
    answer: 'Failed payments are automatically reversed to the payer’s account within a few minutes.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div class="bg-[#e6f2fb]">
        <div className="max-w-[1200px] mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-bold text-[#0d1b3e] mb-12">FAQs</h2>
            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md text-left transition-all duration-300 hover:scale-102"
                >
                    <button
                    onClick={() => toggle(index)}
                    className="w-full px-6 py-4 flex justify-between items-center font-semibold text-[#0d1b3e] focus:outline-none"
                    >
                    <span>{faq.question}</span>
                    <FiChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                        }`}
                    />
                    </button>
                    {openIndex === index && (
                    <div className="px-6 pb-4 text-sm text-gray-600">{faq.answer}</div>
                    )}
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
