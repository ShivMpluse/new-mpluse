import logo from '../../../public/image/logo-full2.png'
import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        // Yaha aap API call ya toast add kar sakte ho
        alert(`Thanks for subscribing: ${email}`);
        setEmail("");
    };


    let description = `Mpluse Fintech Private Limited is a technology platform that provides API-based financial infrastructure and white-labeled solutions in partnership with licensed banks, NBFCs, and payment aggregators. We are not a bank, NBFC, or payment aggregator and do not hold or claim to hold any license from RBI, NPCI, or any regulatory authority. All financial services and settlements enabled through our platform are operated solely by our regulated partners. Mpluse does not hold end-user funds and acts strictly as a technology facilitator.` 
    const registeredAddress = `119, Lane Number 11, New Defence Colony Uttaretiya Lucknow 226025`
    const corporateAddress = ` Laxmi Market,Sector 1, Gomti Nagar, Lucknow, Uttar Pradesh 226010`



    return (
        <section className='w-full z-50 '>
            <footer className='bg-[#000000] text-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-[1400px] mx-auto">
                    <div className="img mb-2 flex flex-col justify-center ">
                        <img src={logo} alt="mpluse" className='h-18 w-33 object-contain' />
                        <p className="text-justify capitalize text-xs mt-2 text-[#CDCDCD] text-[14px]">{description}</p>
                        <div className="flex gap-4 text-3xl py-4 justify-evenly">
                            <IoLogoInstagram className='text-red-500' />
                            <IoLogoFacebook className='text-blue-500' />
                            <IoLogoWhatsapp className='text-green-500' />
                            <FaTwitter className='text-blue-500' />
                            <FaLinkedin className='text-blue-500' />
                        </div>
                    </div> 
                    
                    <div className='border-t-3 md:border-t-0 py-4 md:border-l-3 border-[#777676] pl-4'>
                        <ul className='flex flex-col gap-2'>
                            <h2 className='text-lg font-semibold mb-2'>Get In Touch</h2>
                            <li className='flex text-sm text-[#CDCDCD] mb-1'><span className='font-seminbold text-white flex gap-2'><MdOutlineMail className='text-red-400 text-xl capitalize' /> Email : </span> support@mpluase.in</li>
                            <li className='flex text-sm text-[#CDCDCD] mb-1'><span className='font-seminbold text-white flex gap-2'><FaPhoneAlt className='text-green-400 text-xl capitalize' /> Phone : </span> 011-69046382 </li>
                            <li className='flex text-sm text-[#CDCDCD] mb-1'><span className='font-seminbold text-white flex gap-2'><FaRegAddressBook className='text-blue-400 text-3xl capitalize' /> registered Address : </span> {registeredAddress} </li>
                            <li className='flex text-sm text-[#CDCDCD] mb-1'><span className='font-seminbold text-white flex gap-2'><MdCorporateFare className='text-green-400 text-4xl capitalize' /> corporate address : </span> {corporateAddress} </li>
                            {/* <li className='flex text-sm text-[#CDCDCD] mb-1'><span className='font-seminbold text-white flex gap-2'><FaPhoneAlt className='text-green-400 text-xl capitalize' /> Phone : </span></li> */}
                        </ul>
                    </div>
                    <div className='border-t-3 md:border-t-0 py-4 md:border-l-3 border-[#777676] pl-4'>
                        <ul>
                            <h2 className='text-lg font-semibold mb-2'>Pages</h2>
                            <li className='text-sm text-[#CDCDCD] mb-1 hover:text-white'><NavLink to='/About'>About</NavLink></li>
                            <li className='text-sm text-[#CDCDCD] mb-1'><NavLink to='/contact'>Contact</NavLink></li>
                            <li className='text-sm text-[#CDCDCD] mb-1'>Subscription</li>
                            <li className='text-sm text-[#CDCDCD] mb-1'>Invoices</li>
                            <li className='text-sm text-[#CDCDCD] mb-1'>UPI Solution</li>
                        </ul>
                    </div>
                    <div className='border-t-3 md:border-t-0 py-4 md:border-l-3 border-[#777676] pl-4'>
                        <div className="p-2 flex flex-col space-y-3 ">
                            <h2 className="text-2xl font-semibold mb-2 capitalize">Stay Updated</h2>
                            <p className='text-sm text-gray-400'>
                                Subscribe to our newsletter to get latest fintech updates.
                            </p>
                            <label className="text-sm">
                                <input type="checkbox" required /> I agree to the{" "}
                                <NavLink to="/terms-and-conditions" target='_blank' className="text-blue-500 underline">
                                    Terms & Conditions
                                </NavLink>
                            </label>
                        </div>


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

                    {/* 👇 Extra Column for Newsletter */}
                    
                </div>

                <div className="flex items-center py-6 justify-evenly text-gray-400 border-t border-[#777676] gap-2 text-[14.4px]">
                    <p className="flex">© 2025 Mpluse Fintech. All rights reserved. | Empowering Digital Finance for All</p>
                    <div className='flex '>
                        <NavLink to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                            Disclaimer |  
                        </NavLink>
                        <NavLink to="/terms-and-conditions" target='' className="text-gray-400 hover:text-white text-sm"> &nbsp;Terms & Conditions</NavLink>
                    </div>
                    
                </div>
            </footer>
        </section>
    );
};

export default Footer;

// Privacy Policy |