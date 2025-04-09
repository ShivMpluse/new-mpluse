import { useState } from 'react';
import logo from '../../../public/image/788.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Header() {
    const [toggle, setToggle] = useState(false);

    const handleMenuToggle = () => {
        setToggle(!toggle);
    };

    return (
        <section className='fixed bg-white/20 backdrop-blur-3xl top-0 left-0 w-full z-50'>
            <header className="flex justify-between items-center px-8 py-4 w-full mx-auto relative max-w-[1400px]">
            {/* Logo Section */}
            <div className="w-34">
                <img src={logo} alt="Mpluse" className='h-10 w-full' />
            </div>

            {/* Navigation Links for Large Screens */}
            <nav className="hidden lg:flex gap-8 items-center">
                <ul className='flex gap-8 items-center font-semibold'>
                    <li className='h-10 flex items-center'>Personal Loan</li>
                    <li className='h-10 flex items-center'>One Card</li>
                    <li className='h-10 flex items-center'>Savings</li>
                    <li className='h-10 flex items-center'>Checking</li>
                    <li className='h-10 flex items-center'>Help</li>
                </ul>
            </nav>
            <button className="border p-2 rounded-lg sm:hidden lg:flex max-h-6xl">Sign Up</button>

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
