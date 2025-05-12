import React from 'react';
import Button from '../../UI/Button';

const Instantly = ({ mainHeading, description, btn1, btn2  }) => {
    return (
        <section className="bg-gradient-to-br from-[#0b122d] to-[#0b163d] text-white py-24 px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {mainHeading}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
                {description}
                {/* Fast, Secure, Trusted GST APIs for Your Business */}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button text={btn1} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow" />
                <Button text={btn2} className="border border-white hover:bg-white hover:text-[#0b122d] text-white font-semibold px-6 py-3 rounded-md transition" />
            </div>
        </section>
    );
};

export default Instantly;