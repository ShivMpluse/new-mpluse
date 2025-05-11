import { useState, useEffect } from 'react';
import logoDark from '../../../public/image/788.png';
import logoLight from '../../../public/image/logo-full2.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    const navItems = [
        { name: 'Home', path: './' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
        {
            name: 'Product',
            path: '/product',
            subMenu: [
                { name: 'GST verification', path: '/product/GST-verification' },
                { name: 'PAN verification', path: '/product/PAN-verification' },
                { name: 'Banking Service', path: '/product/Banking-service' },
                { name: 'KYC & Onboarding', path: '/product/kyc-onboarding' },
                { name: 'UPI Payment Solution', path: '/product/UPI-payment-solution' },
                { name: 'Product 6', path: '/product/product6' },
                { name: 'Product 7', path: '/product/product7' },
                { name: 'Product 8', path: '/product/product8' },
                { name: 'Product 9', path: '/product/product9' },
                { name: 'Product 10', path: '/product/product10' },
                { name: 'Product 11', path: '/product/product11' },
                { name: 'Product 12', path: '/product/product12' },
            ]
        }
    ];

    return (
        <section className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${scrolled ? 'bg-black text-white shadow-md' : 'bg-transparent text-black backdrop-blur-lg'}`}>
            
            <header className="flex justify-between items-center px-8 py-4 w-full mx-auto relative max-w-[1200px]">
                
                {/* Logo */}
                <div>
                    <NavLink to="/">
                        <img src={scrolled ? logoLight : logoDark} alt="Mpluse" className='h-11 w-full' />
                    </NavLink>
                        
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center">
                    <ul className='flex gap-8 items-center'>
                        {navItems.map(({ name, path, subMenu }) => (
                            <li key={name} className='relative group h-10 flex items-center cursor-pointer'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `font-semibold border-b-2 ${scrolled ? 'text-yellow-400 border-yellow-400' : 'text-red-500 border-red-500'}`
                                            : `${scrolled ? 'text-gray-300 hover:text-white' : 'hover:text-green-500'}`
                                    }
                                >
                                    {name}
                                </NavLink>
                                {subMenu && (
                                    <ul className="p-4 absolute top-full opacity-90 left-[-700px] text-white bg-gray-800 shadow-md rounded hidden group-hover:grid grid-cols-3 gap-6 min-w-[1000px]">
                                        {subMenu.map((item) => (
                                            <li key={item.name} className='p-6'>
                                                <NavLink
                                                    to={item.path}
                                                    className="flex justify-center capitalize hover:text-yellow-400"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Button */}
                <Button
                    className={`${scrolled ? 'bg-white text-black border-white' : 'bg-black text-white border-black'} transition-all duration-300`}
                    text='Sign Up'
                />

                {/* Hamburger for Mobile */}
                <div className="lg:hidden">
                    <button onClick={handleMenuToggle}>
                        {toggle ? <IoClose className='text-2xl' /> : <GiHamburgerMenu className='text-2xl' />}
                    </button>
                </div>

                {/* Mobile Menu with Scroll */}
                {toggle && (
                    <div className={`absolute top-full left-0 w-[50%] ${scrolled ? 'bg-black text-white' : 'bg-white text-black'} p-4 lg:hidden max-h-[90vh] overflow-y-auto rounded-b-md`}>
                        <ul className='flex flex-col gap-4 items-center'>
                            {navItems.map(({ name, path, subMenu }) => (
                                <li key={name} className="w-full">
                                    <div
                                        onClick={() => {
                                            if (subMenu) {
                                                setOpenSubmenu(openSubmenu === name ? null : name);
                                            } else {
                                                setToggle(false);
                                            }
                                        }}
                                        className="flex justify-between items-center w-full px-4 py-2 cursor-pointer"
                                    >
                                        <NavLink
                                            to={subMenu ? '#' : path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `${scrolled ? 'text-yellow-400' : 'text-red-500'} font-semibold underline`
                                                    : `${scrolled ? 'hover:text-gray-200' : 'hover:text-red-500'}`
                                            }
                                        >
                                            {name}
                                        </NavLink>
                                        {subMenu && (
                                            <span className="text-xl">
                                                {openSubmenu === name ? '-' : '+'}
                                            </span>
                                        )}
                                    </div>

                                    {/* SubMenu Items */}
                                    {subMenu && openSubmenu === name && (
                                        <ul className="flex flex-col gap-2 mt-2 w-full bg-white text-black rounded-md p-2 justify-start">
                                            {subMenu.map((item) => (
                                                <li key={item.name}>
                                                    <NavLink
                                                        to={item.path}
                                                        onClick={() => setToggle(false)}
                                                        className="capitalize text-center block w-full py-2 hover:bg-green-300 rounded"
                                                    >
                                                        {item.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
