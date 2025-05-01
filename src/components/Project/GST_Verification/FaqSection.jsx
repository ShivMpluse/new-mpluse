import React, { useState } from 'react';

const faqData = [
    {
        question: 'How accurate is the GST verification?',
        answer:
        'Our GST verification is 100% accurate as we directly fetch data from the GSTN portal in real-time. This ensures authenticity and reliability.',
    },
    {
        question: 'How long does the API integration take?',
        answer:
        'Most clients integrate our API within a day. Our comprehensive documentation and developer support team make it easy.',
    },
    {
        question: 'What information is returned by the API?',
        answer:
        'Our API returns comprehensive GST details including business name, address, registration date, business type, and more.',
    },
    {
        question: 'Do you offer bulk verification?',
        answer:
        'Yes, we offer bulk verification capabilities through our enterprise API plans. You can verify multiple GSTINs in a single call.',
    },
];

const FaqSection = ({
    mainbg
}) => {


    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqCard = "duration-300 hover:scale-102 rounded-md border border-pink-500/40 shadow-md hover:shadow-xl shadow-pink-500/40 bg-gradient-to-br from-[#0b122d] to-[#0b163d]"

    return (
        <div className={`${mainbg}`}>
            <section className="py-16 px-4 max-w-[1200px] mx-auto">
                <h2 className="text-2xl font-bold text-center  mb-10">GST API FAQs</h2>

                <ul className="space-y-4">
                    {faqData.map((item, index) => (
                        <li
                            key={index}
                            className={`${faqCard} `}
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className={`w-full text-left px-6 py-4 font-medium text-white flex justify-between items-center `}
                                >
                                <span>{item.question}</span>
                                <span>{openIndex === index ? '−' : '+'}</span>
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4  text-sm ">
                                    {item.answer}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FaqSection;
