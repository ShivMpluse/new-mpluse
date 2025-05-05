import React from 'react';
import Button from '../../UI/Button';

const StartBuilding = ({ mainHeading, discription}) => {
    return (
        <section className="bg-gradient-to-br from-[#0b122d] to-[#0b163d] text-white py-24 px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {mainHeading}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8">
                {discription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button text='request demo' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow" />
                <Button text='explore API docs' className="border border-white hover:bg-white hover:text-[#0b122d] text-white font-semibold px-6 py-3 rounded-md transition" />
            </div>
        </section>
    );
};

export default StartBuilding;