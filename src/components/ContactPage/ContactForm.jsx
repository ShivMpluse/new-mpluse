import React from "react";
import Button from "../UI/Button";

const ContactForm = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-18">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
                <p className="text-gray-600">
                We're here to help! Reach out for support, partnership, or general queries.
                </p>
            </div>

            {/* Main Grid Section */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <div>
                <form className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows="5"
                            className="mt-1 block w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Type your message..."
                        ></textarea>
                    </div>
                    <Button text='send message' className='border bg-blue-500 text-white' />
                </form>
                </div>

                {/* Contact Info */}
                <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Our Office</h2>
                    <p className="text-gray-600">Mpluse Fintech Pvt. Ltd.<br />Lucknow, Uttar Pradesh, India</p>

                    <h2 className="text-xl font-semibold text-gray-800">Email</h2>
                    <p className="text-blue-600">support@mpluse.in</p>

                    <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
                    <p className="text-gray-700">011-69046382</p>

                    <h2 className="text-xl font-semibold text-gray-800">Working Hours</h2>
                    <p className="text-gray-600">Mon - Fri: 10:00 AM to 6:00 PM</p>
                </div>
            </div>

            <div className="mt-12 py-12">
                <iframe
                src="https://www.google.com/maps/embed?..."
                className="w-full h-80 rounded-lg"
                loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactForm;
