import { useState } from 'react';
import logo from '../../../public/image/788.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from '../Button';

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    return (
        <section className=' fixed bg-transparent backdrop-blur-3xl top-0 left-0 w-full z-50'>
            <header className="flex justify-between items-center px-8 py-4 w-full mx-auto relative max-w-[1200px]">
            {/* Logo Section */}
            <div className="">
                <img src={logo} alt="Mpluse" className='h-11 w-full' />
            </div>

            {/* Navigation Links for Large Screens */}
            <nav className="hidden lg:flex gap-8 items-center">
                <ul className='flex gap-8 items-center '>
                    <li className='h-10 flex items-center cursor-pointer'>Personal Loan</li>
                    <li className='h-10 flex items-center cursor-pointer'>One Card</li>
                    <li className='h-10 flex items-center cursor-pointer'>Savings</li>
                    <li className='h-10 flex items-center cursor-pointer'>Checking</li>
                    <li className='h-10 flex items-center cursor-pointer'>Help</li>
                </ul>
            </nav>
            <Button className="border rounded-lg sm:hidden lg:flex max-h-6xl" text='Sign Up' />

            {/* Hamburger Menu Icon for Small Screens */}
            <div className="lg:hidden">
                <button onClick={handleMenuToggle}>
                    {toggle ? <IoClose className='text-2xl' /> : <GiHamburgerMenu className='text-2xl' />}
                </button>
            </div>

            {/* Mobile Menu */}
            {toggle && (
                <div className="absolute top-full left-0 w-full bg-lime-200 p-4 lg:hidden">
                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='h-10 flex items-center'>Personal Loan</li>
                        <li className='h-10 flex items-center'>One Card</li>
                        <li className='h-10 flex items-center'>Savings</li>
                        <li className='h-10 flex items-center'>Checking</li>
                        <li className='h-10 flex items-center'>Help</li>
                    </ul>
                    <button className="border p-2 rounded-lg mt-4 w-full">Sign Up</button>
                </div>
            )}
            </header>
        </section>
    );
}

export default Header;
