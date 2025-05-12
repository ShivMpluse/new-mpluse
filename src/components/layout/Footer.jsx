import logo from '../../../public/image/logo-full2.png';
import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaPhoneAlt, FaRegAddressBook } from "react-icons/fa";
import { MdOutlineMail, MdCorporateFare } from "react-icons/md";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        alert(`Thanks for subscribing: ${email}`);
        setEmail("");
    };

    const footerLinks = [
        { name: 'Refund & Policy', path: '/refund-policy' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'product-1', path: '/product-1' }
    ];

    const contactInfo = [
        {
            icon: <MdOutlineMail className="text-red-400 text-2xl" />,
            label: "Email",
            value: "support@mpluase.in"
        },
        {
            icon: <FaPhoneAlt className="text-green-400 text-xl" />,
            label: "Phone",
            value: "011-69046382"
        },
        {
            icon: <FaRegAddressBook className="text-blue-400 text-2xl" />,
            label: "Registered Address",
            value: "119, Lane Number 11, New Defence Colony Uttaretiya Lucknow 226025"
        },
        {
            icon: <MdCorporateFare className="text-green-400 text-2xl" />,
            label: "Corporate Address",
            value: "A45/1 Aashray 1 Sulabh Awas Behind Of Janeshwar Mishra Park Gomtinagar Extension Sector 1, 226010"
        }
    ];

    const product = [
        { name: 'GST verification', path: '/product/GST-verification' },
        { name: 'PAN verification', path: '/product/PAN-verification' },
        { name: 'Banking Service', path: '/product/Banking-service' },
        { name: 'KYC & Onboarding', path: '/product/kyc-onboarding' },
        { name: 'UPI Payment Solution', path: '/product/UPI-payment-solution' },
        { name: 'OCR Verification', path: '/product/ocr-verification' },
    ]

    return (
        <footer className="bg-black text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 max-w-[1200px] mx-auto">
                {/* Logo & Description */}
                <div>
                    <NavLink to='/'>
                        <img src={logo} alt="mpluse" className="h-18 w-33 object-contain" />
                    </NavLink>
                    <p className="text-sm mt-2 text-[#CDCDCD] text-justify">
                        Mpluse Fintech Pvt Ltd is a tech platform offering API-based fintech infra and white-labeled solutions in collaboration with regulated partners. We are not a bank/NBFC and do not hold any regulatory license.
                    </p>
                    <div className="flex gap-4 text-2xl mt-4">
                        <NavLink to="https://instagram.com/mpluseltd" target="_blank"><IoLogoInstagram className="text-red-500" /></NavLink>
                        <NavLink to="https://facebook.com/mpluseltd" target="_blank"><IoLogoFacebook className="text-blue-500" /></NavLink>
                        <NavLink to="https://whatsapp.com/channel/0029VarVa5yHQbS2kGZiJg2F" target="_blank"><IoLogoWhatsapp className="text-green-500" /></NavLink>
                        <NavLink to="https://twitter.com/mpluseltd" target="_blank"><BsTwitterX className="text-blue-500" /></NavLink>
                        <NavLink to="https://linkedin.com/company/mpluseltd" target="_blank"><FaLinkedin className="text-blue-500" /></NavLink>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="py-4">
                    <h2 className="text-lg font-semibold mb-2">Pages</h2>
                    <ul className="space-y-1">
                        {footerLinks.map(({ name, path }) => (
                            <li key={path}>
                                <NavLink to={path} className="capitalize hover:underline">{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="py-4">
                    <h2 className="text-lg font-semibold mb-2 capitalize">product</h2>
                    <ul className="space-y-1">
                        {product.map(({ name, path }) => (
                            <li key={path}>
                                <NavLink to={path} className="capitalize hover:underline">{name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Newsletter */}
                <div className="py-4">
                    <h2 className="text-lg font-semibold mb-2">Get In Touch</h2>
                    <ul className="space-y-2 text-sm text-[#CDCDCD]">
                        {contactInfo.map(({ icon, label, value }) => (
                            <li key={label} className="flex gap-2 items-start">
                                <span className="text-white flex gap-1 items-center">{icon} {label}:</span> <span>{value}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 space-y-2">
                        <h2 className="text-xl font-semibold">Stay Updated</h2>
                        <p className="text-sm text-gray-400">Subscribe to get the latest fintech updates.</p>
                        <label className="text-sm flex gap-2 items-center">
                            <input type="checkbox" required />
                            I agree to the <span className="underline">Terms & Conditions</span>
                        </label>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 w-full text-white bg-transparent border border-white outline-none"
                            />
                            <button
                                onClick={handleSubscribe}
                                className="bg-blue-700 px-4 py-2 text-white"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-3 border-t border-[#777676] text-gray-400 text-sm">
                <p>© 2025 <span className="text-gray-200">Mpluse Fintech Pvt Ltd</span>. All rights reserved.</p>
                <NavLink to="/disclaimer" className="hover:text-white mt-2 sm:mt-0">Disclaimer</NavLink>
            </div>
        </footer>
    );
};

export default Footer;
