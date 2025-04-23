import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

const ContactForm = () => {
    return (
        <Section className="max-w-[1200px] mx-auto px-4 py-18">
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
                <form className="space-y-6 p-6 rounded-lg shadow-[0_0_1px_1px_gray]">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full  rounded px-3 py-1 focus:outline-none shadow-[0_0_1px_1px_gray]"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full shadow-[0_0_1px_1px_gray] px-3 py-1 rounded p-3 "
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            rows="5"
                            className="mt-1 block w-full shadow-[0_0_1px_1px_gray] px-3 py-1 rounded p-3 "
                            placeholder="Type your message..."
                        ></textarea>
                    </div>
                    <Button text='send message' className='border bg-blue-500 text-white' />
                </form>
                </div>

                {/* Contact Info */}
                <div className=" p-6 rounded-lg  shadow-[0_0_1px_1px_gray] space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800 capitalize">Our corporate  Office address</h2>
                    <p className="text-gray-600 capitalize">Mpluse Fintech Pvt. Ltd.<br />A45/1 Aashray 1 Sulabh Awas Behaind Of Janeshwar Mishra Park Gomtinager Extention Sector 1, 226010</p>

                    <h2 className="text-xl font-semibold text-gray-800 capitalize">Our registered  Office address</h2>
                    <p className="text-gray-600 capitalize">Mpluse Fintech Pvt. Ltd.<br />119, Lane Number 11, New Defence Colony Uttaretiya Lucknow 226025</p>

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
        </Section>
    );
};

export default ContactForm;

const Section = styled.section`
    background-color: #eaf0f9d6;
`
