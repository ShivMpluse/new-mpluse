import React from 'react';

const projects = [
    {
        title: 'UPI Payment Gateway',
        description: 'Secure UPI integration for seamless transactions.',
        imageUrl: './image/upi.png',
    },
    {
        title: 'Smart Billing Platform',
        description: 'Automated billing system with real-time analytics.',
        imageUrl: './image/upi.png',
    },
    {
        title: 'Merchant Dashboard',
        description: 'Comprehensive dashboard for merchants to track sales.',
        imageUrl: './image/upi.png',
    },
];

const OurWork = () => {
    return (
        <section className="bg-gray-100 py-12  sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Work</h2>
            <p className="mt-4 text-lg text-gray-600">
            Showcasing our latest fintech solutions and innovations.
            </p>
        </div>

        <ul className="mt-10 grid gap-8 lg:grid-cols-3 md:grid-cols-2grid-cols-1 mx-auto ">
            {projects.map((project, index) => (
            <li
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
                <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-56 object-fit"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                </div>
            </li>
            ))}
        </ul>
        </section>
    );
};

export default OurWork;
