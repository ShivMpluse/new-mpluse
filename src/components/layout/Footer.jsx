import data from '../../footer data/FooterData.js';
import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        // Yaha aap API call ya toast add kar sakte ho
        alert(`Thanks for subscribing: ${email}`);
        setEmail("");
    };

    return (
        <section className='w-full z-50 '>
            <footer className='bg-[#000000] text-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 max-w-[1400px] mx-auto">
                    {data.map((section) => (
                        <div key={section.id} className='p-2 flex flex-col'>
                            {section.image && (
                                <div className="img mb-2 flex flex-col justify-center ">
                                    <img src={section.image} alt={section.name} className='h-18 w-33 object-contain' />
                                    <p className="text-justify capitalize text-xs mt-2 text-[#CDCDCD] text-[14px]">{section.description}</p>
                                    <div className="flex gap-4 text-3xl py-4 justify-evenly">
                                        <IoLogoInstagram className='text-red-500' />
                                        <IoLogoFacebook className='text-blue-500' />
                                        <IoLogoWhatsapp className='text-green-500' />
                                        <FaTwitter className='text-blue-500' />
                                        <FaLinkedin className='text-blue-500' />
                                    </div>
                                </div>
                            )}
                            {section.title && (
                                <>
                                    <h3 className="font-bold text-2xl mb-2 px-4 capitalize">{section.title}</h3>
                                    <ul className="space-y-1 ">
                                        {section.features?.map((item, idx) => (
                                            <li key={idx} className="hover:text-gray-400 p-1 text-gray-100 cursor-pointer px-4 mx-auto capitalize">
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    ))}

                    

                    {/* 👇 Extra Column for Newsletter */}
                    <div className="p-2 flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold mb-2 capitalize">Stay Updated</h2>
                        <p className='text-sm text-gray-400'>
                            Subscribe to our newsletter to get latest fintech updates.
                        </p>
                        <label className="text-sm">
                            <input type="checkbox" required /> I agree to the{" "}
                            <NavLink to="/terms-and-conditions" target='' className="text-blue-500 underline">
                                Terms & Conditions
                            </NavLink>
                        </label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 text-white rounded-md w-full outline-none focus:ring-2 focus:ring-red-300 border border-white"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center py-6 justify-center text-gray-400 border-t border-[#777676] gap-2 text-[14.4px]">
                    <p className="flex">© 2025 Mpluse Fintech. All rights reserved. | Empowering Digital Finance for All</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
