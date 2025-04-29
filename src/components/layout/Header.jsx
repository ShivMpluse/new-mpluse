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
        if (!toggle) {
            setOpenSubmenu(null);
        }
    };

    const navItems = [
        { name: 'Home', path: '/' },
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
                    <img src={logo} alt="Mpluse" className='h-11 w-auto' />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center">
                    <ul className='flex gap-8 items-center'>
                        {navItems.map(({ name, path, subMenu }) => (
                            <li key={name} className='relative group'>
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
                                    <ul className="p-4 absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white shadow-lg rounded-md grid grid-cols-3 gap-6 min-w-[800px] z-20">
                                        {subMenu.map((item) => (
                                            <li key={item.name} className='p-2'>
                                                <NavLink
                                                    to={item.path}
                                                    className="block text-center capitalize hover:underline"
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

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button className="border" text='Sign Up' />
                </div>

                {/* Hamburger Icon Mobile */}
                <div className="lg:hidden">
                    <button onClick={handleMenuToggle}>
                        {toggle ? <IoClose className='text-3xl' /> : <GiHamburgerMenu className='text-3xl' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {toggle && (
                    <div className="absolute top-full left-0 w-full bg-lime-200 p-6 lg:hidden z-40">
                        <ul className='flex flex-col gap-4'>
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
                                        {subMenu ? (
                                            <span className="text-lg font-medium">{name}</span>
                                        ) : (
                                            <NavLink
                                                to={path}
                                                onClick={() => setToggle(false)}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? 'text-red-500 font-semibold underline'
                                                        : 'hover:text-red-500'
                                                }
                                            >
                                                {name}
                                            </NavLink>
                                        )}
                                        {subMenu && (
                                            <span className="text-2xl">
                                                {openSubmenu === name ? '-' : '+'}
                                            </span>
                                        )}
                                    </div>

                                    {/* SubMenu Items Mobile */}
                                    {subMenu && openSubmenu === name && (
                                        <ul className="flex flex-col gap-2 mt-2 bg-green-200 rounded-md p-2">
                                            {subMenu.map((item) => (
                                                <li key={item.name}>
                                                    <NavLink
                                                        to={item.path}
                                                        onClick={() => setToggle(false)}
                                                        className="capitalize block text-center py-2 hover:bg-green-300 rounded"
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

                        {/* Mobile Button */}
                        <div className="mt-6">
                            <Button className="w-full" text='Sign Up' />
                        </div>
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
