import { useState } from 'react';
import logo from '../../../public/image/788.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from '../UI/Button';
import { NavLink } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

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
                { name: 'GST verification API', path: '/product/GST-verification' },
                { name: 'Product 2', path: '/product/product2' },
                { name: 'Product 3', path: '/product/product3' },
                { name: 'Product 4', path: '/product/product4' },
                { name: 'Product 5', path: '/product/product5' },
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
        <section className='fixed bg-transparent backdrop-blur-lg top-0 left-0 w-full z-50'>
            <header className="flex justify-between items-center px-8 py-4 w-full mx-auto relative max-w-[1200px]">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Mpluse" className='h-11 w-full' />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center">
                    <ul className='flex gap-8 items-center '>
                        {navItems.map(({ name, path, subMenu }) => (
                            <li key={name} className='h-10 flex items-center cursor-pointer relative group'>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-red-500 font-semibold border-b-2 border-red-500'
                                            : 'hover:text-green-500'
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
                                                    className="flex justify-center capitalize"
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
                <Button className="border" text='Sign Up' />

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
                                                    ? 'text-red-500 font-semibold underline'
                                                    : 'hover:text-red-500'
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
                                        <ul className="flex flex-col gap-2 mt-2 w-full bg-green-200 rounded-md p-2">
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
