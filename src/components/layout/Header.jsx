import { useState } from 'react';
import logo from '../../../public/image/788.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    const navItems = [
        { name: 'Home', path: './' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Contact US', path: '/contactUS' },
    ];

    return (
        <section className='fixed bg-transparent backdrop-blur-lg top-0 left-0 w-full z-50'>
            <header className="flex justify-between items-center px-8 py-4 w-full mx-auto relative max-w-[1200px]">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Mpluse" className='h-11 w-full' />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center">
                    <ul className='flex gap-8 items-center'>
                        {navItems.map(({ name, path }) => (
                            <li key={name} className='h-10 flex items-center cursor-pointer'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-red-500 font-semibold border-b-2 border-red-500'
                                            : 'hover:text-red-500'
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Button */}
                <Button className="border rounded-lg sm:hidden lg:flex max-h-6xl" text='Sign Up' />

                {/* Hamburger for Mobile */}
                <div className="lg:hidden">
                    <button onClick={handleMenuToggle}>
                        {toggle ? <IoClose className='text-2xl' /> : <GiHamburgerMenu className='text-2xl' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {toggle && (
                    <div className="absolute top-full left-0 w-full bg-lime-200 p-4 lg:hidden">
                        <ul className='flex flex-col gap-4 items-center'>
                            {navItems.map(({ name, path }) => (
                                <li key={name} className="h-10 flex items-center">
                                    <NavLink
                                        to={path}
                                        onClick={() => setToggle(false)} // close on click
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-red-500 font-semibold underline'
                                                : 'hover:text-red-500'
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <button className="border p-2 rounded-lg mt-4 w-full">Sign Up</button>
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
